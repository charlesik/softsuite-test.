// features/elements/elementsSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the schema
interface Element {
    name: string;
    description: string;
    payRunId: number;
    payRunValueId: number;
    classificationId: number;
    classificationValueId: number;
    categoryId: number;
    categoryValueId: number;
    reportingName: string;
    processingType: string;
    status: string;
    prorate: string;
    effectiveStartDate: string;
    effectiveEndDate: string;
    selectedMonths: string[];
    payFrequency: string;
}

// Define the initial state
interface ElementsState {
    entities: Element[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null | undefined;
}

const initialState: ElementsState = {
    entities: [],
    loading: 'idle',
    error: null,
};

// Define async thunks for GET and POST requests
export const fetchElements = createAsyncThunk('elements/fetchElements', async () => {
    const response = await axios.get('https://650af6bedfd73d1fab094cf7.mockapi.io/elements');
    console.log(response.data.data.content)
    return response.data.data.content as Element[];
});

export const postElement = createAsyncThunk('elements/postElement', async (element: Element) => {
    const response = await axios.post('https://650af6bedfd73d1fab094cf7.mockapi.io/elements', element);
    return response.data as Element;
});

// Define the slice
const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchElements.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(fetchElements.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.entities = action.payload;
        });
        builder.addCase(fetchElements.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
        builder.addCase(postElement.fulfilled, (state, action) => {
            state.entities.push(action.payload);
        });
    },
});

export default elementsSlice.reducer;

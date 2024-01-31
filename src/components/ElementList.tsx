import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements, postElement } from '../features/elements/elementsSlice';
import { RootState, AppDispatch } from '../store/store';

const ElementList: React.FC =() =>{
    const dispatch : AppDispatch= useDispatch();
    const elements = useSelector((state: RootState) => state.elements.entities);
    const loading = useSelector((state: RootState) => state.elements.loading);

    useEffect(() => {
        dispatch(fetchElements());
    }, [dispatch]);

    if (loading === 'pending') {
        return <div>Loading...</div>;
    }
    return(
        <div>
            {elements.map((element, index) => (
                <div key={index}>{element.name}</div>
            ))}
        </div>
    )

}

export default  ElementList;
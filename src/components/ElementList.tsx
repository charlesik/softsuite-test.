import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchElements, postElement } from "../features/elements/elementsSlice";
import { RootState, AppDispatch } from "../store/store";

const ElementList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const elements = useSelector((state: RootState) => state.elements.entities);
  const loading = useSelector((state: RootState) => state.elements.loading);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchElements());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = elements.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const elementList = currentItems.map((element, index) => {
    return (
      <tr key={index}>
        <td>{element.name}</td>
        <td>{element.classificationValueId}</td>
        <td>{element.status}</td>
        <td>{element.selectedMonths}</td>
        <td>{element.modifiedBy}</td>
        <td>Action</td>
      </tr>
    );
  });

  if (loading === "pending") {
    return (
      <div className="noelements">
        <img src="no-elements.png" alt="" />
      </div>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Element Classification</th>
            <th>Status</th>
            <th>Date and Time Modified</th>
            <th>Modified By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{elementList}</tbody>
      </table>
      <div className="pagination">
        {[...Array(Math.ceil(elements.length / itemsPerPage))].map((e, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className="pagbtn">
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElementList;

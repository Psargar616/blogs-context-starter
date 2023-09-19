import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border shadow-lg fixed bottom-0 bg-white py-2">
      <div className="flex justify-between w-11/12 max-w-[670px] items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
              className="rounded py-1 px-4 border-2"
              onClick={() => handlePageChange(page - 1)}
            >
              Prev
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded py-1 px-4 border-2"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm ">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Store/user";
import book from '../../Utils/Images/books.png'

function Collections() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state?.users?.userData);
  

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center ">
      {/* {books &&
        books.map((item, index) => {
          return <h1 key={index}>{item.title}</h1>;
        })} */}

  <div className="card">
    <img className="w-full h-full object-cover" src={book} alt="books"/>
    <div className="p-5 flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="badge">Books</span>
        <span className="badge">Books</span>
      </div>
      <h2 className="product-title" title="Best Headphone Ever">
        Best books
      </h2>

    </div>

  </div>
      
    </div>
  );
}

export default Collections;

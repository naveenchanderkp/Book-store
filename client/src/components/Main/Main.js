import React, { useState } from "react";
import Book from "../../Utils/Images/new.jpg";
import { useDispatch } from "react-redux";
import { formDetails } from "../../Store/user";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    genere: "",
    isbn: "",
    pdf: null,
    image: null,
  });
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = new FormData();

    newFormData.append("title", formData.title);
    newFormData.append("author", formData.author);
    newFormData.append("year", parseInt(formData.year, 10));
    newFormData.append("genere", formData.genere);
    newFormData.append("isbn", formData.isbn);
    newFormData.append("pdf", formData.pdf);
    newFormData.append("image", formData.image);
    dispatch(formDetails(newFormData));
    closeModal(true)
   
  };

  return (
    <div className="grid grid-cols-2 px-5 md:px-16">
      <div className="flex flex-col h-screen justify-center">
        <h1 className="text-4xl font-bold leading-10 tracking-wider">
          Knowledge <br />
          Matters
        </h1>
        <p className="text-lg text-light">
          Grow your Knowledge with us and add your favourite books here
        </p>
        <button
          className="px-2 py-2 font-bold text-white bg-green-700 rounded-sm w-40 hover:bg-green-700"
          onClick={openModal}
        >
          Add +
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-screen place-content-center">
        <img src={Book} alt="" />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="container mx-auto p-5">
              <div className="text-black mb-4">
                <h2 className="text-2xl font-bold">Book's Details</h2>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-xl font-bold"
              >
                X
              </button>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="author"
                    >
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="genre"
                    >
                      Genre
                    </label>
                    <input
                      type="text"
                      id="genre"
                      name="genere"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="year"
                    >
                      Published Year
                    </label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="isbn"
                    >
                      ISBN
                    </label>
                    <input
                      type="text"
                      id="isbn"
                      name="isbn"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700
                    "
                      htmlFor="addpdf"
                    >
                      Upload PDF
                    </label>
                    <input
                      type="file"
                      accept="application/pdf"
                      id="pdf"
                      name="pdf"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-sm font-medium text-gray-700
                    "
                      htmlFor="addpdf"
                    >
                      Upload Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      required
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 mr-2"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;

import React, { useEffect, useState } from "react";
import API from "../api/axios";

const GalleryAdmin = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState("");
  const [loading, setLoading] = useState(false);

  // FETCH IMAGES
  const fetchImages = async () => {
    try {
      const res = await API.get("/gallery");
      setImages(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // ADD IMAGE
  const handleAdd = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Image required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", image);
      formData.append("alt", alt);

      await API.post("/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully");

      setImage(null);
      setAlt("");

      fetchImages();
    } catch (err) {
      console.log(err);
      alert("Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  // DELETE IMAGE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      await API.delete(`/gallery/${id}`);
      fetchImages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Gallery Admin
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Manage gallery images
        </p>
      </div>

      {/* ADD FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-4 sm:p-5 rounded-xl shadow mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

          {/* FILE INPUT */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded text-sm"
          />

          <input
            type="text"
            placeholder="Alt text"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
            className="border p-2 rounded text-sm"
          />

        </div>

        {/* PREVIEW */}
        {image && (
          <div className="mt-4 flex justify-center sm:justify-start">
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              className="w-32 h-24 sm:w-40 sm:h-28 object-cover rounded"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Add Image"}
        </button>
      </form>

      {/* IMAGE GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-4 sm:gap-5
      ">

        {images.map((img) => (
          <div
            key={img._id}
            className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition"
          >
            {/* IMAGE */}
            <img
              src={`http://localhost:5000${img.image}`}
              alt={img.alt}
              className="w-full h-32 sm:h-36 md:h-40 object-cover"
            />

            <div className="p-2 sm:p-3 flex justify-between items-center">
              <span className="text-[10px] sm:text-xs text-gray-500 truncate max-w-[70%]">
                {img.alt || "No alt"}
              </span>

              <button
                onClick={() => handleDelete(img._id)}
                className="text-red-500 text-xs sm:text-sm hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default GalleryAdmin;
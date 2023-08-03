import React from "react";
import axios from "axios";


const inputImages = ({ setUserData, userData }) => {
  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "imagesProfile");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/diycik8dw/image/upload",
        formData
      );

  
      const imageUrl = response.data.secure_url;

     
      setUserData({ ...userData, img_url: imageUrl });
    } catch (error) {
      console.error("Error al cargar la imagen en Cloudinary:", error);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </>
  );
};



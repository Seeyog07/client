import React, { useContext, useEffect, useState, useHistory } from "react";
import axios from "axios";

function Image() {
  const [file, setFile] = useState();
  let history = useHistory();

  const onSubmit =  (data) => {
    const formData =new formData();
    formData.append('photo',file);
    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }
    axios
      .post("http://localhost:3001/upload", formData,config, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        alert('Image uploaded successfully')
        history.push("/");
      }).catch((err) => {
        console.log('err',err)
      })
  };
  const onInputChange = (data) => {
    setFile(data.target.files[0])
  }

  return (
  <div>
      <body>Hello</body>
      <form onSubmit={onSubmit}>
          <h1>Image:</h1>
          <input type='file' name="photo" onChange={onInputChange} />
          <button type="submit">Upload</button>
          </form>
  </div>
  );
}

export default Image;
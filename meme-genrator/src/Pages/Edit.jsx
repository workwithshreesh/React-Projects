import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../Component/Text";
import {Button} from "react-bootstrap"
import { toJpeg } from "html-to-image";


const Edit = () =>{
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();
    const saveAsJpeg = () => {
      if (memeRef.current) {
          toJpeg(memeRef.current, { quality: 0.95 })
              .then((dataUrl) => {
                  const link = document.createElement("a");
                  link.download = "meme.jpeg";
                  link.href = dataUrl;
                  link.click();
              })
              .catch((error) => {
                  console.error("Error exporting as JPEG", error);
              });
      }
  };


    const addText = () =>{
        setCount(count+1)
    }
    return (
        <div className="container">
          <div ref={ memeRef }>
          <img src={params.get("url")} alt="memeImage" width="250px" />
          {
            Array(count).fill(0).map(el=>(
                <Text />
            ))
          }
          </div>
          <Button style={{marginTop:"50px", marginRight:"100px"}} onClick={addText}>Add Text</Button>
          <Button variant="success" style={{marginTop:"50px", marginRight:"10px"}} onClick={saveAsJpeg}>Save Text</Button>
        </div>
    );
}

export default Edit;
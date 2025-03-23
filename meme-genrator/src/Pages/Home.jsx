import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import CardComponent from "../Component/Card"
import { getAllMemes } from "../Api/memes";

const HomePage = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAllMemes().then((memes)=>setData(memes.data.memes));
    },[])

    return (
        <div className="row m-2">
            {
                data.map((meme)=>(
                    <CardComponent button={"Edit"} title={meme.name} image={meme.url} />
                ))
            }
        </div>
    );
}

export default HomePage;
import React, { useState } from "react";
import CustomDraggable from "./CustomDraggable";

const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");
    return (
        <span style={{ width: "100%", height: "100vh" }}>
            <CustomDraggable>
                <span style={{ cursor: "move" }}>
                    { editMode ? (
                    <input 
                    value={val} 
                    onDoubleClick={(e) => setEditMode(false)}
                    onChange={(e) => setVal(e.target.value)} />
                    ) :
                    (
                        <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
                    ) 
                    }
                </span>
            </CustomDraggable>
        </span>
    );
};

export default Text;

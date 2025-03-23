import React, { useRef } from "react";
import Draggable from "react-draggable";

const CustomDraggable = ({ children, ...props }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} {...props}>
           <div
           style={{
            position: "absolute"
        }}
                ref={nodeRef}
            >
                {children}
            </div>
        </Draggable>
    );
};

export default CustomDraggable;

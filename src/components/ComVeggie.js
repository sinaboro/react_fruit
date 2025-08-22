import React from "react";

const ComVeggie = (props) => {
    const { imgUrl, title, content, price } = props.veggie;
   
    return (
        <div className="col-md-4" style={{ marginBottom: "50px" }}>
            <img src={imgUrl} width="80%" />
            <h5 style={{ marginTop: "10px" }}>{title}</h5>
            <span>{content}</span>
            <p>{price}</p>
        </div>
    );
};

export default ComVeggie;
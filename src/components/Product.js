import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const items = props.data.map((item) => {
    const {
      id,
      productName,
      url,
      price,
      inventory,
      tags,
      label,
      link,
      description,
    } = item;

    return (
      // ------------------
      //
      <Link key={id} to={`/product/${id}`}>
        {/*  */}

        <li className="quote" key={id}>
          <h1>{productName}</h1>
          {/* ---- img -----*/}

          <img className="img-box" src={url} alt={tags} />

          {/* ---- img -----*/}
          <p>{description}</p>

          <h5>&euro; {price}</h5>

          {/* ---- Btn ----- */}
        </li>
      </Link>
      //
      // ------------------
    );
  });

  return (
    <React.Fragment>
      <h4>Product</h4>
      <ul className="container-products">{items}</ul>
    </React.Fragment>
  );
};

export default Product;

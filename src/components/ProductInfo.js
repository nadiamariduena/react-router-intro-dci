import React from "react";

const ProductInfo = (props) => {
  console.log(props);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    //
    //
    //
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
    //
    //
    //
    return (
      <div key={id} className="box-quote">
        <h3 className="headline-productName">{productName}</h3>
        <img className="img-box" src={url} alt={tags} />
        <h4>{inventory}</h4>
        <a href={link}>More info</a>
        <h5>{label}</h5>
        <p>{description}</p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="product-info">
        <h4>ProductInfo</h4>
        {moreInfo}
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;

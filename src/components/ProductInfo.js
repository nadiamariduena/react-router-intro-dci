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
      <div key={id}>
        <h3>{productName}</h3>
        <img src={url} alt={tags} />
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

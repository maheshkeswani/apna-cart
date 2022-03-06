import React from "react";

export default function Product(props) {

 
  return (
    <div className="row">
      <div className="col-6">
        <h2> {props.product.name} </h2>
        <span className="badge bg-secondary">₹{props.product.price}</span>
      </div>
      <div className="col-4">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {props.incrementQuantity(props.index)}}
          >
            +
          </button>
          <button type="button" class="btn btn-primary">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-primary" onClick={() => {props.decrementQuantity(props.index)}}>
            -
          </button>
        </div>
      </div>
      <div className="col-4">
        { props.product.quantity * props.product.price }
      </div>
      <button className="col-2 btn btn-danger" onClick={() => { props.removeItem(props.index) } }>
        Remove
      </button>
    </div>
  );
}

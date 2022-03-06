import React from "react";

function Footer(props) {
return (
    <>
    <div className="row fixed-bottom">
        <button className="btn btn-danger col-2" onClick = { props.resetquantity}>Reset</button>
        <div className="row col-8 bg-dark text-center text-white">
        {props.totalamount}
        </div>
        <button className="btn btn-primary col-2">Pay Now</button>
    </div>
    </>
);
}

export default Footer;

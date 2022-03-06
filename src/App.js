import "./App.css";
import Navbar from "./components/navbar";
import Productlist from "./components/productlist.js";
import React, { useState } from "react";
import Footer from "./components/footer";
import AddItem from "./components/additem";

function App() {
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];
  let [productlist, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newproductlist = [...productlist];
    let newTotalAmount = totalAmount;
    newproductlist[index].quantity++;
    newTotalAmount += newproductlist[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newproductlist);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productlist];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };
  const resetquantity = () => {
    let newProductList = [...productlist];
    newProductList.map((products) => {
      return (products.quantity = 0);
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const removeitems = (index) => {
    let newProductList = [...productlist];
    let newtotalaamount = totalAmount;
    newtotalaamount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newtotalaamount);
  };
  const addItem = (name,price) => 
  {
       let newproductlist = [...productlist]
       newproductlist.push(
         {
           price : price,
           name:name,
           quantity:0
         }
       )
       setProductList(newproductlist)

  }
  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem addItem = {addItem} />
        <Productlist
          productList={productlist}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeitems={removeitems}
        />
      </main>
      <Footer totalamount={totalAmount} resetquantity={resetquantity} />
    </>
  );
}

export default App;

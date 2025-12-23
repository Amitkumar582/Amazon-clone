import {useContext} from "react";
import {StoreContext} from "../context/StoreContext.jsx";
export default function Cart(){
 const {state}=useContext(StoreContext);
 return <h2>Cart Items: {state.cart.length}</h2>;
}

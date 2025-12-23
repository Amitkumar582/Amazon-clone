import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";

export default function Navbar(){
 const {state}=useContext(StoreContext);
 return(
  <nav className="navbar">
    <Link className="logo" to="/">AmazonClone</Link>
    <input className="search" placeholder="Search products"/>
    <div>
      <Link to="/login">Login</Link>
      <Link to="/cart">Cart ({state.cart.length})</Link>
    </div>
  </nav>
 );
}

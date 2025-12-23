import {useParams} from "react-router-dom";
import products from "../assets/products.js";
import {useContext} from "react";
import {StoreContext} from "../context/StoreContext.jsx";
export default function ProductDetail(){
 const {id}=useParams();
 const {dispatch}=useContext(StoreContext);
 const product=products.find(p=>p.id==id);
 return(
  <div className="detail">
    <img src={product.image}/>
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>Add to Cart</button>
    </div>
  </div>
 );
}

import {useContext} from "react";
import {StoreContext} from "../context/StoreContext.jsx";
export default function Login(){
 const {dispatch}=useContext(StoreContext);
 return <button onClick={()=>dispatch({type:"LOGIN",payload:{name:"User"}})}>Login</button>;
}

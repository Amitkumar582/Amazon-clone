import products from "../assets/products.js";
import ProductCard from "../components/ProductCard.jsx";
export default function Home(){
 return <div className="grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>;
}

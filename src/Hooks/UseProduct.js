import { useState } from "react";
import { useEffect } from "react";

const UseProduct = (url) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => console.log('ok',data))
        
    },[])
    return [products, setProducts];
}

export default UseProduct;
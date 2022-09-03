import { useState } from "react";
import { useEffect } from "react";

const UseProduct = (url) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-everglades-78330.herokuapp.com/service')
            .then(res => res.json())
            .then(data => console.log('ok', data))

    }, [])
    return [products, setProducts];
}

export default UseProduct;
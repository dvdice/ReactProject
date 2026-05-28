import React, {useState} from 'react';
import './styles/App.css';
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";

function App() {
    const [products, setProducts] = useState([
        {
            id: 0,
            title: "Кроссовки Nike",
            price: 10000,
            description: "Кроссовки Nike коллаборация кто-то с кем-то, размер 42EU"
        },{
            id: 1,
            title: "Кроссовки Adidas",
            price: 10000,
            description: "Кроссовки Adidas коллаборация кто-то с кем-то, размер 42EU"
        },{
            id: 2,
            title: "Кроссовки Puma",
            price: 10000,
            description: "Кроссовки Puma коллаборация кто-то с кем-то, размер 42EU"
        },{
            id: 3,
            title: "Кроссовки Reebok",
            price: 10000,
            description: "Кроссовки Reebok коллаборация кто-то с кем-то, размер 42EU"
        },{
            id: 4,
            title: "Кроссовки Fila",
            price: 10000,
            description: "Кроссовки Fila коллаборация кто-то с кем-то, размер 42EU"
        },
    ]);

    return (
        <div className="App">
            <div className="Products">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id}></ProductCard>
                ))}
            </div>
        </div>
    );
}

export default App;
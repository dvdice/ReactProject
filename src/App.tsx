import React, {useState} from 'react';
import './styles/App.css';
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";

function App() {

    return (
        <div className="App">
            <ProductCard props={{title: 123, price: 123, description: 123}} />

            <Counter/>
        </div>
    );
}

export default App;

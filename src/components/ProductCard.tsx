import React from 'react';
import logo from '../logo.svg';
import '../styles/ProductCard.scss';

const ProductCard = ({product}: any) => {
    return (
        <div className="ProductCard">
            <div className="ProductCard__image-wrapper">
                <img className="ProductCard__image" src={logo} alt="Изображение товара"/>
            </div>

            <div className="ProductCard__info">
                <h2 className="ProductCard__info__title">{product.title}</h2>
                <div className="ProductCard__info__description">{product.description}</div>
                <div className="ProductCard__info__price">${product.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
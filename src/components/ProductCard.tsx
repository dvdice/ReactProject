import React from 'react';
import logo from '../logo.svg';
import '../styles/ProductCard.scss';

const ProductCard = (props: any) => {
    return (
        <div className="ProductCard">
            <div className="ProductCard__image-wrapper">
                <img className="ProductCard__image" src={logo} alt="Изображение товара"/>
            </div>

            <div className="ProductCard__info">
                <h2 className="ProductCard__info__title">{props.title}</h2>
                <div className="ProductCard__info__description">{props.description}</div>
                <div className="ProductCard__info__price">{props.price}</div>
            </div>
        </div>
    );
};

export default ProductCard;
import s from './Basket.module.css'
import React, { useEffect, useState } from 'react';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import { Link } from 'react-router-dom';

export default function Basket({basket, deleteBasketCard, incrementBasketCard, decrementBasketCard, sumPrice}) {

    if (!Object.values(basket).length) return (
        <div className={s.basket}>
            <EmptyBasket /> 
        </div>
    )

    return (
        <div className={s.basket}>
            <h2 className={s.title}>Корзина</h2>
            <div className={s.content}>
                <div className={s.cards}>
                    {basket && Object.values(basket).map((item) => {
                        return (
                            <div className={s.products}>
                                <div className={s.productsParameters}>
                                    <div className={s.productsImage}>
                                        <img src={item.card.image} alt={item.card.alt} />
                                    </div> 
            
                                    <div className={s.productsText}>
                                        <span className={s.productsName}>{item.card.cardTitle}<span className={s.productsPrice}>{item.card.price.toLocaleString('ru')} ₽</span></span>                       
                                    </div> 
            
                                    <button className={s.productsClose} onClick={() => deleteBasketCard(item.card.id)}>
                                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z" fill="#DF6464" />
                                        </svg>
                                    </button>
                                </div>
                                
                                <div className={s.productsTotal}>
                                    <div className={s.productsCalc}>
                                        <button className={s.productsDecr} onClick={() => decrementBasketCard(item.card.id)}>
                                            <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.788879 0H17.2V2H0.788879V0Z" fill="white" />
                                            </svg>
                                        </button>
                                        <span className={s.productsQuantity}>{item.count}</span>
                                        <button className={s.productsIncr} onClick={() => incrementBasketCard(item.card.id)}>
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.08375 6V0H9.42819V6H16.4615V8H9.42819V14H7.08375V8H0.050415V6H7.08375Z" fill="white" />
                                            </svg>
                                        </button>
                                    </div>
                                    <span>{(item.count * item.card.price).toLocaleString('ru')} ₽</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={s.order}>
                    <span className={s.orderTitle}>ИТОГО<span className={s.orderSum}>₽ {sumPrice.toLocaleString('ru')}</span></span>
                    <Link className={s.orderBtn} 
                          to={'/Pay'}>Перейти к оформлению
                    </Link>
                </div>
            </div>
        </div>
    )
}
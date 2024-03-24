import s from './Card.module.css'


export default function Card({card, addBasketCard}) {
    return (
        <div className={s.card}>
            <div className={s.cardImg}>
                <img src={card.image} alt={card.alt} />
            </div>
            <div className={s.desc}>
                <h3 className={s.cardTitle}>{card.cardTitle}</h3>
                <span className={s.price}>
                    {card.price.toLocaleString('ru')} ₽
                    <span className={s.fullPrice}>{card.fullPrice?card.fullPrice.toLocaleString('ru') + " ₽" : ""}</span>
                </span>
                <span className={s.rating}>{card.rating}</span>
                <button className={s.buy} onClick={()=> addBasketCard(card) }>Купить</button>
            </div>

        </div>
    )
}
import s from './Headphones.module.css'
import Card from './Card/Card'

export default function Headphones({title, cards, addBasketCard}) {

    return (
        <div>
            <h2 className={s.sectionTitle}>{title}</h2>
            <div className={s.cards}>
                {cards.map((card) => <Card card={card} addBasketCard={addBasketCard} key={card.id}/>)}
            </div>
        </div>
    )
}
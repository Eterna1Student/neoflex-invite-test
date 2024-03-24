
import s from './Products.module.css'
import Headphones from './Headphones/Headphones'

export default function Products({data, addBasketCard}) {

    return (
        <main className={s.main}>           
            <section className={s.headphones}>
                {data.map((section, index) => <Headphones title={section.title} cards={section.cards} key={index} addBasketCard={addBasketCard}/>)}
            </section>
        </main>
    )
}
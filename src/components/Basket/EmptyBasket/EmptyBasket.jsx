import { Link } from 'react-router-dom'
import basketPicture from './../../../basketPicture.svg'
import s from './EmptyBasket.module.css'

export default function EmptyBasket() {

    return (
        <div className={s.emptyBasket}>
            <img className={s.emptyBasket__picture} src={basketPicture} alt="Корзина" />
            <h2 className={s.emptyBasket__title}>Корзина пуста</h2>
            <p className={s.emptyBasket__subtitle}>Но это накогда не поздно исправить!</p>
            <Link className={s.emptyBasket__link} to={'/'} >В каталог товаров</Link>
        </div>
    )
}
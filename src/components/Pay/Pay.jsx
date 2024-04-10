import { useState } from 'react'
import s from './Pay.module.css'


export default function Pay({basket, sumPrice}) {

    const [checked, setChecked] = useState('Перевод')
    const methods = ['Перевод', 'Оплата при получении', 'Оплата картой']

    return (
        <div className={s.pay}>
            <h2 className={s.pay__title}>Оформление заказа</h2>
            <div className={s.pay__content}>
                <div className={s.form}>
                    <span className={s.form__city}>Курьер по г. Саратов</span>
                    <span className={s.form__price}>350 ₽</span>
                    <span className={s.form__address}>Адрес доставки</span>
                    <input className={s.form__street} type="text" placeholder='Улица / Район' />
                    <input className={s.form__home} type="text" placeholder='Дом' />
                    <input className={s.form__entrance} type="text" placeholder='Подъезд' />
                    <input className={s.form__floor} type="text" placeholder='Этаж' />
                    <input className={s.form__apartment} type="text" placeholder='Квартира' />
                    <input className={s.form__tel} type="tel" placeholder='Номер телефона' />
                    <input className={s.form__email} type="email" placeholder='E-mail (Не обязательно)' />
                    <textarea className={s.form__comment} placeholder='Комментарий'></textarea>
                </div>
                <div className={s.pay__order}>
                    <h3>
                        Ваш заказ
                    </h3>
                    <div className={s.order__content}>
                        {basket && Object.values(basket).map((item, index) => {
                            return (
                                <div className={s.order__content_name} key={index}>
                                    {item.card.cardTitle} ({item.card.price.toLocaleString('ru')} ₽)
                                    <span className={s.name__quantity}>{item.count} x</span>
                                    <span className={s.order__content_price}>{(item.card.price*item.count).toLocaleString('ru')} ₽</span>
                                </div>
                            )
                        })}
                        <div className={s.order__content_product}>
                            <span>Доставка</span>
                            <span className={s.order__content_price}>700 ₽</span>
                        </div>
                        <div className={s.order__content_product}>
                            <span>К оплате</span>
                            <span className={s.order__content_price}>{(sumPrice + 700).toLocaleString('ru')} ₽</span>
                        </div>                       
                    </div>
                </div>
                <div className={s.pay__method}>
                    <h3>
                        Способ оплаты
                    </h3>
                    <form>
                        {methods.map((item, index) => (
                            <label key={index}>
                                <input className={s.pay__method_item} type="radio" checked={checked === item} onChange={() => setChecked(item)} />
                                <span>{item}</span>
                            </label>
                        ))}          
                    </form>
                </div>
                <button className={s.pay__btn}>Завершить заказ</button>
            </div>
        </div>
    )
}
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Basket from './components/Basket/Basket'
import { useState } from 'react'

export default function App() {

  const data = [
    {
        title: 'Наушники',
        cards: [
            {
                image: './images/Image.png',
                alt: 'Наушники',
                cardTitle: 'Apple BYZ S852I',
                price: 2927,
                fullPrice: 3527,
                rating: '4.7',
                id: 1
            },
            {
                image: './../../images/Image1.png',
                alt: 'Наушники',
                cardTitle: 'Apple EarPods',
                price: 2327,
                fullPrice: null,
                rating: '4.5',
                id: 2
            },
            {
                image: './../../images/Image2.png',
                alt: 'Наушники',
                cardTitle: 'Apple EarPods',
                price: 2327,
                fullPrice: null,
                rating: '4.5',
                id: 3
            },
            {
                image: './../../images/Image.png',
                alt: 'Наушники',
                cardTitle: 'Apple BYZ S852I',
                price: 2927,
                fullPrice: null,
                rating: '4.7',
                id: 4
            },
            {
                image: './../../images/Image1.png',
                alt: 'Наушники',
                cardTitle: 'Apple EarPods',
                price: 2327,
                fullPrice: null,
                rating: '4.5',
                id: 5
            },
            {
                image: './../../images/Image2.png',
                alt: 'Наушники',
                cardTitle: 'Apple EarPods',
                price: 2327,
                fullPrice: null,
                rating: '4.5',
                id: 6
            },
        ]
    },
    {
        title: 'Беспроводные наушники',
        cards: [
            {
                image: './../../images/Image3.png',
                alt: 'Беспроводные наушники',
                cardTitle: 'Apple AirPods',
                price: 9527,
                fullPrice: null,
                rating: '4.7',
                id: 7
            },
            {
                image: './../../images/Image4.png',
                alt: 'Беспроводные наушники',
                cardTitle: 'GERLAX GH-04',
                price: 6527,
                fullPrice: null,
                rating: '4.7',
                id: 8
            },
            {
                image: './../../images/Image5.png',
                alt: 'Беспроводные наушники',
                cardTitle: 'BOROFONE BO4',
                price: 7527,
                fullPrice: null,
                rating: '4.7',
                id: 9
            },
        ]
    }
  ]

  const [basket, setBasket] = useState({})

  const addBasketCard = (card) => {
    
    const cardId = card.id
    
    if(basket[cardId]) {
        setBasket({
            ...basket,
            [cardId]: {
                        count: basket[cardId].count + 1,
                        card: card
                      }
        }) 
    }else{
        setBasket({
            ...basket,
            [cardId]: {
                        count: 1,
                        card: card
                      }
        }) 
    }
  }

  const deleteBasketCard = (id) => {
    const newBasket = {
        ...basket
    }

    delete newBasket[id]
    setBasket(newBasket)
  }

  const incrementBasketCard = (id) => {
    const newBasket = {
        ...basket
    }

    newBasket[id].count += 1
    setBasket(newBasket) 
  }

  const decrementBasketCard = (id) => {
    const newBasket = {
        ...basket
    }

    if(newBasket[id].count > 1) newBasket[id].count -= 1
    setBasket(newBasket)
  }
    


  return (
    <BrowserRouter>
        <div className="container">
            <Header quantityProducts={Object.values(basket).length}/>
            <Routes>
                <Route path="/" element={<Products data={data} addBasketCard={addBasketCard}/>}/>
                <Route  path="/basket"
                        element={<Basket 
                        basket={basket}
                        deleteBasketCard={deleteBasketCard}
                        incrementBasketCard={incrementBasketCard}
                        decrementBasketCard={decrementBasketCard}/>}/>
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
  );
}


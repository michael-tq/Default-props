import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    let cards = [];
    for (let i = 0; i < props.cards.length; i++) {
        let currentCard = props.cards[i];
        let card = <Card title={currentCard.title} content={currentCard.content} key={currentCard.id}/>
        cards.push(card);
    }
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">               
                {cards} 
            </div>
        </section>
    )
}

export default List
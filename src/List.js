import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    let cards = [];
    for (let i = 0; i < props.cards.length; i++) {
        let currentCard = props.cards[i];
        let card = <Card title={currentCard.title} content={currentCard.content} />
        cards.push(card);
    }
    return (
        <section class="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">               
                {cards} 
            </div>
        </section>
    )
}

export default List
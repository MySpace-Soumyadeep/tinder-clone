import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import database from './firebase';


function TinderCards() {

    const [people, setPeople] = useState([
        // {
        //     name: 'Messi',
        //     url: 'https://icdn.football-espana.net/wp-content/uploads/2020/11/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg'
        // },
        // {
        //     name: 'Ronaldo',
        //     url: 'https://i.pinimg.com/originals/21/c3/7f/21c37f5445a5296530e3ca91cdd5f42c.jpg'
        // }
    ]);

    useEffect(() => {

        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data()))
        );

        return () => {
            //this is the cleanup
            unsubscribe();
        };
    },[])

    return (
        <div>
            
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                >
                    <div 
                    style = {{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}

            </div>
            
        </div>
    )
}

export default TinderCards

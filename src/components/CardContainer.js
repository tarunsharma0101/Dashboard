import React, { useContext, useEffect, useState } from 'react'
import AddWidget from './AddWidget';
import { SearchContext } from '../utils/SerachContext';

const CardContainer = ({name}) => {

    const [cards , setCards] = useState([]);
    const [cardName , setCardName] = useState('');
    const [cardData , setCardData] = useState('');
    const [addCards , setAddCards] = useState(false);

    const { searchQuery } = useContext(SearchContext);

    const filterCards = cards.filter((card) =>  card.name.toLowerCase().includes(searchQuery.toLowerCase()));

    console.log(filterCards);
    


    useEffect(() => {
        const storedWidgets = localStorage.getItem("cards");
        if (storedWidgets) {
            setCards(JSON.parse(storedWidgets));
        }
    }, [])


    const saveCardsToLocalStorage = (cards) => {
        localStorage.setItem("cards" , JSON.stringify(cards));
    };



    const addCard = () => {
    
        if(addCards && cardData.trim() && cardName.trim()) {
            const newCard = {id: Date.now() , name: cardName , content: cardData};
            const updatesCards = [...cards , newCard]
            setCards(updatesCards);
            saveCardsToLocalStorage(updatesCards)
            setCardData('');
            setCardName('');
            setAddCards(false)
        }
    }

    const showInput = () => {
        setAddCards(true);
    }

    const deleteCard = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
        saveCardsToLocalStorage(updatedCards);

    }

  return (
    <div>
        <div className='m-4 text-xl font-bold'><h1>{name}</h1></div>
            <div className='flex overflow-x-scroll no-scrollbar '>
                <div>
                {!addCards && <button  onClick={showInput}><AddWidget/></button> }

                {addCards && (
                    <div className='rounded-md bg-base-100 w-96 h-56 shadow-xl m-2 flex flex-col items-center'>
                        <input 
                            className='m-2 p-2 border-2 w-9/12'
                            type='text'
                            placeholder='Widget Name'
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value.toUpperCase())}
                            />
                        <input 
                            className='m-2 p-2 border-2 w-9/12'
                            type='text'
                            placeholder='Widget Text'
                            value={cardData}
                            onChange={(e) => setCardData(e.target.value)}
                            />
                        <button className='border-2 m-3 w-6/12  py-2 rounded' onClick={addCard}>Submit</button>
                    </div>
                )}
                </div>

            {searchQuery ? 
                <div className='flex'>
                {filterCards?.map((card) => (
                <div key={card.id} className='rounded-md bg-base-100 w-96 h-56 shadow-xl m-2 flex flex-col justify-evenly items-center border-2 border-black'>
                    <h1 className='text-center font-bold text-3xl m-3 p-2'>{card.name}</h1>
                    <p className='text-xl font-thin mt-5 text-center '>{card.content}</p>
                    <button className='border-2 m-3 w-6/12  py-2 rounded border-black' onClick={() => deleteCard(card.id)}>Delete</button>
                </div>
                ))}
            </div> : <div className='flex'>
                {cards.map((card) => (
                <div key={card.id} className='rounded-md bg-base-100 w-96 h-56 shadow-xl m-2 flex flex-col justify-evenly items-center border-2 border-black'>
                    <h1 className='text-center font-bold text-3xl m-3 p-2'>{card.name}</h1>
                    <p className='text-xl font-thin mt-5 text-center '>{card.content}</p>
                    <button className='border-2 m-3 w-6/12  py-2 rounded border-black' onClick={() => deleteCard(card.id)}>Delete</button>
                </div>
                ))}
            </div>}

            
            </div>
    </div>
  )
}

export default CardContainer
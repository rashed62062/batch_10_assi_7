


import {  toast } from 'react-toastify';


import { useState, useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner/Banners';
import CartCounter from './Components/CartCountainer/CartCounter';
import Navars from './Components/Component/Navar/Navars';
import NewsletterFooter from './Components/Footer/NewsletterFooter';

function App() {
  const [addMoney, setMoney] = useState(0);
  const fixedAmount = 10000; // Amount to add when the user chooses to add balance

  // State for active component and cart
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'cart',
  });

  // State for selected players and feedback messages
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // const [feedbackMessage, setFeedbackMessage] = useState('');

  // Function to add a fixed amount
  const AddBalance = () => {
    setMoney((prevMoney) => {
      const newBalance = prevMoney + fixedAmount;
      toast.success('Credit Added to your Account');
      return newBalance;
    });
  };

  // Function to handle player deletion from selected list and refund balance
  const handleDelete = (playerId) => {
    const updatedPlayers = selectedPlayers.filter((p) => p.playerId !== playerId);
    
    // Find the deleted player to refund balance
    const deletedPlayer = selectedPlayers.find((p) => p.playerId === playerId);
    
    if (deletedPlayer) {
      // Refund the correct bidding price
      setMoney((prevMoney) => prevMoney + deletedPlayer.biddingPrice); 
      toast.warning('Player removed')
     
    }
    
    setSelectedPlayers(updatedPlayers);
  };

  // Function to handle player selection with a limit and balance check
  const handleSelectPlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);

    if (isExist) {
      toast.warning('This player is already selected!');
    } else if (selectedPlayers.length >= 6) {
      toast('You cannot select more than 6 players!');
    } else if (addMoney < player.biddingPrice) { // Use dynamic biddingPrice

      toast.error('Not enough money to buy this player.Claim Some Credit');
    } else {
      const newPlayerList = [...selectedPlayers, player];
      setSelectedPlayers(newPlayerList);
      setMoney((prevMoney) => prevMoney - player.biddingPrice); // Decrement balance using dynamic price
      toast.success(`Congrates !! ${player.name} is now in your squad`);
    }
  };

  const handleIsActiveState = (status) => {
    setIsActive({
      cart: status === 'cart',
      status: status,
    });
  };

  

  return (
    <>
      <div className='px-9'>
        <Navars balance={addMoney} />
        <Banner onAddBalance={AddBalance} />
      </div>
      <div>
        <CartCounter className="px-9"
          handleDelete={handleDelete}
          handleSelectPlayer={handleSelectPlayer}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
          selectedPlayers={selectedPlayers}
        />
      </div>

     <NewsletterFooter></NewsletterFooter>
    </>
  );
}

export default App;

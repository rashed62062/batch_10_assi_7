import About from '../About/About';
import Cart from '../Cart/Cart';
import './Cartcounter.css';

export default function CartCounter({ handleIsActiveState, isActive, selectedPlayers, handleSelectPlayer, handleDelete }) {
  console.log(isActive);

  return (
    <div> 
      <div className="flex justify-end gap-3 mt-6 mx-6">
        
      <button 
  onClick={() => handleIsActiveState('cart')} 
  className={`${
    isActive.cart ? "bg-[#E7FE29] text-black" : "bg-gray-200 text-gray-700"
  } btn p-2 rounded-md shadow-md `}
>
  Available
</button>

<button 
  onClick={() => handleIsActiveState('about')} 
  className={`${
    isActive.cart ? "bg-gray-200 text-gray-700" : "bg-[#E7FE29] text-black"
  } btn p-2 rounded-md shadow-md`}
>
  Selects <span className='text-stone-600'> ({selectedPlayers.length})</span>
</button>

      
      </div>

      <div>
        {isActive.cart ? (
          <Cart handleSelectPlayer={handleSelectPlayer} />
        ) : (
          <About
            handleDelete={handleDelete}
            selectedPlayers={selectedPlayers}
            handleIsActiveState={handleIsActiveState}
            isActive={isActive}
          />
        )}
      </div>
    </div>
  );
}

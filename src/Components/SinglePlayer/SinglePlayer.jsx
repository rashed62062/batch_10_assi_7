import { IoIosContact } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
export default function SinglePlayer({ player, handleSelectPlayer }) {
  const { name, country, battingType, bowlingType, biddingPrice, role, image } = player;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col items-center">
        <img 
          src={image} 
          alt={`${name}'s image`} 
          className="w-30 h-40 object-cover rounded-md mb-2" 
          onError={(e) => { e.target.onerror = null; e.target.src = 'placeholder.jpg'; }} // Placeholder on error
        />
      </div>
      <div>
        <h1 className="flex items-center  gap-2"> <IoIosContact  className="ml-1 text-3xl"/>{name}</h1>
      </div>
      <div className="flex justify-between">
        <span className="flex items-center gap-2"> <CiFlag1 className="ml-1 text-3xl" />{country}</span>
        <span>
          <button className="bg-slate-100 py-2 px-5  rounded-md mb-5">{role || 'All-rounder'}</button>
        </span>
      </div>
      
    <div>
    <hr />
    </div>
      
    
    <div className="text-3xl font-bold"><h4>Rating</h4></div>
      
      <div className="flex justify-between text-xl">
        <div>{battingType}</div>
        <div className="text-gray-200 font-bold">{bowlingType}</div>
      </div>
      
      <div className="flex justify-between text-1xl">
        <div className="font-light"> Price: ${biddingPrice}</div>
        <div>
          <button 
            onClick={() => handleSelectPlayer(player)} 
            className="bg-slate-100 py-2 px-5  rounded-md mb-5 hover:bg-[#E7FE29]"
          >
            Choose player
          </button>
        </div>
      </div>
      
    </div>
  );
}

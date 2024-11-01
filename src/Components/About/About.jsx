import { MdDeleteOutline } from "react-icons/md";
export default function About({ selectedPlayers, isActive, handleIsActiveState, handleDelete }) {
  return (
    <div className="px-20 sm:px-8 py-5">
      <div className="text-start mb-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Selected player <span className="text-stone-600 text-lg sm:text-xl md:text-2xl"> ({selectedPlayers.length}/6)</span>
        </h1>
      </div>
      <div className="space-y-4">
        {selectedPlayers.map((player) => (
          <div 
            key={player.playerId} 
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 p-4 rounded-md bg-white shadow-md border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img src={player.image} alt={`${player.name}'s image`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-md object-cover" />
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-semibold">{player.name}</h1>
                <h4 className="text-gray-500 text-sm sm:text-base">{player.role}</h4>
                <h4 className="text-gray-500 text-sm sm:text-base">{player.biddingPrice}</h4>
              </div>
            </div>
            <button
              onClick={() => handleDelete(player.playerId)}
              className=" text-3xl  text-red-500 px-4 py-2 rounded-sm  mt-2 sm:mt-0"
            >
              <MdDeleteOutline />

            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => handleIsActiveState('cart')}
          className="text-lg sm:text-xl md:text-2xl bg-[#E7FE29] rounded-md shadow-md px-4 sm:px-6 py-2"
        >
          Add more players
        </button>
      </div>
    </div>
  );
}

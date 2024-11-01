import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

export default function AllPlayers({handleSelectPlayer}) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('./FakeData.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.error("Error fetching players:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-8 p-4">
      {players.map((player) => (
        <SinglePlaye 
        handleSelectPlayer={handleSelectPlayer}
          key={player.name} 
          player={player} 
        />
      ))}
    </div>
  );
}

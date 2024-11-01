import { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

export default function Cart({ handleSelectPlayer }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('./FakeData.json')
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching players:", error);
        setError("Failed to load players.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading players...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="px-20">
      <div className="text-2xl sm:text-3xl lg:text-4xl mb-5">
        <h1>Available Players</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3 p-4">
        {players.map((player) => (
          <SinglePlayer
            handleSelectPlayer={handleSelectPlayer}
            key={player.name}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

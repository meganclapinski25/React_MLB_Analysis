export default function PlayerCard({player, isSelected, onClick}){
    return (
        <li
          onClick={onClick}
          className={`px-4 py-3 border-b border-gray-700 text-white cursor-pointer hover:bg-gray-700 ${isSelected ? 'bg-gray-700' : ''}`}
        >
          {player.fullName} — {player.primaryPosition?.abbreviation}
        </li>
      );
}
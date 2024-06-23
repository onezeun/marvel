import PropTypes from 'prop-types';

const CharacterCard = ({ id, thumbnail, name, handleItemClick }) => {
  return (
    <div
      key={id}
      className="relative w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white bg-opacity-20 transition-all duration-300 ease-in-out hover:scale-105 md:w-1/3 lg:w-1/4"
      onClick={() => handleItemClick(id)}
    >
      <div className="relative">
        <img
          className="h-80 w-full rounded-t-lg object-cover"
          src={thumbnail}
          alt={name}
        />
        <p className="mb-2 p-4 text-center text-xl font-bold">{name}</p>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired
};

export default CharacterCard;

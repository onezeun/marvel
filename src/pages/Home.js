import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters } from 'api/index';
import CharacterCard from 'components/CharacterCard';
import Loading from 'components/Loading';

const Home = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await getCharacters();
    const filteredCharacters = data.data.results.filter(
      (character) => !character.thumbnail.path.includes('image_not_available')
    );
    setCharacters(filteredCharacters);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/character/${id}`);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap justify-center gap-10 p-8">
          {characters.map((character) => {
            const thumbnail =
              character.thumbnail.path + '.' + character.thumbnail.extension;
            const name = character.name;
            return (
              <CharacterCard
                id={character.id}
                thumbnail={thumbnail}
                name={name}
                handleItemClick={handleItemClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;

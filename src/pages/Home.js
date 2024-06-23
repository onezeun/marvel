import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters } from 'api/index';

const Home = () => {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await getCharacters();
    console.log(data.data.results);
    setCharacters(data.data.results);
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
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {characters.map((character, index) => {
              return (
                <li key={index} onClick={() => handleItemClick(character.id)}>
                  {character.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;

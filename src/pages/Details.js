import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "api/index";

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async (id) => {
    const data = await getCharacterById(id);
    setCharacter(data.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p>Details</p>
          {character.name}
        </div>
      )}
    </div>
  );
};

export default Details;

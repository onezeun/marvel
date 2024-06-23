import { useEffect, useState } from 'react';
import { getCharacters } from 'api/index';
import CharacterCard from 'components/CharacterCard';
import Loading from 'components/Loading';

const Home = () => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        // 이미지 없는 아이템 제거
        const filteredCharacters = data.data.results.filter(
          (character) =>
            !character.thumbnail.path.includes('image_not_available')
        );
        setCharacters(filteredCharacters);
        setLoading(false);
      } catch (error) {
        console.error('캐릭터 리스트 데이터 호출 에러', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!characters) {
    return (
      <p className="mt-[20%] w-full text-center">
        데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-10 p-8">
        {characters.map((character) => {
          const thumbnail =
            character.thumbnail.path + '.' + character.thumbnail.extension;
          return (
            <CharacterCard
              key={character.id}
              id={character.id}
              thumbnail={thumbnail}
              name={character.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from 'api/index';
import Loading from 'components/Loading';
import DetailsInfoCard from 'components/DetailsInfoCard';

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacterById(id);
        setCharacter(data.data.results[0]);
        // setLoading(false);
      } catch (error) {
        console.error('캐릭터 상세 정보 데이터 호출 에러', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!character) {
    return (
      <p className="mt-[20%] w-full text-center">
        데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
      </p>
    );
  }

  return (
    <div className="mt-5 p-5">
      <div className="flex items-center justify-between">
        <h2 className="cursor-default text-3xl font-bold shadow-main_purple text-shadow">
          {character.name}
        </h2>
        <div className="flex gap-4">
          {character.urls.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="rounded-lg text-white transition-all duration-300 hover:shadow-white hover:text-shadow-lg"
            >
              {/* 첫번째 글자만 대문자로 변경*/}
              {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-3 flex w-full flex-col items-center md:flex-row md:items-start">
        <img
          className="w-full max-w-[500px] rounded-lg object-cover transition-all duration-300 md:h-[70vh] md:w-1/2"
          src={character.thumbnail.path + '.' + character.thumbnail.extension}
          alt={character.name}
        />
        <div className="mt-5 flex w-full flex-col gap-5 md:ml-8 md:mt-0 md:h-[70vh]">
          <DetailsInfoCard title="Comics" items={character.comics.items} />
          <DetailsInfoCard title="Series" items={character.series.items} />
          <DetailsInfoCard title="Stories" items={character.stories.items} />
        </div>
      </div>
    </div>
  );
};

export default Details;

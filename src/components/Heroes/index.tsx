import { useEffect, useState } from 'react';
import { deleteHero, getAllHeroes } from '../../Api';
import { hero } from '../../Model/Heroes';
import * as Style from "./styles"

interface Heroes {
  data: hero[];
}

// async function deleteHeroes(id:number){
//     try{
//         await deleteHero(id);
//     }
//     catch (error) {
//         console.error('Error fetching hero info:', error);
//     }

//     const response = Heroes();

//     return (response);
// }


function Heroes() {
  const [heroes, setHeroes] = useState<Heroes[]>([]);

  useEffect(() => {
    const fetchHeroInfo = async () => {
      try {
        const response = await getAllHeroes();
        if (isHeroesResponse(response)) {
          setHeroes([response]); // Note que estamos colocando a resposta em um array
        } else {
          console.error('Invalid response format:', response);
        }
      } catch (error) {
        console.error('Error fetching hero info:', error);
      }
    };

    fetchHeroInfo();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isHeroesResponse = (obj: any): obj is Heroes => {
    return 'data' in obj && Array.isArray(obj.data);
  };

  const deleteSingleHero = async (id: number) => {
    try {
      await deleteHero(id);
      fetchHeroInfo(); // Atualiza a lista após a exclusão
    } catch (error) {
      console.error('Error deleting hero:', error);
    }
  };

  return (
    <>
      <Style.SuperHeroContainer>
        {/* Renderizar a lista de usuários ou fazer algo com os dados */}
        {heroes.map((response) =>
          response.data.map((hero) => (
            <>
            <Style.CardHero style={{ backgroundImage: `url(${hero.photo})` }}>
                <Style.DivName key={hero.id}>{hero.name}</Style.DivName>
                <Style.HeroInfo>{hero.place}</Style.HeroInfo>
                <button onClick={() => deleteSingleHero(hero.id)}>Delete Hero</button>
            </Style.CardHero>
            </>
          ))
        )}
      </Style.SuperHeroContainer>
      {/* <Input/>
      <AnimeList />
      <AddAnime />
      <ProgressTracker /> */}
    </>
  );
}

export default Heroes;

function fetchHeroInfo() {
    throw new Error('Function not implemented.');
}

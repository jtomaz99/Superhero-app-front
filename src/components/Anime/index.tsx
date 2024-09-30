/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom, useAtomValue, useSetAtom } from "jotai";
import { useAtom } from 'jotai'

export const progressAtom = atom((get) => {
    const anime = get(animeAtom)
    return anime.filter((item) => item.watched).length / anime.length
  })


export const animeAtom = atom([
    {
      title: 'Ghost in the Shell',
      year: 1995,
      watched: true
    },
    {
      title: 'Serial Experiments Lain',
      year: 1998,
      watched: false
    }
  ])

  const AddAnime = () => {
    const setAnime = useSetAtom(animeAtom)
  
    return (
      <button onClick={() => {
        setAnime((anime) => [
          ...anime,
          {
            title: 'Cowboy Bebop',
            year: 1998,
            watched: false
          }
        ])
      }}>
        Add Cowboy Bebop
      </button>
    )
  }

  const AnimeList = () => {
    const anime = useAtomValue(animeAtom)
  
    return (
      <ul>
        {anime.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    )
  }

  const ProgressTracker = () => {
    const progress = useAtomValue(progressAtom)
  
    return (
      <div>{Math.trunc(progress * 100)}% watched</div>
    )
  }
  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const AnimeApp = () => {
    const [anime, setAnime] = useAtom(animeAtom);
  
    return (
        <>
            <div>
                <ul>
                {anime.map((item) => (
                    <li key={item.title}>{item.title}</li>
                ))}
                </ul>

                <button onClick={() => {
                setAnime((anime) => [
                    ...anime,
                    {
                    title: 'Cowboy Bebop',
                    year: 1998,
                    watched: false
                    }
                ])
                }}>
                Add Cowboy Bebop
                </button>
            </div>
        </>
    )
  }
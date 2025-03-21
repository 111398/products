import { useEffect, useMemo, useState } from 'react';
import { IRickAndMortyApiData } from '../types';

const useGetData = (page: number): [IRickAndMortyApiData | null, number[]] => {
  const [data, setData] = useState<IRickAndMortyApiData | null>(null);

  const pages = useMemo(() => {
    const pagesArr = [];
    if (data?.info.pages) {
      for (let i = 0; i < data.info.pages; i++) {
        pagesArr.push(i + 1);
      }
    }
    return pagesArr;
  }, [data?.info.pages]);

  useEffect(() => {
    const fetchRickAndMortyData = async (page: number) => {
      const request = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const response = await request.json();
      setData(response);
    };
    fetchRickAndMortyData(page);
  }, [page]);

  return [data, pages];
};
export default useGetData;

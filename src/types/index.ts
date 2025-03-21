export interface IRickAndMortyApiData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
  results: ICharacter[];
}

export interface ICharacter {
  created: string;
  id: number;
  episode: Array<string>;
  gender: string;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface IGalleryItemProps {
  item: ICharacter;
}

export type RickAndMorty = [
  {
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
];
export interface IRickAndMortyApiData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
  results: RickAndMorty;
}

export interface IGalleryItemProps {
  item: {
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
  };
}

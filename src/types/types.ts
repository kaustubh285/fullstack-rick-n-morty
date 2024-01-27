export interface ICharacterCore {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  avatar: string;
}

export interface ICharacter extends ICharacterCore {
  origin: ILocation;
  location: ILocation;
  episodes: IEpisode[];
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  noOfResidents: number;
  dimension: string;
}

export interface IEpisode {
  id: number;
  name: string;
  airDate: string;
  noOfCharacters: number;
  episode: string;
}

// *** EXTRAS ***
export interface Place {
  name: string;
  url: string;
}

export interface ICharacterComplete extends ICharacterCore {
  location: Place;
  origin: Place;
  episode: string[];
  image?: string;
}

export interface ILocationApiData {
  id: number;
  name: string;
  type: string;
  residents: [];
  dimension: string;
}

export interface PageData {
  data?: {
    characters: ICharacterCore[];
    info: {
      pages: number;
      next: string;
      prev: string;
    };
  };
  error?: {
    status: string;
    statusCode: number;
    message: string;
  };
}

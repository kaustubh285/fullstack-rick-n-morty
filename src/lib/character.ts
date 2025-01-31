import {
  ICharacter,
  ICharacterCore,
  ICharacterPageData,
  IPageData,
} from "@/types/types";

export const getPageData = async (
  page: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setPageData: React.Dispatch<
    React.SetStateAction<IPageData | { data: undefined; error: undefined }>
  >,
) => {
  // Initializing loading as true on function call so user can see the loading screen
  setLoading(true);
  const data = await fetch(`/api/characters/page/${page}`).then((res) =>
    res.json(),
  );

  // set data / error and end loading
  if (data.error) {
    setError(data.error.message);
  } else {
    setPageData(data);
    setLoading(false);
  }
};

export const getCharacterData = async (
  id: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setICharacterPageData: React.Dispatch<
    React.SetStateAction<
      ICharacterPageData | { data: undefined; error: undefined }
    >
  >,
) => {
  // Initializing loading as true on function call so user can see the loading screen
  setLoading(true);
  const characterApiRes = await fetch(`/api/characters/${id}`).then((res) =>
    res.json(),
  );

  // set data / error and end loading
  if (characterApiRes.error) {
    setLoading(false);
    setError(characterApiRes.error.message);
  } else {
    setError("");
    setICharacterPageData(characterApiRes);
    setLoading(false);
  }
};

export const filterNonMortys = (
  characters: ICharacterCore[],
): ICharacterCore[] => {
  return characters.filter((character) => {
    const nameLowerCase = character.name.toLowerCase();
    return (
      nameLowerCase.includes("morty") &&
      !nameLowerCase.includes("interviewer") &&
      !nameLowerCase.includes("father-in-law") &&
      !nameLowerCase.includes("mother-in-law") &&
      !nameLowerCase.includes("girlfriend") &&
      !nameLowerCase.includes("lawyer")
      // Add more conditions as needed for other Morty variants to exclude
    );
  });
};

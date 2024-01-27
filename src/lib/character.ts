export const getCharacterData = async (id: number) => {
  const characterApiRes = await fetch(`${process.env.URL}api/characters/${id}`);

  const characterPageData = await characterApiRes.json();

  return characterPageData;
};

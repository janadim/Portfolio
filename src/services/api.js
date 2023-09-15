const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character/?status=alive")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          image: character.image,
          species: character.species,
          status: character.status,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
      return cleanData;
    });
};

export default getApiData;

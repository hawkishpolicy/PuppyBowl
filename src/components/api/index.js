const BASE =
  "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-ft/players";

const callDatabase = async () => {
  const response = await fetch(BASE);
  const result = await response.json();

  return result.data.players;
};

export default callDatabase;

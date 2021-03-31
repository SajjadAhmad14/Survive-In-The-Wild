const createGame = async () =>  {
  const game = {
    name: 'Mock this Game',
  };
  const post = JSON.stringify(game);
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  const response = await fetch(url, settings);
  const data = await response.json();

  return data;
}

export { createGame };
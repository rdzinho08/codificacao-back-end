 // src/service/userService.js
const games = [
    { id: 1, title: "League of Legends", genre: "MOBA" },
    { id: 2, title: "Valorant", genre: "FPS" }
];

const getUsers = () => {
    return games;
};

const createUser = (gameData) => {
    const newGame = { id: games.length + 1, ...gameData };
    games.push(newGame);
    return newGame;
};

module.exports = { getUsers, createUser };
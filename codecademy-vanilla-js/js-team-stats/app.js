const team = {

  _players: [
    { firstName: 'Mary-Anne',
      lastName: 'Triggs',
      age: 32 },
    { firstName: 'Mark',
      lastName: 'Hollands',
      age: 32 },
    { firstName: 'JackAlex',
      lastName: 'Hollands',
      age: 8 }
  ],

  _games: [
    { opponent: 'West Meon',
      teamPoints: 32,
      opponentPoints: 28
    },
    { opponent: 'Langrish',
      teamPoints: 26,
      opponentPoints: 47
    },
    { opponent: 'Buriton',
      teamPoints: 19,
      opponentPoints: 28
    }
  ],

  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player)
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this.games.push(game)
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)

team.addGame('East Meon', 37, 28)
team.addGame('Swammore', 10, 24)
team.addGame('Corhampton', 32, 32)

console.log(team._players)
console.log(team._games)

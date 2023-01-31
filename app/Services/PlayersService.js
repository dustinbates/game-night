import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"

class PlayersService {
    addPlayer(playerData){
        let newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
    }

    increaseScore(name){
        let player = appState.players.find(player => player.name == name)
        player.scoreUp()
    }

    decreaseScore(name){
        let player = appState.players.find(player => player.name == name)
        player.scoreDown()
    }
}

export const playersService = new PlayersService()
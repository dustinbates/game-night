import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class PlayersController {
    drawPlayers() {
        let players = appState.players
        // console.log(players);
        let names = ''
        players.forEach(player => names += player.PlayerTemplateCard)
        document.getElementById('players').innerHTML = names
    }

    addPlayer(){
            window.event.preventDefault()
            const form = window.event.target
            // console.log('Adding player', form)
            let playerData = getFormData(form)
            playersService.addPlayer(playerData)
            console.log(playerData)
            form.reset()
            this.drawPlayers()
    }

    increaseScore(name){
        playersService.increaseScore(name)
        this.drawPlayers()
    }

    decreaseScore(name){
        playersService.decreaseScore(name)
        this.drawPlayers()
    }

    constructor(){
        console.log('constructor ran')
        // this.drawPlayers()
    }
}



export class Player{
    constructor(name){
        this.name = name
        this.score = 0
    }

    get PlayerTemplateCard(){
        return `
        <div class="col-3">
            <div class="card text-center">
                <h3 class="m-0">${this.name}</h3>
                <p class="m-0"> 
                <i class="mdi mdi-minus-circle-outline fs-3" style="color: red" onclick="app.playersController.decreaseScore('${this.name}')"></i>
                <h class="fs-1"> ${this.score}</h>
                <i class="mdi mdi-plus-circle-outline fs-3" style="color: green" onclick="app.playersController.increaseScore('${this.name}')"></i>
                </p>
            </div>
        </div>`
    }

    scoreUp(){
        this.score++
    }

    scoreDown(){
        this.score--
    }
}
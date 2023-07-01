
class Summary {
    constructor (){
        this.result = []
    }


    addGameToStats(win,bid){
        let result = {
            win,
            bid
        }
     this.result.push(result) 
    }

    showResult(){
        let games = this.result.length;
        let wins = this.result.filter(result => result.win).length
        let loses = this.result.filter(result => !result.win).length

        return `So far you played ${games} games. Currently you have ${wins} wins and ${loses} loses.`;
    }   
}



const stats = new Summary();

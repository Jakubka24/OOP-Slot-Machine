// link do gry: https://websamuraj.pl/examples/js/gra/ 


class Game {

    constructor(start) {
        
        this.stats = new Summary();
        this.wallet = new Wallet(start);
        this.randomColors = new Colors();



        document.getElementById('start').addEventListener('click',this.start.bind(this))

        this.dashboards = [...document.querySelectorAll('.game div.color')]
        this.bid = document.getElementById('bid')
        this.walletBalance = document.querySelector('span.wallet')
        this.result = document.querySelector('span.result')
    
        this.array = []
        this.render()
    }


    render(stats = [0,0,0], balance = this.wallet.checkBalance(),wonMoney = 0,bid = 0, result = '') {
    this.walletBalance.textContent = balance
    if (result){
        result = `wygrałeś ${wonMoney}`
    }

    else if (!result && result != ' ') {
        `Przegrałeś ${bid}`
    }
    
 }

    start() {
        
        if (this.bid.value < 1) {
            return alert('Minimalna stawka to 1!')
        }

        const bid = Math.floor(this.bid.value);
        const res = this.wallet.checkCanPlay(bid)
        if (res === false) {
            return alert ('Nie posiadasz tyle pieniędzy w portfelu!')
        }

        this.dashboards.forEach((board) => {
            const number = Math.floor(Math.random() * 3)
            this.array.push(number)
            
            if (number === 0) {
                board.style.backgroundColor = 'red'
            }
            else if (number === 1){
                board.style.backgroundColor = 'green'
            }
            else {
                board.style.backgroundColor = 'blue'
            }
        })

        console.log(this.array)

        let checkIfWin = true;

        Result.checkWinner(this.array) ? (this.wallet.changeWallet(bid,'+'), checkIfWin == true) : (this.wallet.changeWallet(bid,'-'), checkIfWin = false )
        
        console.log(checkIfWin);

        this.stats.addGameToStats(checkIfWin,this.bid.value)
        this.result.textContent = `${this.stats.showResult()}`

        this.array = [];
        this.render()
    }
}
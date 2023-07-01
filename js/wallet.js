 class Wallet {
    constructor(startBalance)  {
    let _money = startBalance;
     
    this.checkBalance = () => {
        return _money
    };

    this.checkCanPlay = value => {
        if (_money >= value){
            return true
   
        }

        else {
            return false
  
        }
    }
 
    this.changeWallet = (value, type = "+") => {
        if (typeof value === "number" && !isNaN(value))
        {
            if (type === "+"){
                return _money += value;
            }
            else if (type === "-"){
                return _money -= value
            }
            else {
                throw new Error('nieprawidłowy typ działania')
            }
        }

        else {
            console.log(typeof value);
            throw new Error('nieprawidłowa liczba ')
        }
    }

    }}

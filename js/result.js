
class Result {
    static moneyWinInGame (bid,result){
        result ?  bid * 3 : 0;
    }

    static checkWinner (draw){
        if (draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[0] 
            || 
            draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0])
            {
            return true;
        }
        else {
            return false
        }
    }

}

class Colors {
    constructor() {

    this.colors = ['red','blue','green'];

}


draw () {
    let array = [];
    for (let i = 0; i <3; i++){
    array.push(this.colors[[Math.floor(Math.random() * 3)]])
    }
    return array
}   

};


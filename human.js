function walk(){
    console.log('asd')
}

function Human(){
    this.height = 13
    this.weight = 45
    this.stomach = []
}

Human.prototype.eat = function(food){
    this.stomach.push(food)
}
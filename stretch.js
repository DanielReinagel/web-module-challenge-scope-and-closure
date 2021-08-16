function createBase(baseNum){
    return function(num){
        return num+baseNum;
    }
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
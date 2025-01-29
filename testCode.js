//count char function
/*
function countCh(string, ch){
    let count = 0;
    for (let i = 0 ; i < string.length ; i++){
        if (string[i] == ch || string[i] == ch.toUpperCase()){
            count++;
        }
    }
    return count;
}

console.log(countCh("Alexander", "a"));
*/

//figura triangulo
/*
let size = 8, figure = "#";

for (let i = figure ; i.length <= size ; i += figure){
    console.log(i);
}
*/

//tablero
/*
let size = 8, board = "";
for (let y = 0 ; y < size ; y++){
    for (let x = 0 ; x < size ; x++){
        if ((x+y) % 2 == 0){
            board += " ";
        }else{
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
*/

//FizzBuzz
/*
let fizz = "Fizz", buzz = "Buzz", size = 100, count = 1;
while(count <= size){
    //console.log(count);
    if (count % 3 == 0 && count % 5 == 0){
        console.log(fizz + buzz);
    }else if (count % 3 == 0){
        console.log(fizz);
    }else if (count % 5 == 0){
        console.log(buzz);
    }else{
        console.log(count);
    }
    count++;
}
*/

//minimun function
/*
function minNum(a, b){
    let result = Math.min(a,b);
    return result;
}

console.log(minNum(45, 23));
*/
/*
function minNumber(a,b){
    if (a > b){
        return b;
    }else{
        return a;
    }

}
console.log(minNumber(89, 74));
*/
/*
function minNumber(a, b){
    let result = a - b;
    if(result < 0){
        return a;
    }else if (result > 0){
        return b;
    }else if(result == 0){
        return "the numbers are equals";
    }
}

console.log(minNumber(2,2));
*/

const minNumber = (a, b) => a < b ? a : (a > b ? b : "The numbers are equal");

console.log(minNumber(2, 2)); // Output: "The numbers are equal"
console.log(minNumber(3, 5)); // Output: 3
console.log(minNumber(7, 4)); // Output: 4
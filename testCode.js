//count char function
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
//1. without arguments and without return type
/*
function evewnOdd(){
    var a = 1000;
    if(a%2 == 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
evewnOdd()
*/
//2. without arguments and with return type
/*
function evewnOdd(){
    var a = 1000;
    if(a%2 == 0){
       return ("Number is even");
    }
    else{
        return("Number is odd");
    }
}
console.log(evewnOdd())
*/
//3. with arguments and without return type
/*
function evewnOdd(a){
    if(a%2 == 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}
evewnOdd(109)
*/
//4. with arguments and with return type
function evewnOdd(a){
    if(a%2 == 0){
       return ("Number is even");
    }
    else{
        return("Number is odd");
    }
}
console.log(evewnOdd(19))
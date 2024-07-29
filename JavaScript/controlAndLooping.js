// Control Statements
//Login
/*var email = "info@rampex.in"
var pwd = "123456"
var userTypingEmail =  "info@rampex.in"
var userTypingPwd =  "123456"
if(userTypingEmail === email){
    if(userTypingPwd === pwd){
        console.log("Login Successful");
    }
    else{
        console.log("Password is wrong");
    }
}else{
    console.log("User Email is not in the DB")
}
    */

//signup code
/*userName = "surya"
pwd = "Surya@123"
cnfPwd = "Surya@123"
if(userName){
    if(pwd){
        if(cnfPwd){
            if(pwd === cnfPwd){
                console.log("Signup Successful");
            } else{
                console.log("PAssword and confirm password does not match");
            }
        }
        else{
            console.log("Type your CnfPwd");
        }
    }
    else{
        console.log("Type your Pwd");
    }
}
else{
    console.log("Type your username");
}
*/

//Looping Statements

// 4. for in loop
arr = [10, 20, "Hello", true];
/*for (ind in arr) {
    console.log(ind);
}*/
// 5. for of loop
/*for (ind of arr) {
    console.log(ind);
}*/
// 6. for each loop
arr.forEach((ind) => {
  console.log(ind);
});

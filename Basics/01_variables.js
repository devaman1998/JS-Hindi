const accountId = 12345
let accountEmail = "aman@gmail.com"
var accountPasswword = "Jaipur"
accountCity = "Gorakhpur"
let accountState;

console.log(accountId);
//accountID = 2 // Not allowed

/*
Prefer not to use var 
because of issue in block scope and fuaationaal scope
*/


accountEmail ="dskk@gmai.com"
accountPasswword = "1211"
accountCity = "Deoria"

console.table([accountEmail, accountPasswword,accountCity, accountState])
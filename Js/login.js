

// JavaScript part
let array = [
    {
        username: "sara",
        password: "Lama1234"
    },
    {
        username: "Lama",
        password: "Lama1234"
    },
    {
        username: "shatha",
        password: "Lama1234"
    }
];

function moh(event) {
    event.preventDefault()
    let emailInput = document.getElementById("einput").value;
    let password = document.getElementById("pass").value;
    let found = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i].username === emailInput) {
            found = true;
            if (array[i].password === password) {
                window.alert("Login successful!");
                window.location.href=("/html/home.html")

            } else {
                window.alert("Incorrect password.");
            }
            break; // Break out of the loop once a matching username is found
        }
    }

    if (!found) {
        window.alert("Username is wrong.");
    }
}






// --------------------------------validation--------------------------
// let email = document.forms["form"]["email"]
// let password = document.forms["form"]["password"]
// let user_error=document.getElementById("user_error")
// let pass_error=document.getElementById("pass_error")

// email.addEventListener("textInput",email_verify)
// password.addEventListener("textInput",pass_verify)
// console.log(email)

// function validation(){
//     if(email.value.length<9){
     
//         user_error.style.display="block";
//         email.style.border="1px solid red";
//         email.focus();
//         return false;
//     }
//     if(password.value.length<6){
//         password.style.border="1px solid red";
//         pass_error.style.display="block";
//         password.focus();
//         return false;
//     }
// }

// function email_verify(){
//     if(email.value.length>=9){
     
//         user_error.style.display="none";
//         email.style.border="1px solid  black";
//         return true;
//     }

// }
// function pass_verify(){
//     if(password.value.length>=6){
//      pass_error.style.display="none";
//     pass.style.border="1px solid  black";
//     return true;
//     }
 
// }
function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("username").value
    // console.log(name, "name here")
    var email = document.getElementById("useremail").value
    // console.log(email);
    var password = document.getElementById("userpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("userconfirmpassword").value
    // console.log(confirmpassword);

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword.length >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("TanishqUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("TanishqUsers", JSON.stringify(Ls))
                    alert("Registration Successful")
                    window.location.href="./login.html"
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                alert("password not match");
            }

        } else {
            alert("password should  include 8 or more characters");
        }
    } else {
        alert("please fill all fields");
    }

}

// function getdata() {
//     //    var txt = localStorage.getItem(Users)
//     console.log(window.localStorage.getItem("Users"));
// }

// function getinfo() {
//     var get_data =
//         JSON.parse(localStorage.getItem("Users"));
//     console.log(get_data);
// }




// now store data in ls
// localStorage.setItem("Users", JSON.stringify(userdata))
// JSON.stringify;           //  convert object into string
// JSON.parse();            // convert json into object
// localStorage.setItem(key, value)    // to save into ls
// localStorage.getItem(key)       // to get data from lsm,x
// console.log(userdata);

// var userdata = {
//     userName: name,
//     userEmail: email,
//     userPassword: password,
//     userConfirmPassword: confirmpassword
// }

// var Ls = JSON.parse(localStorage.getItem("Users")) || []
// Ls.push(userdata);
// console.log(Ls)
// localStorage.setItem("Users", JSON.stringify(Ls))

// var flag = false;
// for (var i = 0; i < Ls.length; i++) {
//     if (Ls[i].userEmail == email) {
//         flag = true;
//     }
// }
// if (!flag) {
//     alert("good to go to register")
// }
// else {
//     alert("email matched")
// }


// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess


function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value;
    var userPassword = document.getElementById("userpassword").value;

    var Ls = JSON.parse(localStorage.getItem("TanishqUsers"));

    var currentUser;
    var flag = false;
    for (var i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser=Ls[i];
        }
    }
    if (flag == true) {
        localStorage.setItem("TanishqCurrentUser", JSON.stringify(currentUser))
        window.location.href='./MultipleProductjs.html';
        alert("login successfull")
    }
    else {
        alert("Credintails not matched")
    }

}

function logout() {
    alert("Logout successful.")
    localStorage.removeItem("TanishqCurrentUser")
    window.location.reload()


}



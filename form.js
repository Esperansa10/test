document.getElementById("main-form").addEventListener('submit', fun);

function fun(event){
  event.preventDefault();
  el = document.getElementById("main-form");

  var email = el.email.value;
  var pass = el.password.value;
  console.log (email, pass);
document.getElementById('email_id').innerHTML = "Email:  " + email;
document.getElementById('pass_id').innerHTML = "Password:  " + pass;

var fail = "";

if (email == "" || pass == "") {
  fail = "Some field is empty";
}

else if (email.split('@').length - 1 == 0) {
  fail = "Email doesn't correct"
}

else if (pass == "qwerty") {
  fail = "Your password is too easy"
}

if (fail != "") {
alert(fail);
}
else {
  window.location = "https://medgz.ru";
}
return false;
};


//document.getElementById('text').style.color = "red";

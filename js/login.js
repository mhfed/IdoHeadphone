var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var submit = document.getElementsByName('submit').item(0);

var usernameError = document.getElementsByClassName('message').item(0);
var passwordError = document.getElementsByClassName('message').item(1);

test.addEventListener('textInput', emailVerify)

function validated() {
    if (username.value == '') {
        username.style.border = 'red 1px solid';
        usernameError.style.display = "block";
        // username.focus();
        return false;
    }
    if (username.value != '' || test.value.length > 0) {
        username.style.border = '#ccc 1px solid';
        usernameError.style.display = "none";
        // username.focus();
        return true;

    }

}

function active() {
    usernameError.style.display = "none"
}
var test = document.forms['form']['test'];
var testError = document.getElementById('message');
var submit = document.getElementsByName('submit').item(0);
test.addEventListener('textInput', emailVerify)


function validated() {
    if (test.value == '') {
        test.style.border = 'red 1px solid';
        testError.style.display = "block";
        // test.focus();
        return false;
    }
    if (test.value != '' || test.value.length > 0) {
        test.style.border = '#ccc 1px solid';
        testError.style.display = "none";
        // test.focus();
        return true;

    }

}

function active() {
    testError.style.display = "none"
}
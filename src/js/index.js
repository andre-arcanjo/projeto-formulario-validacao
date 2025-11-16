var buttonRegister = document.getElementById('btn-validation');
var inputId = document.getElementById('id');
var inputName = document.getElementById('name');
var inputEmail = document.getElementById('email');
var inputPhone = document.getElementById('phone');
var inputs = document.querySelectorAll('.input');
var msgError = document.querySelector('.msg-error');
var msgSuccess = document.querySelector('.msg-success');
function registerUser(id, name, email, phone) {
    var newUser = { id: id, name: name, email: email, phone: phone };
    console.log(newUser);
}
function inputValidation(inputs) {
    var formIsValid = true;
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            input.classList.add('input-error');
            input.classList.remove('input-success');
            formIsValid = false;
        }
        else {
            input.classList.remove('input-error');
            input.classList.add('input-success');
        }
    });
    if (!formIsValid) {
        msgError.classList.add('msg-error-active');
        msgSuccess.classList.remove('msg-success-active');
    }
    else {
        msgError.classList.remove('msg-error-active');
        msgSuccess.classList.add('msg-success-active');
    }
    return formIsValid;
}
;
function isValidName(name) {
    var regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(name);
}
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function isValidTelefone(phone) {
    var regex = /^[0-9]+$/;
    return regex.test(phone);
}
function verifyFieldFormats(name, email, phone) {
    if (!isValidName(name)) {
        msgError.textContent = "⚠️ O nome deve conter apenas letras.";
        msgError.classList.add("msg-error-active");
        msgSuccess.classList.remove("msg-success-active");
        return false;
    }
    if (!isValidEmail(email)) {
        msgError.textContent = "⚠️ O email informado é inválido.";
        msgError.classList.add("msg-error-active");
        msgSuccess.classList.remove("msg-success-active");
        return false;
    }
    if (!isValidTelefone(phone)) {
        msgError.textContent = "⚠️ O telefone deve conter apenas números.";
        msgError.classList.add("msg-error-active");
        msgSuccess.classList.remove("msg-success-active");
        return false;
    }
    return true;
}
buttonRegister.addEventListener('click', function (event) {
    event.preventDefault();
    var isValid = inputValidation(inputs);
    if (!isValid)
        return;
    var id = inputId.value;
    var name = inputName.value;
    var email = inputEmail.value;
    var phone = inputPhone.value;
    var formatsAreValid = verifyFieldFormats(name, email, phone);
    if (!formatsAreValid)
        return;
    registerUser(id, name, email, phone);
});

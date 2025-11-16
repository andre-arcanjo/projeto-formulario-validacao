const buttonRegister = document.getElementById('btn-validation') as HTMLButtonElement;
const inputId = document.getElementById('id') as HTMLInputElement;
const inputName = document.getElementById('name') as HTMLInputElement;
const inputEmail = document.getElementById('email') as HTMLInputElement;
const inputPhone = document.getElementById('phone') as HTMLInputElement;
const inputs = document.querySelectorAll('.input') as NodeListOf<HTMLInputElement>;
const msgError = document.querySelector('.msg-error') as HTMLParagraphElement;
const msgSuccess = document.querySelector('.msg-success') as HTMLParagraphElement;

interface IUser {
    id: number | string;
    name: string;
    email: string;
    phone: string;
}

function registerUser(id: number | string, name: string, email: string, phone: string) {
    const newUser: IUser = { id, name, email, phone };
    console.log(newUser);
}

function inputValidation(inputs: NodeListOf<HTMLInputElement>): boolean {

    let formIsValid: boolean = true;

    inputs.forEach((input) => {

        if (input.value.trim() === '') {
            input.classList.add('input-error');
            input.classList.remove('input-success');
            formIsValid = false;
        } else {
            input.classList.remove('input-error');
            input.classList.add('input-success');
        }
    });

    if (!formIsValid) {
        msgError.classList.add('msg-error-active');
        msgSuccess.classList.remove('msg-success-active');
    } else {
        msgError.classList.remove('msg-error-active');
        msgSuccess.classList.add('msg-success-active');
    }

    return formIsValid;
};

function isValidName(name: string): boolean {
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    return regex.test(name);
}

function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidTelefone(phone: string): boolean {
    const regex = /^[0-9]+$/;
    return regex.test(phone);
}

function verifyFieldFormats(name: string, email: string, phone: string): boolean {

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

buttonRegister.addEventListener('click', (event: MouseEvent) => {

    event.preventDefault();

    const isValid = inputValidation(inputs);

    if (!isValid) return;

    const id = inputId.value;
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;

    const formatsAreValid = verifyFieldFormats(name, email, phone);
    if (!formatsAreValid) return;

    registerUser(id, name, email, phone);

})


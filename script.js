const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symbols = "~@#$%^&*(){}|[]<>/-=";

const mixed = upperCase + lowerCase + digits + symbols;

function createPassword()
{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while(length>password.length)
    {
        password += mixed[Math.floor(Math.random() * mixed.length)];
    }
    passwordBox.value = password;
}

const button = document.querySelector(".container button");

button.addEventListener("click",()=>{
    createPassword();
})

function copyPassword()
{
    const text = passwordBox.value;
    copyToClipboard(text);
}

const copy = document.querySelector(".display img")
copy.addEventListener("click",()=>{
    copyPassword();
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
            alert('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            alert('Could not copy text: ' + err);
        });
}

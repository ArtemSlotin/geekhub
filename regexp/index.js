var FullName = document.querySelector('[name="full_name"]');
var Email = document.querySelector('[name="email"]');
var Password = document.querySelector('[name="password"]');
document.querySelector('#user-form').addEventListener('submit', function (e) {
    var ValidateFullName = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\-]+\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\-]+\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/;
    if (ValidateFullName.test(FullName.value)) {
        FullName.style.backgroundColor = '#C2E0C6'
    } else (
        FullName.style.backgroundColor = '#f9d0c4'
    );
    var ValidateEmail = /^[^.][A-Z0-9._%+-]+[^.]@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (ValidateEmail.test(Email.value)) {
        Email.style.backgroundColor = '#C2E0C6'
    } else (
        Email.style.backgroundColor = '#F9D0C4'
    );
    var ValidatePassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/;
    if (ValidatePassword.test(Password.value)) {
        Password.style.backgroundColor = '#C2E0C6'
    } else (
        Password.style.backgroundColor = '#F9D0C4'
    );
    e.preventDefault();
});



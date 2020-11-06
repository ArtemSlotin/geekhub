var fullname = document.querySelector('[name="full_name"]');
var email = document.querySelector('[name="email"]');
var password = document.querySelector('[name="password"]');
var description = document.querySelector('[name="description"]')
document.querySelector('#user-form').addEventListener('submit', function (e) {
    var ValidateFullName = /^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\-]+\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\-]+\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/;
    if (ValidateFullName.test(fullname.value)) {
        fullname.style.backgroundColor = '#C2E0C6'
    } else (
        fullname.style.backgroundColor = '#f9d0c4'
    );
    var ValidateEmail = /^(?:(?:[a-zA-Z\d\-]+)|(?:[a-zA-Z\d\-]+[a-zA-Z\d\-\.]+[a-zA-Z\d\-]+))@[a-zA-Z\d\-][a-zA-Z\d\-\.]*\.[a-zA-Z\d\-\.]*[a-zA-Z\d\-]$/;
    if (ValidateEmail.test(email.value)) {
        email.style.backgroundColor = '#C2E0C6'
    } else (
        email.style.backgroundColor = '#F9D0C4'
    );
    var ValidatePassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/;
    if (ValidatePassword.test(password.value)) {
        password.style.backgroundColor = '#C2E0C6'
    } else (
        password.style.backgroundColor = '#F9D0C4'
    );

    // let descriptionValue = description.value;
    // let arrays = descriptionValue.split(' ')
    // const regex = /\+\+(.*?)\+\+/g;
    //
    // for (let i = 0; i < arrays.length; i++) {
    //     arrays.replace(regex, '<strong>`${i}`</strong>');
    // console.log(descriptionValue)
    // }

    $( "button" ).click(function() {
        $(this).toggleClass("active");
    });

    e.preventDefault();
});



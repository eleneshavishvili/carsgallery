window.onload = () => {
    const fbButton = document.getElementById('signinWithFacebook-btn');
    const lnButton = document.querySelector('#signinWithGoogle');
    const buttons = document.querySelectorAll('button.btn');
    const submitButton = document.querySelector('input[type="submit"]');
    const userInfoDiv = document.querySelector('.user--info');
    // const readData = document.getElementById('read');

    if (userInfoDiv) {
        const UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const repassword = document.getElementById('rePassword');
        email.value = UserInfo.email;
        password.value = UserInfo.password;
        rePassword.value = UserInfo.rePassword;
       
    }

    if (submitButton) {

        buttons.forEach(function (button) {
            button.addEventListener('click', function (event) {
                const openUrl = event.target.dataset.url;
                window.open(openUrl, "");
            })
        });
  
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const rePassword = document.getElementById('rePassword');
            const FormElement = document.getElementById('registrationForm');
            const UserInfo = {
                email: email.value,
                password: password.value,
                rePassword: rePassword.value,
            };
           
            localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
        
            FormElement.submit();
        })
    }

};
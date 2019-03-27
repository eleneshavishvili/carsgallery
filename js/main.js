function  userInfo() {

    if(localStorage.UserInfo != undefined) {
        return JSON.parse(localStorage.UserInfo);
    } else {
        return "there is no user. Please try to register"
    }
}


window.onload = function(){
let logoutBtn = document.querySelector('.log-out-btn');

    if(localStorage.getItem('bgcolor')!==null){
        var color = localStorage.getItem('bgcolor');


        document.getElementsByTagName('nav')[0].style.background = color;
    }
    
    document.getElementById('grey').onclick = function(){
        document.getElementsByTagName('nav')[0].style.background = 'rgb(71, 70, 70, 0.4)';
        localStorage.setItem('bgcolor', 'rgb(71, 70, 70, 0.4)');
    };

    document.getElementById('transp').onclick = function(){
        document.getElementsByTagName('nav')[0].style.background = 'transparent';
        localStorage.setItem('bgcolor', 'transparent');
    };



    /* -----------------------------------------------*/
    
    
    if (localStorage.loggedin == 1) {
        document.querySelector('.not-logged-in').style.display = 'none';
        document.querySelector('.logged-in').style.display = 'block';
    } else {
        document.querySelector('.logged-in').style.display = 'none';
    }

    logoutBtn.addEventListener('click', function () {
        localStorage.loggedin = 0;
        // localStorage.removeItem('UserInfo');
        document.querySelector('.not-logged-in').style.display = 'grid';
        document.querySelector('.logged-in').style.display = 'none';
    });




/*login Functions*/
    let loginBtn = document.querySelector('.not-logged-in button');
    function url () {
        return location.pathname.split('/')
    }

    function checkEmail(){
        let loginEmail = document.querySelector('.not-logged-in [type=email]');
        return loginEmail.value == userInfo().email ? 1 : false;
    }

    function checkPass(){
        let loginPass = document.querySelector('.not-logged-in [type=password]');
        return loginPass.value == userInfo().password ? 1 : false;
    }


    function login () {
        let checked = checkEmail() && checkPass();
        if  (checked){
            localStorage.loggedin = 1;
            location.href = location.origin +"/"+ url()[1];
        } else {
            return localStorage.loggedin = 0;
        }
    }

    loginBtn.addEventListener('click', function () {
        console.log(login());
    });




    /*save production to user*/
    let products = document.querySelector('.products');
    products.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    if (localStorage.loggedin == 1) {
        addToCart(event)
    }

    });

    function addToCart (e) {
        let cart = e.target.offsetParent.offsetParent;
        let productName = cart.querySelector('h4').innerHTML;
        let productPrice = cart.querySelector('p').innerHTML;
        if (localStorage.products != undefined) {
            localStorage.products = localStorage.products.slice(0, -1);
            localStorage.products += ',';
            localStorage.products += JSON.stringify({name:productName, price:productPrice} );
            localStorage.products += ']';
        } else {
            localStorage.products = JSON.stringify([{name:productName, price:productPrice}]  )
        }
    }

};




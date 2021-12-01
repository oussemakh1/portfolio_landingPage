var ul  = document.getElementsByClassName('nav__ul')[0];
var burgerIcon = document.getElementsByClassName('mobile_nav')[0];

var mobileNavStatus = false;


function burger () {

    mobileNavStatus = !mobileNavStatus;
    
    if(mobileNavStatus == true) {
        ul.style.display = "block";
       burgerIcon.style.display = "none";
    }
    else {
        ul.style.display = "none";
        burgerIcon.style.display = "block";
    }

}
   
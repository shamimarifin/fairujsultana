

var sidebar = document.getElementById('sidebar');

function closetab(){
    sidebar.style.right = "-200px"
}

function opentab(){
    sidebar.style.right = "0"
}



// ScrollBar Sticy Menu

var navbar = document.getElementById('navbar');
var sidebar = document.getElementById('sidebar');


window.onscroll = function(){
    if(window.pageYOffset >= sidebar.offsetTop){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}


// Back to the Top

var scrollTop = document.getElementById('scroll');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > 300){
        scrollTop.style.display = ' flex';
    }else{
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', function(){
    window.scrollTo(0,0);
})
const reviews = document.querySelectorAll('.reviews__review');
const slArrows = document.querySelectorAll('.cards-slider-control');
const anchors = document.querySelectorAll('a[href*="#"]');
const burgerBtn = document.querySelector('.header__burger-btn');

if(document.documentElement.clientWidth > 1100){
    document.querySelectorAll('.reviews__video-cont')[5].className += ' _active';
    reviews.forEach(review => {
        review.addEventListener('click', function(){
            let cont = this.parentNode; 
            try{document.querySelector('._active').querySelector('.reviews__video').pause();}
            catch{}
            document.querySelector('._active').className = document.querySelector('._active').className.replace('_active' , '');
            cont.querySelector('.reviews__video-cont').className = cont.querySelector('.reviews__video-cont').className + ' _active';
        });
    });
}

slArrows.forEach(btn => {
    btn.addEventListener('click', function(){
        let i = 1;
        let f = setInterval(() => {
            if(i < 330){
                btn.nextElementSibling.scrollBy(4, 0);
                i+=4;
            }else{
                clearInterval(f);
            }
        }, 1);
            
    }); 
});

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        let block = anchor.getAttribute('href');
        document.querySelector('' + block).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};

burgerBtn.addEventListener('click', function(){
    let menu = burgerBtn.nextElementSibling;
    let links = menu.querySelectorAll('.links');
    if(menu.style.height === '0px'){
        menu.style.height = '117px';
        links.forEach(link => { link.style.display = 'block'});   
    }else{
        menu.style.height = '0px';
        links.forEach(link => { link.style.display = 'none'});
    }
});
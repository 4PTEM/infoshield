let reviews = document.querySelectorAll('.reviews__review');

reviews.forEach(review => {
    review.addEventListener('click', function(){
        let cont = this.parentNode; 
        try{document.querySelector('._active').querySelector('.reviews__video').pause();}
        catch{}
        document.querySelector('._active').className = document.querySelector('._active').className.replace('_active' , '');
        cont.querySelector('.reviews__video-cont').className = cont.querySelector('.reviews__video-cont').className + ' _active';
    });
});
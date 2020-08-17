
const windowWidth = window.innerWidth;

window.addEventListener('load', function(){
    AOS.init({
        once: true
    });

    if (windowWidth >= 1024) {
        window.addEventListener('scroll', (e) => {
            parallaxScroll();
        });
    }

    function parallaxScroll(){
        var scrolled = window.pageYOffset;

        let elParallax = document.querySelector('.elparallax');
        let elParallaxBio = document.querySelector('.el-parallax-bio');
        let elParallaxFriends = document.querySelector('.el-parallax-friends');

        let Action = (0-(scrolled*.35));
        let ActionBio = (0-(scrolled*.12));
        let ActionFriends = (0+(scrolled*.25 - 300));
    
        elParallax.style.top = Action + 'px';
        elParallaxBio.style.top = ActionBio + 'px';
        elParallaxFriends.style.top = ActionFriends + 'px';
    }

});

// Mobile Menu
(function() {
    var body = document.querySelector('body');
    var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
    var menuContainer = document.querySelector('#main-menu-mobile');
    
    if (menuTrigger && menuContainer) {
        menuTrigger.onclick = function() {
            menuContainer.classList.toggle('open');
            menuTrigger.classList.toggle('is-active');
            body.classList.toggle('lock-scroll');
        };
    }
})();

// Use Cases Carousel
(function() {
    var carousel = document.querySelector('.use-cases-carousel-wrapper');
    if (!carousel) return;
    
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var playPauseBtn = carousel.querySelector('.carousel-play-pause');
    var playIcon = carousel.querySelector('.play-icon');
    var pauseIcon = carousel.querySelector('.pause-icon');
    
    var currentSlide = 0;
    var isPlaying = true;
    var autoplayInterval;
    var AUTOPLAY_DELAY = 3000;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        var next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function startAutoplay() {
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }
    
    function stopAutoplay() {
        isPlaying = false;
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        clearInterval(autoplayInterval);
    }
    
    // Play/Pause button
    playPauseBtn.onclick = function() {
        if (isPlaying) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    };
    
    // Dot navigation
    dots.forEach(function(dot, index) {
        dot.onclick = function() {
            showSlide(index);
            if (isPlaying) {
                clearInterval(autoplayInterval);
                autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
            }
        };
    });
    
    // Start autoplay on load
    startAutoplay();
    
    // Pause on hover (optional, good UX)
    carousel.addEventListener('mouseenter', function() {
        if (isPlaying) {
            clearInterval(autoplayInterval);
        }
    });
    
    carousel.addEventListener('mouseleave', function() {
        if (isPlaying) {
            autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
        }
    });
})();

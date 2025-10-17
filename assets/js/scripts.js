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
    var overlayPurpose = carousel.querySelector('.overlay-purpose');
    
    var currentSlide = 0;
    var autoplayInterval;
    var AUTOPLAY_DELAY = 3000;
    
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        
        // Add active class to current slide
        slides[index].classList.add('active');
        currentSlide = index;
        
        // Update overlay text
        if (overlayPurpose) {
            var impactSummary = slides[index].getAttribute('data-impact-summary');
            overlayPurpose.innerHTML = impactSummary;
            
            // Make all links in overlay open in new tab
            var links = overlayPurpose.querySelectorAll('a');
            links.forEach(function(link) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            });
        }
    }
    
    function nextSlide() {
        var next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    // Start autoplay on load
    autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', function() {
        autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    });
})();

document.addEventListener('DOMContentLoaded', function() { 
    // Hamburger menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');

    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
        this.setAttribute('aria-expanded', navLinks.classList.contains('active') ? 'true' : 'false');
      });
    }

    // Dropdown toggle for mobile
    dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });

    // Close menu on nav link click (optional, for better UX)
    document.querySelectorAll('.nav-links a:not([href="#"])').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.remove('fa-times');
          mobileMenuBtn.querySelector('i').classList.add('fa-bars');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  
    // Client Logos Auto-Scrolling
    const clientTrack = document.querySelector('.client-logos-track');
    let clientPosition = 0;
    const clientScrollSpeed = 1;
    let clientAnimationId;
  
    function animateClients() {
      clientPosition -= clientScrollSpeed;
      
      // Reset position when scrolled all items
      if (clientPosition < -clientTrack.scrollWidth / 2) {
        clientPosition = 0;
      }
      
      clientTrack.style.transform = `translateX(${clientPosition}px)`;
      clientAnimationId = requestAnimationFrame(animateClients);
    }
  
    // Industries Auto-Scrolling
    const industryTrack = document.querySelector('.industry-slider-track');
    let industryPosition = 0;
    const industryScrollSpeed = 0.8;
    let industryAnimationId;
  
    function animateIndustries() {
      industryPosition -= industryScrollSpeed;
      
      // Reset position when scrolled all items
      if (industryPosition < -industryTrack.scrollWidth / 2) {
        industryPosition = 0;
      }
      
      industryTrack.style.transform = `translateX(${industryPosition}px)`;
      industryAnimationId = requestAnimationFrame(animateIndustries);
    }
  
    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.slider-dot');
    let currentTestimonial = 0;
    let testimonialInterval;
  
    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      
      currentTestimonial = index;
      testimonials[currentTestimonial].classList.add('active');
      testimonialDots[currentTestimonial].classList.add('active');
    }
  
    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }
  
    function startTestimonialSlider() {
      testimonialInterval = setInterval(nextTestimonial, 5000);
    }
  
    // Dot navigation for testimonials
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        showTestimonial(index);
        startTestimonialSlider();
      });
    });
  
    // Technology Tabs
    const techTabs = document.querySelectorAll('.tech-tab');
    const techContents = document.querySelectorAll('.tech-content');
  
    techTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        techTabs.forEach(t => t.classList.remove('active'));
        techContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-content`).classList.add('active');
      });
    });
  
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Scroll Animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate__animated');
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight / 1.3;
  
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < triggerPoint) {
          const animation = element.classList.contains('animate__fadeInUp') ? 'fadeInUp' :
                           element.classList.contains('animate__fadeInDown') ? 'fadeInDown' :
                           element.classList.contains('animate__fadeInLeft') ? 'fadeInLeft' :
                           element.classList.contains('animate__fadeInRight') ? 'fadeInRight' : 'fadeIn';
          
          element.classList.add(`animate__${animation}`);
        }
      });
    };
  

  
      function updateCursor() {
        // Easing for follower
        posX += (mouseX - posX) / 6;
        posY += (mouseY - posY) / 6;
        
        cursorFollower.style.transform = `translate(${posX}px, ${posY}px)`;
        requestAnimationFrame(updateCursor);
      }
  
      updateCursor();

    // Hover effects for cursor
const hoverElements = document.querySelectorAll('a, button, .tech-tab, .client-logo-item, .industry-item, .service-card, .product-card');

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorFollower.classList.add('hover');
  });

  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorFollower.classList.remove('hover');
  });
});

if (isTouchDevice) {
  // Hide custom cursor on touch devices
  cursor.style.display = 'none';
  cursorFollower.style.display = 'none';
}
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
          }
        }
        
      });
    });
  
    // Initialize animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
  
    // Start auto-scrolling animations
    animateClients();
    animateIndustries();
    startTestimonialSlider();
  
    // Clean up animations when tab is inactive
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        cancelAnimationFrame(clientAnimationId);
        cancelAnimationFrame(industryAnimationId);
        clearInterval(slideInterval);
        clearInterval(testimonialInterval);
      } else {
        animateClients();
        animateIndustries();
        resetSlider();
        startTestimonialSlider();
      }
    });
   });


// Client logos auto-scrolling
       class AutoScroller {
            constructor(trackSelector, speed = 0.5) {
                this.track = document.querySelector(trackSelector);
                this.speed = speed;
                this.position = 0;
                this.isRunning = false;
                this.animationId = null;
                this.isPaused = false;
                
                if (this.track) {
                    this.init();
                }
            }
            
            init() {
                // Start animation
                this.start();
                
                // Add hover pause functionality
                const container = this.track.closest('.client-logos-container') || this.track.closest('.industry-slider-container');
                if (container) {
                    container.addEventListener('mouseenter', () => this.pause());
                    container.addEventListener('mouseleave', () => this.resume());
                }
            }
            
            animate() {
                if (!this.isPaused) {
                    this.position -= this.speed;
                    
                    // Reset position when scrolled half the content (for seamless loop)
                    if (this.position <= -this.track.scrollWidth / 2) {
                        this.position = 0;
                    }
                    
                    this.track.style.transform = `translateX(${this.position}px)`;
                }
                
                if (this.isRunning) {
                    this.animationId = requestAnimationFrame(() => this.animate());
                }
            }
            
            start() {
                if (!this.isRunning) {
                    this.isRunning = true;
                    this.animate();
                }
            }
            
            stop() {
                this.isRunning = false;
                if (this.animationId) {
                    cancelAnimationFrame(this.animationId);
                }
            }
            
            pause() {
                this.isPaused = true;
            }
            
            resume() {
                this.isPaused = false;
            }
            
            setSpeed(newSpeed) {
                this.speed = newSpeed;
            }
        }
        
        // Initialize scrollers when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Client logos scroller
            const clientScroller = new AutoScroller('.client-logos-track', 0.5);
            
            // Industries scroller (if exists)
            const industryScroller = new AutoScroller('.industry-slider-track', 0.8);
            
            // Handle visibility change to pause/resume animation when tab is not active
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    clientScroller.pause();
                    if (industryScroller) industryScroller.pause();
                } else {
                    clientScroller.resume();
                    if (industryScroller) industryScroller.resume();
                }
            });
        });
        


    // Testimonial Slider Functionality
const initTestimonialSlider = () => {
    const track = document.querySelector('.testimonial-slider-track');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const indicatorsContainer = document.querySelector('.testimonial-indicators');
    
    let currentIndex = 0;
    let isAnimating = false;
    let autoSlideInterval;
    const slideInterval = 6000; // 6 seconds between slides
    const transitionSpeed = 600; // 600ms transition duration
    
    // Create indicators
    testimonials.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
    
    // Initialize slider
    function initSlider() {
        testimonials[currentIndex].classList.add('active');
        startAutoSlide();
    }
    
    // Start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextSlide();
        }, slideInterval);
    }
    
    // Reset auto slide timer
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (isAnimating || index === currentIndex) return;
        
        isAnimating = true;
        const direction = index > currentIndex ? 'next' : 'prev';
        const newIndex = (index + testimonials.length) % testimonials.length;
        
        // Update indicators
        indicators[currentIndex].classList.remove('active');
        indicators[newIndex].classList.add('active');
        
        // Fade out current slide
        testimonials[currentIndex].style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
        testimonials[currentIndex].style.opacity = '0';
        
        // After fade out completes
        setTimeout(() => {
            testimonials[currentIndex].classList.remove('active');
            testimonials[currentIndex].style.opacity = '';
            testimonials[currentIndex].style.transition = '';
            
            // Show new slide
            testimonials[newIndex].classList.add('active');
            setTimeout(() => {
                testimonials[newIndex].style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
                testimonials[newIndex].style.opacity = '1';
                
                // After fade in completes
                setTimeout(() => {
                    testimonials[newIndex].style.transition = '';
                    currentIndex = newIndex;
                    isAnimating = false;
                }, transitionSpeed);
            }, 50);
        }, transitionSpeed);
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Pause on hover
    const sliderContainer = document.querySelector('.testimonial-slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        resetAutoSlide();
    });
    
    // Initialize
    initSlider();
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

// HERO SLIDER FUNCTIONALITY
(function() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.hero-slide');
  const prevBtn = slider.querySelector('.slider-prev');
  const nextBtn = slider.querySelector('.slider-next');
  const indicators = slider.querySelectorAll('.slider-indicators .indicator');
  let current = 0;
  let intervalId;
  const interval = 6000;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    indicators.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, interval);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Button events
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });

  // Indicator events
  indicators.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);

  // Init
  showSlide(0);
  startAutoSlide();
})();

// CUSTOM CURSOR EFFECT
(function() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (!cursor || !cursorFollower) return;

  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  // Detect touch device
  function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  if (isTouchDevice()) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;
    cursorFollower.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effect for interactive elements
  const hoverElements = document.querySelectorAll('a, button, .tech-tab, .client-logo-item, .industry-item, .service-card, .product-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });
})();

// Why Choose Us Accordion (on click, not hover)
document.addEventListener('DOMContentLoaded', function() {
  // Why Choose Us Accordion
  const featureBoxes = document.querySelectorAll('.why-choose-us .feature-box');
  featureBoxes.forEach(box => {
    const title = box.querySelector('.feature-title');
    if (title) {
      title.addEventListener('click', function() {
        // Close all other boxes
        featureBoxes.forEach(b => {
          if (b !== box) b.classList.remove('open');
        });
        // Toggle current box
        box.classList.toggle('open');
      });
    }
  });
});
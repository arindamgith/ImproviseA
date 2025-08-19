document.addEventListener('DOMContentLoaded', function() {

    // --- Animated Counter ---
    const statsSection = document.querySelector('#stats');
    if (statsSection) {
        const counters = document.querySelectorAll('.stat-item h3');
        let hasAnimated = false;

        const startCounter = (counter) => {
            const target = +counter.getAttribute('data-count');
            const duration = 2000; // 2 seconds
            const stepTime = 10;
            let current = 0;
            const steps = duration / stepTime;
            const increment = target / steps;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current).toLocaleString();
                    setTimeout(updateCounter, stepTime);
                } else {
                    counter.innerText = target.toLocaleString() + (target === 10000 ? '+' : '');
                }
            };
            updateCounter();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    counters.forEach(startCounter);
                    hasAnimated = true;
                    observer.unobserve(statsSection);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(statsSection);
    }

    // --- Sticky Header Simple Logic ---
    // The header is already position: fixed via CSS.
    // More complex logic like hide/show on scroll can be added here if needed.
    // For now, the CSS handles the sticky behavior.

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = 0;
            });

            // Open the clicked item if it wasn't already active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // --- Swiper Sliders ---
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

});

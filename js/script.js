document.addEventListener('DOMContentLoaded', function () {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');

            // Toggle active class for styling (e.g., rotating an icon)
            faqItem.classList.toggle('active');

            // Animate the answer visibility
            if (faqItem.classList.contains('active')) {
                // Set max-height to its scroll height to animate open
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Collapse the answer
                answer.style.maxHeight = 0;
            }
        });
    });
});

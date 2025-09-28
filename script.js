document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const loadingBar = document.querySelector('.loading-bar');

    // Wait for the window to finish loading all resources (images, etc.)
    window.addEventListener('load', function() {
        // Set the width to 100% to trigger the bar fill animation
        loadingBar.style.width = '100%';

        // After a delay to let the animation complete, hide the preloader
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 3000); // This delay should match the `transition` time in CSS
    });
});
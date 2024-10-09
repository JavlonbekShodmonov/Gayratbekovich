const emoji = document.querySelector('.emoji');
const mouth = document.querySelector('.mouth');
const eyes = document.querySelectorAll('.eye');

// Blinking animation for eyes
setInterval(() => {
    eyes.forEach(eye => {
        eye.style.transform = 'scaleY(0.1)';
    });
    setTimeout(() => {
        eyes.forEach(eye => {
            eye.style.transform = 'scaleY(1)';
        });
    }, 200);
}, 3000);

// Hover effect - smile wider
emoji.addEventListener('mouseover', () => {
    mouth.style.height = '60px';
    mouth.style.borderRadius = '0 0 100px 100px';
});

emoji.addEventListener('mouseout', () => {
    mouth.style.height = '40px';
    mouth.style.borderRadius = '0 0 80px 80px';
});

// Redirect to Page 2 after 3 seconds
setTimeout(() => {
    window.location.href = "/photos/2ndPage.html"; // Change this to your second page
}, 3000);

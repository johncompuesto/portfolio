var script = document.createElement('script');
script.src = 'https://player.vimeo.com/api/player.js';
document.head.appendChild(script);

// Function to initialize the Vimeo player
function initVimeoPlayer(iframeSelector, options) {
    var iframes = document.querySelectorAll(iframeSelector);

    iframes.forEach(function (iframe) {
        var player = new Vimeo.Player(iframe, options);

        var container = iframe.closest('.video-container');

        function updatePlayerSize() {
            var containerWidth = container.clientWidth;
            var containerHeight = container.clientHeight;

            var aspectRatio = 16 / 9; // Vimeo default aspect ratio

            // Calculate the width and height to maintain the aspect ratio
            var playerWidth = Math.min(containerWidth, containerHeight * aspectRatio);
            var playerHeight = playerWidth / aspectRatio;

            iframe.style.width = playerWidth + 'px';
            iframe.style.height = playerHeight + 'px';
        }

        updatePlayerSize();
        window.addEventListener('resize', updatePlayerSize);

        // Handle play button for user interaction
        var playButton = container.querySelector('.play-button');
        playButton.addEventListener('click', function () {
            player.play().then(function () {
                // Use the Vimeo API play method to ensure video keeps playing
                player.setVolume(0); // Mute the video
            });
        });
    });
}

script.onload = function () {
    // Initialize the top-simple-box video with background option set to true
    initVimeoPlayer('.top-simple-box iframe', { autoplay: true, loop: true, controls: false, background: true });

    // Initialize other videos in third-container
    initVimeoPlayer('.third-container .card:nth-child(1) iframe', { autoplay: true, loop: true, controls: false });
    initVimeoPlayer('.third-container .card:nth-child(2) iframe', { autoplay: false, loop: true, controls: false });
    initVimeoPlayer('.third-container .card:nth-child(3) iframe', { autoplay: false, loop: true, controls: false });
    initVimeoPlayer('.third-container .card:nth-child(4) iframe', { autoplay: false, loop: true, controls: false });
};

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});
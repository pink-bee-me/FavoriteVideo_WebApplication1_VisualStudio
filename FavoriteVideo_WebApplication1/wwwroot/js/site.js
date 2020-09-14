// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function scrollAppear() {
    var exitText = document.querySelector('.exit-text');
    var exitPosition = exitText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2; // makes it responsive to whatever size user display happens to be

    if (exitPosition < screenPosition) {
        exitText.classList.add('exit-text-appear');
    }
}
window.addEventListener('scroll', scrollAppear);

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const clickButton = document.getElementById('clickButton');

    let count = 0;

    clickButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
        counterElement.classList.add('bounce');

        // Remove the animation class after it ends
        counterElement.addEventListener('animationend', () => {
            counterElement.classList.remove('bounce');
        }, { once: true });
    });
});

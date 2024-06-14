document.addEventListener('mousemove', (event) => {
    const horizontalLine = document.getElementById('horizontal-line');
    const verticalLine = document.getElementById('vertical-line');

    horizontalLine.style.top = `${event.clientY}px`;
    verticalLine.style.left = `${event.clientX}px`;
});

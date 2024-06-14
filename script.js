document.addEventListener('mousemove', function(e) {
    const cursorTracker = document.getElementById('cursor-tracker');
    const horizontalLine = cursorTracker.querySelector('::before');
    const verticalLine = cursorTracker.querySelector('::after');

    horizontalLine.style.top = `${e.clientY}px`;
    verticalLine.style.left = `${e.clientX}px`;

    horizontalLine.style.display = 'block';
    verticalLine.style.display = 'block';
});

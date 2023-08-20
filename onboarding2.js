document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected');
    });
});

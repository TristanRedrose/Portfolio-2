const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opaque');
            entry.target.classList.remove('left');
            entry.target.classList.remove('right');
        }
    });
});

const hiddenElements = document.querySelectorAll('.opaque');
hiddenElements.forEach((element) => observer.observe(element));
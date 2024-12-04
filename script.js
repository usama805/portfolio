document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        

        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active')); 
        this.classList.add('active');
    });
});


const hireButton = document.querySelector('button');

hireButton.addEventListener('click', function() {
    window.location.href = 'mailto:usama@example.com'; 
});
const viewProjectButton = document.querySelector('button a');

viewProjectButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(this.getAttribute('href'), '_blank'); 
});
const socialIcons = document.querySelectorAll('.icons i');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        console.log(`${icon.classList[1]} icon hovered`); 
    });
});



window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in'); 

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible'); 
        } else {
            element.classList.remove('visible'); 
        }
    });
});

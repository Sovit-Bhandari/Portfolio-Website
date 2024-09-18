document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('mobile');
    var navMenu = document.querySelector('.navigation-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        toggleButton.classList.toggle('is-active');
    });
});


const words = document.querySelector("#a-student");

const morewords = () => {
    setTimeout(() => {
        words.textContent = "a Student";
    },0);

    setTimeout(() => {
        words.textContent = "an Engineer";
    },5000);

    setTimeout(() => {
        words.textContent = "an Artist";
    },10000);

    setTimeout(() => {
        words.textContent = "a Designer";
    },15000);

}

morewords();
setInterval(morewords,15000);


document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.querySelector('#home');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 220,  // Adjust this value as needed
      behavior: 'smooth'
    });
  }
});

document.querySelector('a[href="#About-Me"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.querySelector('#About-Me');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 90,  // Adjust this value as needed
      behavior: 'smooth'
    });
  }
});

document.querySelector('a[href="#my-experience"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.querySelector('#my-experience');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 90,
      behavior: 'smooth'
    });
  }
});

document.querySelector('a[href="#my-projects"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.querySelector('#my-projects');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 90,  
      behavior: 'smooth'
    });
  }
});

document.querySelector('a[href="#contact-me"]').addEventListener('click', function(e) {
  e.preventDefault();
  const targetElement = document.querySelector('#contact-me');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 90,
      behavior: 'smooth'
    });
  }
});
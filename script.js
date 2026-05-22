const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 80;

    if(current < target){

      counter.innerText =
      `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

      if(target === 300){
        counter.innerText = target + '+';
      }

      if(target === 98){
        counter.innerText = target + '%';
      }

      if(target === 5){
        counter.innerText = target + '+';
      }

    }

  };

  updateCounter();

});
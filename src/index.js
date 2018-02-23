import css from './style.scss';
const { outerHeight: ScrollHeight } = window;
const Elements = document.querySelectorAll('.animate');

const checkElement = () => {
  Elements.forEach(Element => {
    Element.getBoundingClientRect().top <= ScrollHeight ?
      Element.classList.add('active') :
      Element.classList.remove('active');
  })
}

(function() {
  if(Elements.length > 0) {
    setTimeout(() => checkElement(), 200);
    window.addEventListener('scroll', () => checkElement());
  }
})();
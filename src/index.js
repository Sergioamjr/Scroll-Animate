import css from './style.scss';

class ScrollAnimate {
  constructor() {
    const { outerHeight } = window;

    this.A = [];
    this.H = outerHeight;
    this.D = 200;
    this.A = document.querySelectorAll('.animate');

    this.hasAnimate ();
  }

  hasAnimate () {
    if (this.A.length > 0) {
      window.setTimeout(() => { this.checkElement()}, this.D);
      window.addEventListener('scroll', () => this.checkElement());
    }
  }

  checkElement () {
    this.A.forEach(E => {
      E.getBoundingClientRect().top <= this.H ?
        E.classList.add('active') :
        E.classList.remove('active');
    })
  }
}

export default ScrollAnimate;
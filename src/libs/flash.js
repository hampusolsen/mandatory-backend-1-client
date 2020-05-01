import gsap from 'gsap';

export default function () {
   gsap.to('#root', {
      delay: .2,
      duration: .3,
      autoAlpha: 1
   });
};
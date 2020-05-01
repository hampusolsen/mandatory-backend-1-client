import gsap from 'gsap';
let animating;

export default function (node, cb) {
   if (animating) return;
   animating = true;

   gsap.to(node, {
      duration: .35,
      xPercent: -100,
      ease: 'power1.inOut',
      done: () => {
         animating = false;
         cb();
      }
   });
};
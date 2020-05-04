import gsap from 'gsap';

export default function (node) {
   gsap
      .timeline()
      .to(node, {
         duration: .2,
         autoAlpha: 1,
      })
      .from(node.children[0], {
         delay: -.1,
         duration: .3,
         autoAlpha: 0,
         y: 100,
      });
};
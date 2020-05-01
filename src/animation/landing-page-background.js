class Triangle {
   constructor(x, y, opposite) {
      this.x = x;
      this.y = y;
      this.opposite = opposite;
      this.timer = 0;
   }

   draw(ctx, l) {
      ctx.beginPath();

      if (!this.opposite) {
         ctx.clearRect(this.x, this.y, l, l);

         ctx.moveTo(this.x, this.y);
         ctx.lineTo(this.x + l, this.y);
         ctx.lineTo(this.x, this.y + l);
         ctx.closePath();

      } else {
         ctx.clearRect(this.x, this.y, l, l);

         ctx.moveTo(this.x, this.y);
         ctx.lineTo(this.x - l, this.y);
         ctx.lineTo(this.x, this.y - l);
         ctx.closePath();
      }

      const rng = Math.floor(Math.random() * 4);

      switch (rng) {
         case 0:
            ctx.fillStyle = '#4c4f6a';
            break;
         case 1:
            ctx.fillStyle = '#ffd24c';
            break;
         case 2:
            ctx.fillStyle = '#e16666';
            break;
         case 3:
            ctx.fillStyle = '#2a8ca1';
            break;
         default: throw TypeError;
      };

      ctx.fill();
   }
}

export default function (canvas) {
   const ctx = canvas.getContext('2d');
   const tris = [];
   const spacing = {
      x: window.innerWidth / 10,
      y: window.innerHeight / 10,
   };
   ctx.fillStyle = '#eaf6f3';

   for (let y = 100; y < window.innerHeight; y += spacing.y) {
      for (let x = 180 / 2; x < window.innerWidth; x += spacing.x) {
         if ((Math.random() * 12) <= 5) continue;

         const triangle = new Triangle(x, y, false);
         tris.push(triangle);

         const double = Math.floor(Math.random() * 5);
         if (double === 0) {
            const opposite = new Triangle(x + 16, y + 16, true);
            tris.push(opposite);
         };
      }
   }

   tris.forEach(tri => tri.draw(ctx, 12));
}
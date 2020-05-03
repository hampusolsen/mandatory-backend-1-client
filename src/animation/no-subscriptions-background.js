class Line {
   constructor(p1, p2, color, width) {
      this.p1 = p1;
      this.p2 = p2;
      this.color = color;
      this.width = width;
   };

   draw(ctx) {
      ctx.beginPath();

      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.width;
      ctx.lineCap = 'round';

      ctx.moveTo(this.p1.x, this.p1.y);
      ctx.lineTo(this.p2.x, this.p2.y);

      ctx.stroke();
   };
};

function getPoint2({ x, y }) {
   const dX = (Math.random() * 300) + 100;
   const dY = -(dX / 2);

   return {
      x: x + dX,
      y: y + dY,
   };
};

export default function drawBackground(canvas) {
   const ctx = canvas.getContext('2d');
   const lines = [];

   const amount = 20;
   const colors = [
      'rgba(245,245,245,0.6)',
      'rgba(162, 165, 190, 0.4)',
      'rgba(234, 246, 243, 0.4)',
      'rgba(200, 204, 235, 0.4)'
   ];

   for (let i = 0; i < amount; ++i) {
      const p1 = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
      const p2 = getPoint2(p1);
      const color = colors[Math.floor(Math.random() * 4)];
      const width = 50 + Math.random() * 100;

      const line = new Line(p1, p2, color, width);
      lines.push(line);
   };

   lines.forEach(line => line.draw(ctx));
};
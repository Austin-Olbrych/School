var car1, car2, car3;

function Car(name, color, over, down)
{
    this.name = name;
    this.age = 0;
    this.over = over;
    this.down = down;
    this.color = color;

    this.draw = function draw(context)
    {
        context.fillStyle = color;
        context.fillRect (this.over, this.down, 50, 20);
        context.fillRect(this.over + 8, this.down - 10, 32, 10);

        context.beginPath();
        context.arc(this.over, this.down + 20, 5, 0, 2 * Math.PI, false);
        context.fillStyle = 'black';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();

        context.beginPath();
        context.arc(this.over + 50, this.down + 20, 5, 0, 2 * Math.PI, false);
        context.fillStyle = 'black';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();

        context.fillStyle = 'black';
        context.fillRect(this.over + 50, this.down + 5, 5, 5);

        context.beginPath();
        context.moveTo(this.over + 55, this.down + 5);
        context.lineTo(this.over + 70, this.down + 35);
        context.lineTo(this.over + 270, this.down + 35);
        context.lineTo(this.over + 55, this.down + 9);
        context.fillStyle = '#ffff00';
        context.fill();

        context.fillStyle = 'black';
        context.fillRect(0, 47, 700, 15);
        context.fillRect(0, 107, 700, 15);
        context.fillRect(0, 167, 700, 15);

        context.fillStyle = 'black';
        context.fillRect(680, 0, 20, 40);

        context.fillStyle = 'red';
        context.beginPath();
        context.arc(690, 9, 5, 0, 2 * Math.PI, false);
        context.fill();

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(690, 20, 5, 0, 2 * Math.PI, false);
        context.fill();

        context.fillStyle = 'white';
        context.beginPath();
        context.arc(690, 32, 5, 0, 2 * Math.PI, false);
        context.fill();



    }


    this.move = function move()
    {
        this.age++;

        if(this.age > 2)
        {
          this.over += 5;
        }
        if (this.age == 15)
        {
            this.down -= 5;
        }
        if (this.age == 18)
        {
          this.down += 5;
          this.age = 0;
        }

        if ((this.over + 80) >= 700)
        {
          this.over = 620;
        }
    }
}

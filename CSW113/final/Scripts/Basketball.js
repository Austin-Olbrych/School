var fan1, fan2, fan3;

function Court(name, color, over, down)
{
    this.name = name;
    this.age = 0;
    this.over = over;
    this.down = down;
    this.color = color;

    this.draw = function draw(context)
    {
        context.fillStyle = "rgb(227,125,49)";
        context.fillRect (0, 200, 800, 400);

        context.fillStyle = "rgb(167,159,153)";
        context.fillRect (0, 100, 800, 150);

        context.beginPath();
        //Center Line
        context.moveTo(400,250);
        context.lineTo(400,600);
        //Left Box
        context.moveTo(0,388);
        context.lineTo(100,388);
        context.moveTo(0,463);
        context.lineTo(100,463);
        context.moveTo(100,388);
        context.lineTo(100,463);
        //Right Box
        context.moveTo(800,388);
        context.lineTo(700,388);
        context.moveTo(800,463);
        context.lineTo(700,463);
        context.moveTo(700,388);
        context.lineTo(700,463);
        context.lineWidth = 2;
        context.strokeStyle = 'black';
        context.stroke();
        //Center Circle
        context.beginPath();
        context.arc(400,425,100,0,2*Math.PI);
        context.lineWidth = 2;
        context.stroke();
        //Left Half Circle
        context.beginPath();
        context.arc(100,425,37,1.5*Math.PI,0.5*Math.PI);
        context.lineWidth = 2;
        context.stroke();
        //Right Half Circle
        context.beginPath();
        context.arc(700,425,37,0.5*Math.PI,1.5*Math.PI);
        context.lineWidth = 2;
        context.stroke();
        //Baskets
        context.beginPath();
        context.arc(25,425,15,0,2*Math.PI);
        context.lineWidth = 5;
        context.stroke();
        context.beginPath();
        context.arc(775,425,15,0,2*Math.PI);
        context.lineWidth = 5;
        context.stroke();
    }

    this.move = function move()
    {

    }
}

function Fan(name, color, over, down)
{
    this.name = name;
    this.age = 0;
    this.over = over;
    this.down = down;
    this.color = color;

    this.draw = function draw(context)
    {
      context.beginPath()
      //Torso
      context.moveTo(this.over,this.down);
      context.lineTo(this.over,this.down + 50);
      //Left Leg
      if (this.age <= 15)
      {
        context.moveTo(this.over,this.down + 50);
        context.lineTo(this.over - 10, this.down + 75);
      }
      else
      {
        context.moveTo(this.over,this.down + 50);
        context.lineTo(this.over - 20, this.down + 55);
      }
      //Right Leg
      if (this.age <= 15)
      {
        context.moveTo(this.over,this.down + 50);
        context.lineTo(this.over + 10, this.down + 75);
      }
      else
      {
        context.moveTo(this.over,this.down + 50);
        context.lineTo(this.over + 20, this.down + 55);
      }
      //Left Arm
      if (this.age <= 15)
      {
        context.moveTo(this.over,this.down + 25);
        context.lineTo(this.over - 25, this.down + 15);
      }
      else
      {
        context.moveTo(this.over,this.down + 25);
        context.lineTo(this.over - 15, this.down - 15);
      }
      //Right Arm
      if (this.age <= 15)
      {
        context.moveTo(this.over,this.down + 25);
        context.lineTo(this.over + 25, this.down + 15);
      }
      else
      {
        context.moveTo(this.over,this.down + 25);
        context.lineTo(this.over + 15, this.down - 15);
      }
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
      //Head
      context.beginPath();
      context.arc(this.over,this.down,10,0,2*Math.PI);
      context.lineWidth = 2;
      context.fillStyle = this.color;
      context.fill();

    }

    this.move = function move()
    {
      this.age ++;

      if (this.age == 15)
      {
          this.down -= 10;
      }
      if (this.age == 18)
      {
        this.down += 10;
        this.age = 0;
      }
    }
}

function Player(name, color, over, down)
{
    this.name = name;
    this.age = 0;
    this.over = over;
    this.down = down;
    this.color = color;

    this.draw =function draw(context)
    {
      context.beginPath();
      //Torso
      context.moveTo(this.over,this.down);
      context.lineTo(this.over,this.down + 80);
      //Left Arm
      if (this.age <= 10)
      {
        context.moveTo(this.over,this.down + 30);
        context.lineTo(this.over - 40, this.down + 50);
      }
      else
      {
        context.moveTo(this.over,this.down + 30);
        context.lineTo(this.over - 40, this.down + 40);
      }

      //Right Arm
      context.moveTo(this.over,this.down + 30);
      context.lineTo(this.over + 40, this.down - 20);
      //Left Leg
      if (this.age <= 15)
      {
        context.moveTo(this.over, this.down + 80);
        context.lineTo(this.over - 30, this.down + 120);
      }
      else{
        context.moveTo(this.over, this.down + 80);
        context.lineTo(this.over - 40, this.down + 100);
      }
      //Right Leg
      if (this.age <= 15)
      {
        context.moveTo(this.over, this.down + 80);
        context.lineTo(this.over + 40, this.down + 100);
      }
      else
      {
        context.moveTo(this.over, this.down + 80);
        context.lineTo(this.over + 30, this.down + 120);
      }

      context.lineWidth = 4;
      context.strokeStyle = 'black';
      context.stroke();
      //Head
      context.beginPath();
      context.arc(this.over,this.down,15,0,2*Math.PI);
      context.lineWidth = 2;
      context.fillStyle = this.color;
      context.fill();
      //Ball
      context.beginPath();
      context.arc(this.over + 50,this.down - 25,10,0,2*Math.PI);
      context.lineWidth = 2;
      context.fillStyle = 'orange';
      context.fill();
    }

    this.move = function move()
    {
      this.over += 5;
      this.age ++;
      if (this.over >= 725)
      {
        this.over = 725;
        this.age = 0;
      }
      if (this.age > 25)
      {
        this.age = 0;
      }
    }
}

class App
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext("2d");
        this.DrawHouse(100,100,g);
        this.DrawXmasTree(300,100,g);
    }

    DrawXmasTree(x,y,g)
        {
            g.beginPath();
            g.fillStyle = "#325c38";
            g.moveTo(x + 10,y + 75);
            g.lineTo(x + 15, y + 120);
            g.lineTo(x - 15, y + 120);
            g.lineTo(x - 10,y + 75);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#9660b5";
            g.moveTo(x,y);
            g.lineTo(x + 25, y + 50);
            g.lineTo(x - 25, y + 50);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#b5af60";
            g.moveTo(x,y + 25);
            g.lineTo(x + 25, y + 75);
            g.lineTo(x - 25, y + 75);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#820d5f";
            g.moveTo(x,y + 50);
            g.lineTo(x + 25, y + 100);
            g.lineTo(x - 25, y + 100);
            g.closePath();
            g.stroke();
            g.fill();

        }
    
    DrawHouse(x,y,g)
       {

        // Roof
        g.beginPath()
        g.fillStyle = "#30292e";
        g.moveTo(x,y);
        g.lineTo(x - 10,y + 20);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 40,y + 10);
        g.closePath();
        g.stroke();
        g.fill()
        
        // Side Roof
        g.beginPath()
        g.fillStyle = "#30292e";
        g.moveTo(x + 40, y + 10);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 50,y + 20);
        g.closePath();
        g.stroke();
        g.fill()

        // Wall
        g.beginPath()
        g.fillStyle = "#3a0d6e";
        g.moveTo(x - 10, y + 20);
        g.lineTo(x + -10, y + 40); 
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 30, y + 30);
        g.closePath();
        g.stroke();
        g.fill()
 
        // Side Wall
        g.beginPath()
        g.fillStyle = "#62a6a1"
        g.moveTo(x + 30, y + 30);
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 50, y + 40);
        g.lineTo(x + 50, y + 20);
        g.closePath();
        g.stroke();
        g.fill()

    }
}

let app = new App();
app.runApplication();
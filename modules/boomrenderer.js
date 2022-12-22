class TreeRender
{
    Draw(x,y,g)
        {
            g.beginPath();
            g.fillStyle = "#b03354";
            g.moveTo(x + 10,y + 75);
            g.lineTo(x + 15, y + 120);
            g.lineTo(x - 15, y + 120);
            g.lineTo(x - 10,y + 75);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#4db6c4";
            g.moveTo(x,y);
            g.lineTo(x + 25, y + 50);
            g.lineTo(x - 25, y + 50);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#9c496d";
            g.moveTo(x,y + 25);
            g.lineTo(x + 25, y + 75);
            g.lineTo(x - 25, y + 75);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#8c9c49";
            g.moveTo(x,y + 50);
            g.lineTo(x + 25, y + 100);
            g.lineTo(x - 25, y + 100);
            g.closePath();
            g.stroke();
            g.fill();

        }
}

class TreeVariantRender
{
    Draw(x,y,g)
        {
            g.beginPath();
            g.fillStyle = "#272b11";
            g.moveTo(x + 10,y);
            g.lineTo(x + 15, y + 120);
            g.lineTo(x - 15, y + 120);
            g.lineTo(x - 10,y);
            g.closePath();
            g.stroke();
            g.fill();

            g.beginPath();
            g.fillStyle = "#a8bfac";
            g.moveTo(x- 25,y);
            g.lineTo(x + 25,y)
            g.lineTo(x + 25, y + 50);
            g.lineTo(x - 25, y + 50);
            g.closePath();
            g.stroke();
            g.fill();

        }
}

export let Tree_Render = new TreeRender();
export let Tree_V_Render = new TreeVariantRender();

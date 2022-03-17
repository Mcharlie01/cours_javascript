showGrid(50);
/*200 corrspond à 200ms pour la vitesse de l'animation*/
setSpeed(200);
width(3)


/*carré de 100
goto(50, -50);
forward(100);
left(90);
forward(100);
left(90);
forward(100);
left(90);
forward(100);
left(90);*/

/*le pentagone, pas centré
goto(-50, -50);
left(72);
forward(100);
left(72);
forward(100);
left(72);
forward(100);
left(72);
forward(100);
left(72);
forward(100);*/

/*bateau
goto(50, -50);
right(45);
forward(53);
left(134);
forward(200);
left(134)
forward(53);
left(45);
forward(115);

goto(88, 14);
left(130);
forward(130);
left(142);
forward(100);
left(90);
forward(60);*/

/*fonction pour faire un carré
function carre()
{
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
    left(90);
}

carre();
goto(100, 0);
carre();
goto(0, -100);
carre();
goto(100, -100);
carre();*/

/*triangle
left(120);
forward(100);
left(120);
forward(100);
left(120);
forward(100);*/

/*function triangle()
{
    left(120);
    forward(100);
    left(120);
    forward(100);
    left(120);
    forward(100);
}

triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();
left(60);
triangle();*/

/*le poisson avec des côtés à 40, et dans angles isocèles à 120*/


/*le carre
goto(50, -50);
left(135);
forward(40);
left(90);
forward(40);
left(90);
forward(40);
left(90);
forward(40);
left(90);
forward(80);
right(120);
forward(40);
right(120);
forward(40);*/


/*le triangle
    left(120);
    forward(40);
    left(120);
    forward(40);
    left(120);
    forward(40);*/

/*function fish()
{
    goto(50, -50);
left(135);
forward(40);
left(90);
forward(40);
left(90);
forward(40);
left(90);
forward(40);
left(90);
forward(80);
right(120);
forward(40);
right(120);
forward(40);
}

fish();*/


/*function triangle()
{
    forward(80);
    right(120);
    forward(40);
    right(120);
    forward(40);
}

function carre()
{
    left(135);
    forward(40);
    left(90);
    forward(40);
    left(90);
    forward(40);
    left(90);
    forward(40);
    left(90);
}

function poisson()
{
    carre();
    triangle();
}

poisson()*/


function carre(taille)
/*la ligne au dessus s'appelle la signature de la fonction*/
{
    forward(taille);
    left(90);
    forward(taille);
    left(90);
    forward(taille);
    left(90);
    forward(taille);
    left(90);
}

function triangle(taille)
{
    forward(taille);
    right(120);
    forward(taille);
    right(120);
    forward(taille);
}

function fleche(taille)
{
    carre(taille);
    triangle(taille);
}

fleche(100)
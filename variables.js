
alert("test");

console.log("#");

let essai=10;
essai-=2;

console.log(essai)

let compteur = 0;
compteur++;

let premierTableau = [];

let artistProfile = 
{
    name: "Tao Perkington",
    age: 27,
    available: true
};



let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet

console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }


let UserLoggedIn = false;
if (UserLoggedIn) {
   console.log("Utilisateur connecté!");
} else {
   console.log("Alerte, intrus!");
}

const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
   console.log("Passager embarqué !");
}

console.log(numberOfPassengers);

/*exercice 1*/
/*créer une fonction prend comme argument un nombre « n » et qui
affiche un triangle de base « n » dans la console*/



let n = 0;

for(let i = 0; i <8 ; i++) 
{
  n++ ; 
}

console.log(n);

let exo1 = true ;
if (exo1)
{
    console.log("#");
}
else{
    console.log("non");
}

/*function htag (n)
{
    let h = "";
    h+="#";
    h+="#";
    h+="#";
    console.log(h);


}

htag(7);*/

function htag (n)
{
    let h = "";
    /*h+="#";
    console.log(h);*/

    for (let i = 0; i <n; i++) {
        h+="#"
        console.log(h);
    }

}

htag(15)

/*exercice 2
utiliser le modulo*/






/*créer un programme qui affiche tous les nombres de 1 à 100*/


/*cette fonction retroune 8 mais pas la liste de nombres que je veux*/
let n = 0;

for (let i = 0; i < 8; i++) {
  n++;
}

console.log(n)

/*essayer de faire une liste de 1 à 100 ici*/
/*function htag (n)
{
    let h = 0;
   

    for (let i = 0; i <n; i++) {
        h+=1
        console.log(h);
    }

}

htag(100)*/

function htag(n) {


  for (let i = 1; i <= n; i++) {
    /*console.log(i);*/
    if (((i % 3) == 0) && ((i % 5) == 0)) {
      console.log("Fizz, Fuzz");
    }
    else if ((i % 3) == 0) {
      console.log("Fizz");
    }


    else if ((i % 5) == 0) {
      console.log("Fuzz");
    }
    else { console.log(i) }
  }

}

htag(100)

function exo2(n) {
  let tab = []
  for (let i = 1; i <= 100; i++) {
    if (((i % 3) == 0) || ((i % 5) == 0)) {
      if (((i % 3) == 0) && !((i % 5) == 0)) {
        tab.push('fizz');
      }
      if (!((i % 3) == 0) && ((i % 5) == 0)) {
        tab.push('fuzz');
      }
      if (((i % 3) == 0) && ((i % 5) == 0)) {
        tab.push('fizz -fuzz');
      }
    } else {
      tab.push(i);
    }
  }
  console.log(tab);
}

/*exo2(100);

function exo2b(n) {
  let tab = []
  for (let i = 1; i <= 100; i++) {
    a=i%3;
    b=i%5;
    switch (a || b)
    {
      case  0:
        tab.push('fizz');
      break;
    default:
      tab.push(i);
  }

}
console.log(tab);
}

exo2b(100);*/

function listeNombreB(n) {
  let tab = [];
  let comparaison = [];
  for (let i = 1; i <= n; i++) {
      comparaison.push((i % 3 == 0));
      comparaison.push((i % 5 == 0));
      switch (comparaison.toString()) {
          case [true,false].toString():
              tab.push('Fizz');
              break;
          case [false,true].toString():
              tab.push('Fuzz');
              break;

          case [true,true].toString():
              tab.push('Fiuzz');
              break;
          default:
              tab.push(i);
      }
      comparaison = [];
  }
  console.log(tab);
  return tab;
}

// // ## Exo 

// // ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

// // ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// // ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.


var vieille_dame = {
    age: "82",
    nom: {
nom : "Mamie",
prenom : "Jane",
    },
    moral: "mal",
    objet: "canne",
    parler : function () {
      if (this.moral == "mal") {
        console.log("Vous me dérangez et le frappe avec sa " + this.objet);
        
      }
      else if (this.moral == "bien") {
        console.log("bonjour");
        
      }
      
    }
}

vieille_dame.parler();


// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne

// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.


let vieille_dame = {
    age: 180000,
    nom:{
        prenom:"Gertrude",
        nom_de_famille:"Cabana"
    },
    moral:"mal",
    objet:"AK-47 Golden edition 1999 Albania #DORIAN",
    parler(){
        switch (this.moral) {
            case "mal":
                alert(`Vous me dérangez et le frappe avec son ${this.objet}`)
                break;
            case "bien":
                alert(`Bonjour, ${vieil_homme.nom}`)
                break;
            default:
                break;
        }
    }
}
let vieil_homme = {
    nom:"ALBERT",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}
vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()
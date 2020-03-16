//Lev1_1_js-vertiefung_objects_intro_europaichen-union
//-----------------------------------------------
let europeanUnion = {
    Belgien: "(BE)",
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Luxemburg: "(LUX)",
    Niederlande: "(NL)",
    BeneLuxUnion: function () {
        console.log(this.Belgien + this.Niederlande + this.Luxemburg)
    }
}
console.log(europeanUnion)
europeanUnion.BeneLuxUnion()

delete europeanUnion.Niederlande


// Lev1_2_js-vertiefung_objects_function_alert
//-----------------------------------------------
let person = {
    name: "Ariane",
    alter: 46,
    sagNameAlter: function () {
        alert(this.name + this.alter)
    }
}
console.log(person.sagNameAlter)
console.log(person.name)
console.log(person.alter)

//FRAGE: Welchen Fehler habe ich bei dem Befehl "alert"?

//Lev1_4
//-----------------------------------------------
var unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: ["Gipsy", "Nala", "Dinky"]
    },
    {
        tiertyp: "Hunde",
        names: ["Knöpfchen", "Pinselchen", "Droopy"]
    }
];

console.log(unsereHaustiere[0].names[1])
console.log(unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names)



//Lev1-5
//--------------------------------------------------
var unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere schublade"]);
console.log(unserLager.schreibtisch.schublade);

unserLager.schreibtisch.schublade = "Locher";
console.log(unserLager);
console.log(Object.values(unserLager));


// Zusatz zu Übung nach Frage von Flo
unserLager.schreibtisch.schublade = "Locher";
console.log(unserLager);
console.log(Object.values(unserLager));
let infoTisch = { name: "tisch from ikea", price: 59.99 }
unserLager.tisch = infoTisch;
console.log(unserLager)


//Lev1-6
//--------------------------------------------------





//Lev1-7
//--------------------------------------------------
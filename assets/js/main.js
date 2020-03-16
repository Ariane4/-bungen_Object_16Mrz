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
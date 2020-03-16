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
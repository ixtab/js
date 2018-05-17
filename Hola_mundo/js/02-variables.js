function Pais (pais, continente){
	this.pais = pais;
	this.continente = continente;
	this.frase = "El pais llamado " + pais + " está en " + continente + ".";
}

var alemania = new Pais("Alemania", "Europa");
var francia =  new Pais ("Francia", "Europa");

console.log(alemania.frase);
console.log (alemania.valueOf());
console.log(francia);

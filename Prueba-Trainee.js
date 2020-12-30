class Auto{
	constructor(marca, modelo, puertas, precio){
		this.Marca = marca;
		this.Modelo = modelo;
		this.Puertas = puertas;
		this.Precio = "$" + precio;
	}
}

class Moto{
	constructor(marca, modelo, cilindrada, precio){
		this.Marca = marca;
		this.Modelo = modelo;
		this.Cilindrada = cilindrada;
		this.Precio = "$" + precio;
	}
}


var Peugeot206 = new Auto("Peugeot", 206, 4, 200000.00);
var YamahaYBR = new Moto("Yamaha", "YBR", "160cc", 80500.50);
var Peugeot208 = new Auto("Peugeot", 208, 5, 250000);
var HondaTitan = new Moto("Honda", "Titan", "125cc", 60000);

var stock = [Peugeot206, HondaTitan, Peugeot208, YamahaYBR]


function enlistarTodos(){
	for(var i=0; i<stock.length; i++){
		if(stock[i] instanceof Auto){
			console.log("Marca: ", stock[i].Marca, " // ", "Modelo: ", stock[i].Modelo, " // ", "Puertas: ", stock[i].Puertas, " // ", "Precio: ", stock[i].Precio)
		} else {
			console.log("Marca: ", stock[i].Marca, " // ", "Modelo: ", stock[i].Modelo, " // ", "Cilindrada: ", stock[i].Cilindrada, " // ", "Precio: ", stock[i].Precio)
		}
	}
};


function devolverCaro(arr){
	var masCaro = arr[0];
	for (var i = 1; i<arr.length; i++) {
		if(parseFloat(arr[i].Precio.slice(1)) > parseFloat(masCaro.Precio.slice(1))){
			masCaro = arr[i]
		}
	}
	console.log("Vehiculo mas caro: ", masCaro.Marca, masCaro.Modelo);
}


function devolverBarato(arr){
	var masBarato = arr[0];
	for (var i = 1; i<arr.length; i++) {
		if(parseFloat(arr[i].Precio.slice(1)) < parseFloat(masBarato.Precio.slice(1))){
			masBarato = arr[i]
		}
	}
	console.log("Vehiculo mas barato: ", masBarato.Marca, masBarato.Modelo);
}


function contieneCaracter(arr, letra){
	var reg = new RegExp(letra);
	for (var i = 0; i<arr.length; i++){
		if(reg.test(arr[i].Modelo)){
			console.log("Vehiculo que contiene " +letra+ " en su modelo: ", arr[i].Marca, arr[i].Modelo)
		}
	}
}


function ordenarMayorAMenor(arr){
	var ordenadoMenAMay = arr.sort((a, b)=>{
		return parseFloat(a.Precio.slice(1)) - parseFloat(b.Precio.slice(1))
	})
	console.log("Vehiculos ordenados por precio de mayor a menor: ")
	for(var i=ordenadoMenAMay.length-1; i>=0; i--){
		console.log(ordenadoMenAMay[i].Marca, ordenadoMenAMay[i]. Modelo);
	}
}



enlistarTodos();
console.log("======================================================================");
devolverCaro(stock);
devolverBarato(stock);
contieneCaracter(stock, "20");
contieneCaracter(stock, "Y");
console.log("======================================================================");
ordenarMayorAMenor(stock);

let palabra= document.getElementById("input-texto");
	const form = document.getElementById("codigo");
	form.addEventListener("submit", function(event){
			event.preventDefault();			}
	)

	function mostrarTexto(texto){
		
		document.querySelector("#msg").value= texto;
		
	}

 	function encriptar(){
 			let npalabra = palabra.value;
 			const expreciones = /[A-Záéíóú´]/g
 			if(expreciones.test(npalabra)){
 				alert("Error los datos deben ser solo letras minusculas y sin acento");
 			}	
 			else{
 			npalabra = npalabra.replace(/e/g , "enter");

 			npalabra = npalabra.replace(/i/g , "imes"); 
 		 	
 		 	npalabra = npalabra.replace(/a/g, "ai");

 		 	npalabra = npalabra.replace(/o/g , "ober");

 		 	npalabra = npalabra.replace(/u/g , "ufat"); 
 		
 			mostrarTexto(npalabra);		}
 	}

 	function desencriptar(){
 			let npalabra = palabra.value;
 			npalabra = npalabra.replace(/enter/g , "e");
 			
 			npalabra = npalabra.replace(/imes/g , "i");
 			
 			npalabra = npalabra.replace(/ai/g , "a");

 			npalabra = npalabra.replace(/ober/g , "o");		

 			npalabra = npalabra.replace(/ufat/g , "u");
 		
 		mostrarTexto(npalabra);
	}
	
	function copiar(){
		var textoACopiar = document.getElementById('msg');
			textoACopiar.select();
			document.execCommand('copy');
	}

 	var encript = document.getElementById("btn-encriptar");
 	encript.onclick = encriptar;

 	var	desencript = document.getElementById("btn-desencriptar");
 	desencript.onclick = desencriptar;
 	
 	var copia = document.getElementById("btn-copy");
 	copia.onclick = copiar;
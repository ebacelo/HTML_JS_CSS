	var txt1;  // = '<span style="color: #ff0000;">';
	var txt2 = '</span>';
	var txt = document.body.innerHTML;

	function cambiarColor(palabra, hexColor) {
	  txt1 = '<span style="color: ' + hexColor + ';">';
	  document.body.innerHTML = cambiarColorPalabraTexto(txt, palabra);  //semana
	}
	
	function insert(str, index, value) {
	  return str.substr(0, index) + value + str.substr(index);
	}
	
	//Función recursiva para localizar una palabra en un texto y aplicarle los estilos definidos
	//en txt1 y txt2
	function cambiarColorPalabraTexto(texto, palabra) {
	  var x0, x1;
	  var _texto = "";
	  
	  if ((x0 = texto.indexOf(palabra)) >= 0) {
		x1 = x0 + (palabra.length);
		texto = insert(texto, x1, txt2);
		texto = insert(texto, x0, txt1);
		return texto.substring(0, x0 + palabra.length + txt1.length + txt2.length) + cambiarColorPalabraTexto(texto.substring(x0 + palabra.length + txt1.length + txt2.length, texto.length), palabra);
		
	  }
	  else {
		return texto;
	  }
	}

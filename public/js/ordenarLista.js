// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Se ingresa una lista de nombres (la lista termina
// cuando se ingresa un nombre en blanco) no permitiendo
// ingresar repetidos y luego se ordena y muestra
export function ordenalista() {
	var aux, cant, i, j, nombre, pos_menor, se_repite;
	var lista = new Array(200);
	document.write("Ingrese los nombres (enter en blanco para terminar):",'<BR/>');
	// leer la lista
	cant = 0;
	nombre = prompt();
	while (nombre!="") {
		lista[cant] = nombre;
		cant = cant+1;
		// leer un nombre y ver que no este ya en la lista
		do {
			nombre = prompt();
			se_repite = false;
			for (i=0;i<=cant-1;i++) {
				if (nombre==lista[i]) {
					se_repite = true;
				}
			}
		} while (!(!se_repite));
	}
	// ordenar
	for (i=0;i<=cant-2;i++) {
		// busca el menor entre i y cant
		pos_menor = i;
		for (j=i+1;j<=cant-1;j++) {
			if (lista[j]<lista[pos_menor]) {
				pos_menor = j;
			}
		}
		// intercambia el que estaba en i con el menor que encontro
		aux = lista[i];
		lista[i] = lista[pos_menor];
		lista[pos_menor] = aux;
	}
	// mostrar como queda la lista
	document.write("La lista ordenada es:",'<BR/>');
	for (i=0;i<=cant-1;i++) {
		document.write("   ",lista[i],'<BR/>');
	}
}
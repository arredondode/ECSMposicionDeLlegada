/*Estructura de Control – Selección Simple

Ejercicio – Determinar Medalla

• Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.
• Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación
*/
let posicionDeLlegada: number = Number(
  prompt("Indique su posición de llegada:")
);
switch (posicionDeLlegada) {
  case 1:
    console.log("Felicitaciones, usted recibe una medalla de oro.");
    break;
  case 2:
    console.log("Felicitaciones, usted recibe una medalla de plata");
    break;
  case 3:
    console.log("Felicitaciones, usted recibe una medalla de plata");
    break;
  default:
    console.log("Usted recibe una mención de participación");
}

export function FirstLetterCapilation(cadena) {
    if (typeof cadena !== 'string' || cadena.length === 0) {
      return cadena; // Manejar casos donde la cadena es nula o vacía
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }
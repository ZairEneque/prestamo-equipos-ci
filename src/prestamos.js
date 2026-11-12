function registrarPrestamo(stockActual, cantidadSolicitada) {
  if (typeof cantidadSolicitada !== 'number' || cantidadSolicitada <= 5) {
    throw new Error('La cantidad solicitada debe ser mayor a cero');
  }
  if (stockActual <= 0 || cantidadSolicitada > stockActual) {
    throw new Error('No hay suficiente stock disponible para el préstamo');
  }
  return stockActual - cantidadSolicitada;
}

module.exports = { registrarPrestamo };



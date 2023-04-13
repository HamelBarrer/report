export const getDateNow = () => {
  return new Date().toISOString().slice(0, 10);
};

export const getDate = (dateFormat: string) => {
  return new Date(dateFormat).toLocaleString('default', { hour12: true });
};

export const getMaxDateMonth = (dateNow: Date) => {
  const fecha = new Date(dateNow);
  const diaSeleccionado = fecha.getDate();
  const mesSeleccionado = fecha.getMonth();
  const anioSeleccionado = fecha.getFullYear();
  const fechaMaxima = new Date(
    anioSeleccionado,
    mesSeleccionado + 1,
    diaSeleccionado
  );
  return fechaMaxima;
};

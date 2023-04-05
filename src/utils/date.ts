export const getDateNow = () => {
  return new Date().toISOString().slice(0, 10);
};

export const getDate = (dateFormat: string) => {
  return new Date(dateFormat).toLocaleString('default', { hour12: true });
};

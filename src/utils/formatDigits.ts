export const formatToThreeDigits = (id: number | string) => {
  return String(id).padStart(3, '0');
};

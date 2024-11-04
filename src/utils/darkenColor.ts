export const darkenColor = (color: string, amount: number) => {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

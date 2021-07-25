export const padLeft = (value: number, length = 2): string => {
  return value.toString().padStart(length, '0');
};

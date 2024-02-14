export function trimString(string: string, newLength: number) {
  const trimmed = string.slice(0, newLength);
  return trimmed;
}

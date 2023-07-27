export function formatPropsKey(key: string) {
  const clean = key.replace(/[\s-_]/g, '');
  const lowercase = clean.toLowerCase();
  return lowercase;
}

export default function (date: string): string {
  const splittedDate = String(date).split('T')[0];
  const [year, month, day] = splittedDate.split('-');
  return `${day}/${month}/${year}`;
}

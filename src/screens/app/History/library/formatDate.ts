function switchMonth(month: string): string {
  switch (month) {
    case '01':
      return 'janeiro';
    case '02':
      return 'fevereiro';
    case '03':
      return 'março';
    case '04':
      return 'abril';
    case '05':
      return 'maio';
    case '06':
      return 'junho';
    case '07':
      return 'julho';
    case '08':
      return 'agosto';
    case '09':
      return 'setembro';
    case '10':
      return 'outubro';
    case '11':
      return 'novembro';
    default:
      return 'dezembro';
  }
}

export function getDate(date: string): string {
  const splittedDate = date.split('T')[0];
  const [year, month, day] = splittedDate.split('-');
  return `${day} ${switchMonth(month)} ${year}`;
}

export function getHour(date: string): string {
  const splittedDate = date.split('T')[1];
  const [hour, minutes, _seconds] = splittedDate.split(':');
  return `${hour}:${minutes}`;
}

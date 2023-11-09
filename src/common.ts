
export function replaceUnderscore(initialStr: string,replaceChar:string = ' '): string {
    return initialStr.replace('_',replaceChar);
}

export function weeksSince(date: Date): number {
  const today: Date = new Date();
  const InDays: number = (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
  const weeks: number = Math.floor(InDays / 7);

  return weeks;
}

export function getDayWeek(date: Date): [string, number] {
  const dayOfWeek = date.getDay();
  const dayNames = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];

  return [dayNames[dayOfWeek],dayOfWeek];
}
export function getDate(date: Date):string { 
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

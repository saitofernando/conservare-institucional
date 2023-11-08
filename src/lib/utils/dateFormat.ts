import { formatInTimeZone } from "date-fns-tz";
import  ptBR  from "date-fns/locale/pt-BR/index.js";

const dateFormat = (
  date: Date | string,
  format: string = `dd 'de' MMMM 'de' yyyy`,
): string => {
  return formatInTimeZone(date, "America/Boa_Vista", format, { locale: ptBR });
};

export default dateFormat;

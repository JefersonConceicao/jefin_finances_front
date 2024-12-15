import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formataNumerosEmReal = valor => {
  return Intl.NumberFormat('pt-BR', {
      'style': 'currency',
      'currency': 'BRL'
  }).format(valor)
}

export const converteDataAmericanaParaBrasileira = dataAmericanaString => {
  if(!dataAmericanaString) return;
  const dataAmericana = new Date(dataAmericanaString.replace(' ', 'T'));
  const formattedDate = format(dataAmericana, 'dd/MM/yyyy HH:mm:ss', { locale: ptBR });

  return formattedDate;
}

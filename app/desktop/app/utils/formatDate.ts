export default function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("pt-BR");
}

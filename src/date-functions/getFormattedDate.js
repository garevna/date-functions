export const getFormattedDate = (date) => {
  const d = typeof date === 'string' ? new Date(Date.parse(date)) : typeof date === 'number' ? new Date(date) : date
  return d.toDateString()
}

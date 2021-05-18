export const getFormattedISODate = (date) => {
  const d = typeof date === 'string' ? new Date(Date.parse(date)) : typeof date === 'number' ? new Date(date) : date
  return d.toISOString().slice(0, 10)
}

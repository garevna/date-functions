export const getWeekDay = (date) => {
  const d = typeof date === 'number' ? new Date(date) : typeof date === 'string' ? new Date(Date.parse(date)) : date
  return d.getDay() ? d.getDay() : 7
}

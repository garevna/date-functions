import { initialDate, weekDuration } from './initial'

export const getWeekStartDateByWeekNumber = (weekNumber, format = 'ISO') => {
  const d = new Date(initialDate + weekNumber * weekDuration)
  return format === 'number' ? Date.parse(d) : format === 'date' ? d.toDateString() : d.toISOString().slice(0, 10)
}

import { initialDate, weekDuration } from './initial'

export const getWeekStartDateByWeekNumber = (weekNumber, format = 'ISO') => {
  const d = initialDate + weekNumber * weekDuration
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

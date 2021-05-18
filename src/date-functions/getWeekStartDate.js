import { initialDate, weekDuration } from './initial'
import { getWeekNumber } from './getWeekNumber'

export const getWeekStartDate = (date, format = 'ISO') => {
  const d = initialDate + getWeekNumber(date) * weekDuration
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

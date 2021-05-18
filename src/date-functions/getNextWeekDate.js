import { weekDuration } from './initial'

export const getNextWeekDate = (date, format = 'ISO') => {
  const d = typeof date === 'number' ? date : Date.parse(date) + weekDuration
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

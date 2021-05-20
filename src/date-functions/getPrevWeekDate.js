import { weekDuration } from './initial'

export const getPrevWeekDate = (date, format = 'ISO') => {
  const d = new Date(typeof date === 'number' ? date : Date.parse(date) - weekDuration)
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

import { dayDuration } from './initial'
import { getWeekStartDate } from './getWeekStartDate'

export const getWeekEndDate = (date, format = 'ISO') => {
  const d = new Date(Date.parse(getWeekStartDate(date)) + 6 * dayDuration)
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

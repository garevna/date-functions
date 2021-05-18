import {
  initialDate,
  weekDuration,
  dayDuration
} from './initial'

export const getWeekEndDateByWeekNumber = (weekNumber, format = 'ISO') => {
  const d = initialDate + weekNumber * weekDuration + 6 * dayDuration
  return format === 'number' ? d : format === 'date' ? new Date(d).toDateString() : new Date(d).toISOString().slice(0, 10)
}

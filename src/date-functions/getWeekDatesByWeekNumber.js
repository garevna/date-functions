import { initialDate, weekDuration } from './initial'

export const getWeekDatesByWeekNumber = (weekNumber, format = 'ISO') => {
  const result = []

  for (let day = 0; day < 7; day++) {
    const d = new Date(initialDate + weekNumber * weekDuration + dayDuration * day)
    result.push(format === 'date' ? d.toDateString() : d.toISOString().slice(0, 10))
  }

  return result
}

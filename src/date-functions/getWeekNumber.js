import { initialDate, weekDuration } from './initial'
import { getWeekDay } from './getWeekDay'

export const getWeekNumber = (date) => {
  const ms = typeof date === 'number' ? date : Date.parse(date)
  const d = new Date(ms)

  return Math.floor((ms - initialDate) / weekDuration) + (getWeekDay(d) === 1 ? 1 : 0)
}

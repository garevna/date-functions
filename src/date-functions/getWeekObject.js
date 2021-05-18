import { getWeekNumber } from './getWeekNumber'
import { getWeekStartDate } from './getWeekStartDate'
import { getWeekEndDate } from './getWeekEndDate'

export const getWeekObject = (date) => ({
  number: getWeekNumber(date),
  start: getWeekStartDate(date).toISOString().slice(0, 10),
  end: getWeekEndDate(date).toISOString().slice(0, 10)
})

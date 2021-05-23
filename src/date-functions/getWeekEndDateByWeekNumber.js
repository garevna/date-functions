import {
  initialDate,
  weekDuration,
  dayDuration
} from './initial'

import { getWeekStartDateByWeekNumber } from './getWeekStartDateByWeekNumber'

export const getWeekEndDateByWeekNumber = (weekNumber, format = 'ISO') => {
  const d = new Date(Date.parse(getWeekStartDateByWeekNumber(weekNumber)) + 6 * dayDuration)
  return format === 'number' ? Date.parse(d) : format === 'date' ? d.toDateString() : d.toISOString().slice(0, 10)
}

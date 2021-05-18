import { dayDuration } from './initial'
import { getWeekStartDate } from './getWeekStartDate'

export const getWeekEndDate = date => new Date(Date.parse(getWeekStartDate(date)) + 6 * dayDuration)

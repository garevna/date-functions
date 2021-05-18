import { getNextWeekDate } from './getNextWeekDate'
import { getWeekObject } from './getWeekObject'

export const getNextWeekObject = (date = new Date()) => getWeekObject(getNextWeekDate(date))

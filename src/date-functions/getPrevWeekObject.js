import { getPrevWeekDate } from './getPrevWeekDate'
import { getWeekObject } from './getWeekObject'

export const getPrevWeekObject = (date = new Date()) => getWeekObject(getPrevWeekDate(date))

import { weekDuration } from './initial'

export const getPrevWeekDate = date => new Date(typeof date === 'number' ? date : Date.parse(date) - weekDuration)

import { initialDate, weekDuration } from './initial'

export const getWeekNumber = date => Math.floor((typeof date === 'number' ? date : Date.parse(date) - initialDate) / weekDuration)

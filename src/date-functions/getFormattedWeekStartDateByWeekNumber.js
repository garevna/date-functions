export const getFormattedISODate = date => (typeof date === 'number' ? new Date(date) : date).toISOString().slice(0, 10)

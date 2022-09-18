import { format } from 'date-fns-tz'
export const convertDate = (date) => date ? format(new Date(date), 'MM/dd/yyyy h:mm a') : ''
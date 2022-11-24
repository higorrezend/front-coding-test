import dayjs from 'dayjs'

const dateFilter = function (date: Date, mask: string): string {
  if (date) {
    return dayjs(date).format(mask)
  }
  return date
}

export default dateFilter

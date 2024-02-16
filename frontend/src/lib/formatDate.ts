const monthNames = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']

const formatDate = (date: string) => {
  const d = new Date(date)
  const month = monthNames[d.getMonth()]
  const day = d.getDate()
  const year = d.getFullYear()

  return `${day} ${month} ${year}`
}

export default formatDate

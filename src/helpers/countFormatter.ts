export const countFormatter = (count: number) => {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })
  return formatter.format(count)
}

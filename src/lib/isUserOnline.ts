export const isUserOnline = (lastSignInTime: string) => {
  const now = new Date().getTime()
  const fiveMinutes = 5 * 60 * 1000
  const lastSignInTimestamp = Number(lastSignInTime)
  return now - lastSignInTimestamp <= fiveMinutes
}

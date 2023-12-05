export function formatTime(seconds) {
  if (Number.isNaN(seconds) || seconds < 0)
    return '';
  const date = new Date(seconds);
  // Use Intl.DateTimeFormat to format the time
  const formatter = new Intl.DateTimeFormat('en', {
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
  });
  return formatter.format(date);
}

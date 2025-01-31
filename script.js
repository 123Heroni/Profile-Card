function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();
 
  // Converting UTC to Nigerian Time (UTC+1)
  const options = { timeZone: 'Africa/Lagos', timeStyle: 'medium', hour12: true };
  const time = new Intl.DateTimeFormat('en-US', options).format(now);

  timeElement.textContent = time;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
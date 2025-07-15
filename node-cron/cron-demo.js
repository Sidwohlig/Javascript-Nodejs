const cron = require('node-cron');

// Schedule a job to run every minute
cron.schedule('* * * * *', () => {
  console.log('⏰ This job runs every minute:', new Date().toLocaleTimeString());
});

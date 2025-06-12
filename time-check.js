// generate-time.js

const fs = require('fs');

const now = new Date();

const options = {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};

const formatter = new Intl.DateTimeFormat('en-US', options);
const parts = formatter.formatToParts(now);

const get = (type) => parts.find(p => p.type === type)?.value;

const hour = get('hour').padStart(2, '0');
const minute = get('minute').padStart(2, '0');
const second = get('second').padStart(2, '0');

const json = {
  month: get('month'),
  day: parseInt(get('day')),
  year: parseInt(get('year')),
  time: `${hour}:${minute}:${second}`,
  "24-hour": false
};

fs.writeFileSync('time.json', JSON.stringify(json, null, 2));

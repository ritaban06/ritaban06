const axios = require('axios');

const accessToken = process.env.GH_TOKEN;

axios.get('https://api.github.com/user', {
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
.then(response => {
  console.log(JSON.stringify(response.data, null, 2));
  core.setOutput('profile', response.data);
})
.catch(error => {
  console.error(error);
});

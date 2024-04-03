import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { configDotenv } from 'dotenv';

function App() {
  const [count, setCount] = useState(0);
  // const accessToken = "AQXYlNMib-4iKQ_1wf7QC_sQjU9f0T4fIc9k8O-9iZJJcvyK0CYDJ98Jk_sx0sYBd-JSE9wdOFA4OVmPuDypm9bf2EaIGYpS9lNNHjvUHXfNjADP30rwdpW2elzQlh8NX5yjg4hSCzjohQIDu8MIpRTDa_LyfZGSlXnEMntZhk0dr3RiuJ4JhDzddZJK2NBvvIB02JWaLpuIpxsL-X8w1kxkf-MWnsx1jk131gRgVsH20OWHTrNUw7hmDm1aibc6LPv62EYGL60NUfhjNcUYyzxzMZ5GQwk5O200nK67AV3S-gEaKbzygPscQIozIboLa0yDXhQ6OUrYiv1KaH6KLCY1d_ug5w";
  // const axios = require('axios');
  // const dotenv = require('dotenv');

  // configDotenv.config();

  
  // const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
  
  // // Define the LinkedIn API headers
  // const HEADERS = {
    // 'Authorization': `Bearer ${ACCESS_TOKEN}`,ACCESS_TOKEN
    // 'X-RestLi-Protocol-Version': '2.0.0',
    // };
  const API_ENDPOINT = 'https://api.linkedin.com/v2/userinfo';

  const handleLinkedIn = async ()  => {
    const HEADERS = {
      Authorization: `Bearer ${"AQViAn_K9wGSsQrGxU-LpXQ4AX7cnPJK5YSktlkCycpt6ZeUmwCQT1ztKXWrkA1LMrAf9hhjEOvH3clReuUO-2BNgA9NWfK6o78J0tew806LZGuePklcYqDP9257FgzK_5UKhGAU682d_nzRE3ozEDApNiaZ2yp79JMRNgUOfIZ9-YcknJHP50-DuxTwxdEC0BY-dthU5c9A_s0rjOUyEXsqOe4I7QBD7tusPZria9U1DIrAPfua0H88XJIX9urDoGru8PG8UAlJzOq-ny-rXe73CN12qsXBxIYSMJRKm3NkqYwZuGoTe887S_Gjus8W1L4lpnLyvZgEU9JoMxvgjsTwsuAKzA"}`,
      "X-RestLi-Protocol-Version": "2.0.0",
      "Connection": "Keep-Alive",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Request-Method': 'GET',
      'Host': "api.linkedin.com",
    };
    try {
      const response = await axios.get(API_ENDPOINT, { headers: HEADERS});
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <button onClick={handleLinkedIn}>Click me</button>
    </>
  )
}

export default App

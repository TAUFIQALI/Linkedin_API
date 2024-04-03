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
      Authorization: `Bearer ${"AQXjLiscaN09Dn3f7UssgWIwBcyPRYTko-W0xFliclt7FaJAdczlj9YhI5ipHHSURLyFoSAA4DskpBwTuLHfty_9wBwN428XN39bhHusxZoQfA_XuLvhHXUIa5Qf9rsVkJwY6jJLk18OtKwrbAfSPUCwb2oJXqWfvpSlSZp3aJNiR4LGZwUpLM4K2r9EPaOOLrvaRqArM1CWZO76eQIOvjRsC3fJO06nSYvPSmAdUdBppOAzefisDM3ethM8-Pc1IJm_-GHfgxeKpdZJCV6M9NgI_Y441lu8ufKfm3LGlkKAPtlPTz8FwzY4JwQYKWTcsdt32cVvGdC_FGDllXQ6c-1q8Dzepw"}`,
      "X-RestLi-Protocol-Version": "2.0.0",
      "Connection": "Keep-Alive",
      "Access-Control-Allow-Origin": "*",
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

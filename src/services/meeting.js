import axios from "axios";
import Cookies from "js-cookie";
const API = import.meta.env.VITE_API_URL;

const randomGenerator = (topics) => {
    const randomIdx = Math.floor(Math.random() * topics.length);
    return topics[randomIdx];
}

const getTopic = async () => {
    try {
        const response = await axios.get(`${API}/langchain/trending?category=general&top_k=5`);
        return randomGenerator(response.data.data.topics);
    } catch (error) {
        throw new Error(error);
    }
}

const getMeeting = async (roomCode) => {
    try {
        const response = await axios.get(`${API}/meetings/${roomCode}`,
            {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export {getTopic, getMeeting};
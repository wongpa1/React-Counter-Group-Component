import axios from "axios";

class CounterApi{
    static getCounterSize(){
        const COUNTER_API_URL = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters";
        return axios.get(COUNTER_API_URL);
    }
}

export default CounterApi;
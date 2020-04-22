import axios from "axios";
import { COUNTER_API_URL } from "./constants/constants";

class CounterApi {
  static getCounterSize() {
    return axios.get(COUNTER_API_URL);
  }
  static putCounterSize(inputSize) {
    return axios.put(COUNTER_API_URL + '/'+ inputSize);
  }
}

export default CounterApi;

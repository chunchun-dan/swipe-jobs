// @flow
import axios from 'axios';

const getWorker = (workerId: string): any => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/profile`);

export default getWorker;

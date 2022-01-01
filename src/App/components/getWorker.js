import axios from 'axios';

const getWorker = (workerId) => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/profile`);

export default getWorker;

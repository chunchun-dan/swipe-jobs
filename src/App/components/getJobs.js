import axios from 'axios';

const getJobs = (workerId) => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/matches`);

export default getJobs;

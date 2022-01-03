// @flow
import axios from 'axios';

const getJobs = (workerId: string): any => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/matches`);

export default getJobs;

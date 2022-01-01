import axios from 'axios';

const acceptJob = (workerId, jobId) => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`);

export default acceptJob;

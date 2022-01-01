import axios from 'axios';

const rejectJob = (workerId, jobId) => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`)

export default rejectJob;

// @flow
import axios from 'axios';

const acceptJob = ({
  workerId,
  jobId
}: {
  workerId: string,
  jobId: string,
}): any => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/accept`);

export default acceptJob;

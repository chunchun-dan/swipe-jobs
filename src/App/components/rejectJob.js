// @flow
import axios from 'axios';

const rejectJob = ({
  workerId,
  jobId,
}: {
  workerId: string,
  jobId: string,
}): any => axios.get(`https://test.swipejobs.com/api/worker/${workerId}/job/${jobId}/reject`)

export default rejectJob;

// @flow
import * as React from 'react';
import Job from './Job';

type Props = {
  jobs: Array<{
    jobId: string,
    jobTitle: {
      name: string,
      imageUrl: string,
    },
    company: {
      name: string,
      address: {
        formattedAddress: string,
        zoneId: string,
      },
      reportTo: {
        name: string,
        phone: string,
      },
    },
    wagePerHourInCents: number,
    milesToTravel: number,
    shifts: Array<{
      startDate: string,
      endDate: string,
    }>,
    branch: string,
    branchPhoneNumber: string,
  }>,
  workerId: string,
};

const JobList = ({ jobs, workerId }: Props): React.Node => {
  return(
    <div>
    {jobs.map((o) => {
      return (
        <Job key={o.jobId} job={o} workerId={workerId}/>
      );
    })}
    </div>
  )
}

export default JobList;

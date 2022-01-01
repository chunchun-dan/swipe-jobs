import * as React from 'react';
import Title from './Title';
import Info from './Info';
import Shifts from './Shifts';
import Location from './Location';
import Requirements from './Requirements';
import ReportTo from './ReportTo';
import acceptJob from '../../components/acceptJob';
import rejectJob from '../../components/rejectJob';

type Props = {
  job: {
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
    wagePerHourInCents: float,
    milesToTravel: float,
    shifts: Array<{
      startDate: string,
      endDate: string,
    }>,
    branch: string,
    branchPhoneNumber: string,
    requirements: Array<string> | void,
  },
  workerId: string,
}
const Job = ({ job, workerId }: Props) => {
  const {
    jobId,
    jobTitle,
    company,
    wagePerHourInCents,
    milesToTravel,
    shifts,
    requirements,
  } = job;

  const hourlyRate = Math.round(wagePerHourInCents / 100 * 100) / 100;

  return(
    <div>
      <Title imageUrl={jobTitle.imageUrl} name={jobTitle.name} companyName={company.name}/>
      <Info distance={milesToTravel} hourlyRate={hourlyRate}/>
      <Shifts jobId={jobId} shifts={shifts} />
      <Location address={company.address.formattedAddress} distance={milesToTravel}/>
      {requirements && <Requirements requirements={requirements}/>}
      <ReportTo name={company.reportTo.name} phone={company.reportTo.phone}/>
      <button onClick={() => rejectJob(workerId, jobId)}>{'No Thanks'}</button>
      <button onClick={() => acceptJob(workerId, jobId)}>{'I\'ll Take it'}</button>
    </div>
  )
}

export default Job;

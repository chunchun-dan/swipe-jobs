import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

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

  const styles = StyleSheet.create({
    lineBreaker: {
      borderTop: '1px solid lightgrey',
      margin: '16px 24px 8px 24px',
    },
  })

  return(
    <div>
      <Title imageUrl={jobTitle.imageUrl} name={jobTitle.name} companyName={company.name}/>
      <Info distance={milesToTravel} hourlyRate={hourlyRate}/>
      <Shifts jobId={jobId} shifts={shifts} />
      <div className={css(styles.lineBreaker)}></div>
      <Location address={company.address.formattedAddress} distance={milesToTravel}/>
      <div className={css(styles.lineBreaker)}></div>
      {requirements && (
        <>
          <Requirements requirements={requirements}/>
          <div className={css(styles.lineBreaker)}></div>
        </>
        )}
      <ReportTo name={company.reportTo.name} phone={company.reportTo.phone}/>
      <div>
        <button onClick={() => rejectJob(workerId, jobId)}>{'No Thanks'}</button>
        <button onClick={() => acceptJob(workerId, jobId)}>{'I\'ll Take it'}</button>
      </div>
    </div>
  );
}

export default Job;

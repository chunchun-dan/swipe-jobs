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
    buttons: {
      margin: '16px 24px 16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    buttonYes: {
      width: '160px',
      height: '50px',
      fontSize: '20px',
      background: 'black',
      color: 'white',
      borderRadius: '4px',
      border: '1px solid black'
    },
    buttonNo: {
      width: '160px',
      height: '50px',
      fontSize: '20px',
      background: 'white',
      color: '#ccc',
      borderRadius: '4px',
      border: '1px solid #ccc',
    }
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
      <div className={css(styles.buttons)}>
        <button className={css(styles.buttonNo)} onClick={() => rejectJob({workerId, jobId})}>{'No Thanks'}</button>
        <button className={css(styles.buttonYes)} onClick={() => acceptJob({workerId, jobId})}>{'I\'ll Take it'}</button>
      </div>
    </div>
  )
}

export default Job;

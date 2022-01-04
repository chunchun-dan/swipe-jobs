// @flow
import * as React from 'react';
import Header from './Header';
import JobList from './JobList';
import getJobs from './components/getJobs';
import getWorker from './components/getWorker';
import { StyleSheet, css } from 'aphrodite';

const App = (): React.Node => {
  const [worker, setWorker] = React.useState({});
  const [jobs, setJobs] = React.useState([]);
  const workerId = '7f90df6e-b832-44e2-b624-3143d428001f';

  React.useEffect(() => {
    getWorker(workerId)
    .then((response) => {
      setWorker(response.data);
    });

    getJobs(workerId)
    .then((response) => {
      setJobs(response.data);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    list: {
      backgroundColor: 'lightgrey',
      padding: '12px',
    }
  })

  return(
    <div className={css(styles.container)}>
      <div>
        <Header firstName={worker.firstName} lastName={worker.lastName}/>
        <div className={css(styles.list)}>
          <JobList jobs={jobs} workerId={workerId}/>
        </div>
      </div>
    </div>
  );
}

export default App;

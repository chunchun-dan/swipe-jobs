import * as React from 'react';
import Header from './Header';
import JobList from './JobList';
import getJobs from './components/getJobs';
import getWorker from './components/getWorker';

const App = () => {
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

  return(
    <div>
      <Header firstName={worker.firstName} lastName={worker.lastName}/>
      <JobList jobs={jobs} workerId={workerId}/>
    </div>
  );
}

export default App;

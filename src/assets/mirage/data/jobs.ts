import moment from 'moment'
import { Job, JobInterface } from '@/models/job'

const jobs: JobInterface[] = [
  {
    jobTitle: 'Front-end developer',
    jobDescription: 'Lorum ipsum',
    jobType: 'fulltime',
    companyLocation: 'Enschede',
    companyName: 'Datatrics',
    startDate: moment.utc('2019-10-01'),
    endDate: undefined
  },
  {
    jobTitle: 'Implementation Agent',
    jobDescription: 'Lorum ipsum',
    jobType: 'fulltime',
    companyLocation: 'Enschede',
    companyName: 'Datatrics',
    startDate: moment.utc('2018-02-01'),
    endDate: moment.utc('2019-09-30'),
  }
];

export default jobs.map(job => new Job(job))

import JobInterface from './job.interface'
import CryptoJS from 'crypto-js'
import moment, { Moment } from 'moment'
import 'moment-duration-format'

export class Job implements JobInterface {
  public jobTitle: string;
  public jobType: string;
  public jobDescription: string;
  public companyName: string;
  public companyLocation: string;
  public startDate: Moment
  public endDate?: Moment

  constructor (job: JobInterface) {
    this.jobTitle = job.jobTitle
    this.jobType = job.jobType
    this.jobDescription = job.jobDescription
    this.companyName = job.companyName
    this.companyLocation = job.companyLocation
    this.startDate = moment.utc(job.startDate)
    this.endDate = moment.utc(job.endDate)
  }

  public get hash (): string {
    return CryptoJS
      .HmacSHA256(
        `${this.jobTitle.toLowerCase()}@${this.companyName.toLowerCase()}`,
        'JobHash'
      )
      .toString()
  }

  public get duration (): string {
    const startDate: Moment = this.startDate
    const endDate: Moment = !this.endDate ? moment.utc() : this.endDate
    return moment
      .duration(endDate.diff(startDate))
      .format('y [years], M [months]')
  }
}

export default Job
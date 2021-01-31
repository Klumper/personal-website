import { Server, Response, Request } from 'miragejs';
import jobs from '../data/jobs';

export default (server: Server) => {
  server.get('job', () => {
    return new Response(200, {}, jobs);
  }, { timing: 1000 });

  server.get('job/:jobHash', (_schema, request: Request) => {
    try {
      const job = jobs.find(({ hash }) => hash === request.params.jobHash)
      if (!job) throw Error(`Found not find job with hash: ${request.params.jobHash}`)
      else {
        return new Response(200, {}, job);
      }
    } catch (error) {
      return new Response(400, {}, error)
    }
  }); 
}
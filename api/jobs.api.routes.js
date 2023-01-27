import express from 'express'
import {
    getAllJobs,
    getJob,
    findJob
} from './jobs.api.controller.js';

const jobsRoutes = express.Router()

// Root => api/jobs

jobsRoutes.get('/', getAllJobs)
jobsRoutes.get('/:job(*)', getJob)
jobsRoutes.get('/find/:query(*)', findJob)

export default jobsRoutes;
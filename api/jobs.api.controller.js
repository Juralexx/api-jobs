import JobModel from "./jobs.api.model.js"

/**
 * Get all jobs
 */

export const getAllJobs = (req, res) => {
    JobModel.find({}, (err, docs) => {
        if (!err)
            res.send(docs)
        else console.log('Error to get data => ' + err)
    })
}

/**
 * Get job by name
 * @param {*} job - Name of the job
 */

export const getJob = (req, res) => {
    JobModel.findOne({
        "appelation_metier": {
            $regex: req.params.job,
            $options: "i"
        }
    },
        (err, docs) => {
            if (!err)
                res.send(docs)
            else console.error(err)
        })
        .sort('appelation_metier')
        .select()
}

/**
 * Find jobs from query
 * @param {*} query - Query to find jobs
 * @param {*} limit - Limit the number of element returned (?limit=)
 * @param {*} sort - Sort the response by this field (?sort=)
 */

export const findJob = (req, res) => {
    const queries = {
        limit: req.query.limit ? Number(req.query.limit) : 15,
        sort: req.query.sort ? (req.query.sort).toString() : 'appelation_metier'
    }

    JobModel.find({
        "appelation_metier": {
            $regex: req.params.query,
            $options: "i"
        }
    },
        (err, docs) => {
            if (!err)
                res.send(docs)
            else console.error(err)
        })
        .sort(queries.sort)
        .limit(queries.limit)
}
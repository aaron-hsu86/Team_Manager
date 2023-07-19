const TeamManager = require('../models/team.model')
module.exports = {
    test: (req, res) => {res.json({message: 'Hello World'})},
    create: (req,res) => {
        TeamManager.create(req.body)
            .then(info=>res.json(info))
            .catch(err=>res.status(400).json(err))
    },
    all: (req, res) => {
        TeamManager.find()
            .then(info=>res.json(info))
            .catch(err=>res.json(err))
    },
    one: (req,res)=>{
        TeamManager.findOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    },
    update: (req,res)=>{
        TeamManager.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {runValidators: true, new: true}
            )
        .then(info=>res.json(info))
        .catch(err=>res.status(400).json(err))
    },
    delete: (req,res)=>{
        TeamManager.deleteOne({_id:req.params.id})
        .then(info=>res.json(info))
        .catch(err=>res.json(err))
    }
}
const TeamManager = require('../controllers/team.controller')

module.exports = app => {
    app.get('/api', TeamManager.test)
    app.post('/api/members', TeamManager.create)
    app.get('/api/members', TeamManager.all)
    app.get('/api/members/:id', TeamManager.one)
    app.put('/api/members/:id', TeamManager.update)
    app.delete('/api/members/:id', TeamManager.delete)
}
import {newEntry, getDetails} from '../controllers/studentControllers'

const routes = (app) => {

    app.route('/student/getDetails')
        .get(getDetails)
    app.route('/student/newEntry')
        .post(newEntry) 
        
}

export default routes
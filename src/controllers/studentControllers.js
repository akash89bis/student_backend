import {StudentSchema} from '../models/studentModels'
import mongoose from 'mongoose'

const Details = mongoose.model('studentContact', StudentSchema);

export const newEntry = (req, res)=> {
    let newContact = new Details(req.body);

    newContact.save((err, contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact)
    })

}

export const getDetails = (req, res)=>{

    Details.find({}, (err, contact) => {
        if(err){
            res.send(err)
        }
        res.json(contact)
    })

}
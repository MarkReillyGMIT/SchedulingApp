import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Edit from './edit';
class ScheduleItem extends React.Component{

    constructor(){
        super();
        this.DeleteSchedule = this.DeleteSchedule.bind(this);
    }


    DeleteSchedule(e){
        console.log("Delete Clicked " + this.props.schedule._id);
        axios.delete('http://localhost:4000/scheduler/' + this.props.schedule._id)
        .then()
        .catch();
    }

    render(){
        return(
            <tr>
                <td>{this.props.schedule.title}</td>
                <td>{this.props.schedule.date}</td>
                <td>{this.props.schedule.time}</td>
                <td>{this.props.schedule.description}</td>     
                <td><Button variant="danger" onClick={this.DeleteSchedule} className="btn btn-primary">Delete</Button></td>
                <td><Link to={"/edit/" + this.props.schedule._id +"/" + this.props.schedule.title}className="btn btn-primary">Edit</Link> </td>
            </tr>
         
            
            
        );
    }
}
export default ScheduleItem;
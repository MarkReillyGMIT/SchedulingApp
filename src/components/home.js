import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Schedules from './schedules';
import Button from 'react-bootstrap/Button';


export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {scheduler: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/scheduler')
        .then((response)=> {
            this.setState({scheduler: response.data.scheduler})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
           <div>
               <h3>Schedules</h3>
               <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Schedules mySchedules={this.state.scheduler}></Schedules>
                    </tbody>
                </table>
           </div>
        )
    }
}
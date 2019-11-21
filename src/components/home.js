import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Schedules from './schedules';

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
               <h3 style={{textAlign: "center"}}>Schedules</h3>
               <table className="table table-striped table-hover" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th style={{fontStyle: "italic"}}>Title</th>
                            <th style={{fontStyle: "italic"}}>Date</th>
                            <th style={{fontStyle: "italic"}}>Time</th>
                            <th style={{fontStyle: "italic"}}>Description</th>
                            <th style={{fontStyle: "italic"}}>Delete</th>
                            <th style={{fontStyle: "italic"}}>Edit</th>
                            
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
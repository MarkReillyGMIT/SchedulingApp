import React, {Component} from 'react';
import axios from 'axios';
import { isDate } from 'util';



//Schedule component allows a schedule to be created 
export default class Schedule extends Component{

    constructor(props){
        super(props);

        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTime= this.onChangeTime.bind(this);
        this.onChangeTitle= this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            schedule_title: '',
            schedule_date:'',
            schedule_time: '',
            schedule_description:''
        }
    }

    date(){
        var d = Date();
        var a = d.toString()  
    }
   
    onChangeTitle(e){
        this.setState({
            schedule_title: e.target.value
        });
    }

    onChangeDate (e){
        this.setState({
            schedule_date: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            schedule_time: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            schedule_description: e.target.value
        });
    }
  
    onSubmit(e){
        alert(this.state.schedule_title +
            "   " + this.state.schedule_date +
            "   " + this.state.schedule_time +
            "   " + this.state.schedule_description);
        e.preventDefault();

        //Output values to the console 
        //Check if the values are right
        console.log('Form submitted:');
        console.log(`Title: ${this.state.schedule_title}`);
        console.log(`Date:${this.state.schedule_date}`);
        console.log(`Time: ${this.state.schedule_time}`);
        console.log(`Description: ${this.state.schedule_description}`);

        const scheduleObject = {
            title: this.state.schedule_title,
            date: this.state.schedule_date,
            time: this.state.schedule_time,
            description: this.state.schedule_description
          };
      
            axios.post('http://localhost:4000/scheduler', scheduleObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        //Resets the form back to orignal once the onSubmit function is called
        this.setState({
            schedule_title: '',
            schedule_date:'',
            schedule_time: '',
            schedule_description:''
        })

    }
    //Display to screen
    render(){
        return(
            
            <div style={{margin:20}}>
                <h3 style={{textAlign: "center"}}>Add New Schedule</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text"
                                required
                                className="form-control"
                                value={this.state.schedule_title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <br></br>
                        <input type="date"
                                id="todayDate"
                                required
                                className="form-control"
                                value={this.state.schedule_date}
                                onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input type="time"
                                className="form-control"
                                required
                                value={this.state.schedule_time}
                                onChange={this.onChangeTime}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                                className="form-control"
                                value={this.state.schedule_description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Schedule" className="btn btn-dark"/>
                    </div>
                </form>
            </div>
        )
    }
}
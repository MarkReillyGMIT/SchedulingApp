import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component{

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

    componentDidMount() {
        axios.get('http://localhost:4000/scheduler/' +this.props.match.params.id)
        .then((response)=> {
            this.setState({
                _id: response.data._id,
                title: response.data.title,
                date: response.data.date,
                time: response.data.time,
                description: response.data.description,
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Button clicked'
        // ${this.state.schedule_title},
        // ${this.state.schedule_date},
        // ${this.state.schedule_description},
        // ${this.state.schedule_time}
    );
    this.setState({
        schedule_title: '',
        schedule_date:'',
        schedule_time: '',
        schedule_description:''
    })

    const newSchedule = {
        title: this.state.schedule_title,
        date: this.state.schedule_date,
        time: this.state.schedule_time,
        description: this.state.schedule_description
        };
        axios.put('http://localhost:4000/scheduler/'+this.state._id, newSchedule)
        .then(res => console.log(res.data));
        
    }
    render(){
        return(
            <div style={{margin:20}}>
                <h3>Edit {this.state.title} Schedule</h3>
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
import React from 'react';
import '../App.css';
import ScheduleItem from './scheduleitem';

class Schedules extends React.Component{
  render(){
    return this.props.mySchedules.map((schedule)=>{
        console.log({schedule});
        return<ScheduleItem key={schedule._id} schedule={schedule}></ScheduleItem>
        
    });
  }
}

export default Schedules;
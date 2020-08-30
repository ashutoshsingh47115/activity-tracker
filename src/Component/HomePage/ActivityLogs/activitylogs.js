import React from 'react'
import './activitylogs.css'
import DatePicker from '../DatePicker/datepicker'
import Calendar from '../Calendar/calendar'


const ActivityLogs = (props) => {



    return (
        <div className='activitylogs-main'>

            <div className='bold'>Activity Logs</div>
            
            <div>
                <Calendar startdate={props.startDate} handleClick={props.handleClick} onChange={(e) => props.handleChangeDate(e, props.filterActivityList)} isDatePickerOpen={props.isDatePickerOpen}/>
            </div>


          {props.activityList.length > 0 && props.activityList.map((item, i) => <div key={i} className='flex'>
                <div className='active-range'>Active time</div>
                <DatePicker label={'Start time'} time = {item.start_time}/>
                <DatePicker label={'End time'} time = {item.end_time}/>

          </div> )}

        </div>
    )
}

export default ActivityLogs
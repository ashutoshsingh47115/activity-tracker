import React from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
// import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
// import Today from 'material-ui/svg-icons/action/today';
 
import "react-datepicker/dist/react-datepicker.css";


const Calendar = (props) => {
    
    console.log(props,'calendar')

    return (
        <div  className = "date-picker-customs"> 
        {/* <div className = "Date-picker-csss" ><Today style={{ marginTop:'2px', marginLeft :'-160px',color:"#006ae5"}}/><div className = "date-css">{moment(this.props.value).format("ddd, D MMM YYYY")}</div></div> */}
        <DatePicker
            
            // customInput = {<ArrowDropDown style= {{marginTop:"3px", marginLeft:'-37px', cursor:'pointer', color: 'darkgray'}}/>} 
            onChange ={props.onChange}  
            selected = {props.startdate._d}   
            dateFormat="LLLL" 
            open = {props.isDatePickerOpen}
            onInputClick = {props.handleClick}
           
            // timeFormat="HH:mm"
            // timeIntervals={30}
            // timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    </div>
    )
}

export default Calendar
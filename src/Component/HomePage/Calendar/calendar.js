import React from "react";
import DatePicker from "react-datepicker";

 
import "react-datepicker/dist/react-datepicker.css";


const Calendar = (props) => {
    
    

    return (
        <div  className = "date-picker-customs"> 
       
        <DatePicker
            
          
            onChange ={props.onChange}  
            selected = {props.startdate._d}   
            dateFormat="LLLL" 
            open = {props.isDatePickerOpen}
            onInputClick = {props.handleClick}

            dateFormat="MMMM d, yyyy h:mm aa"
        />
    </div>
    )
}

export default Calendar
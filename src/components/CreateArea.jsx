import React, { Fragment, useState } from "react";
import Grid from '@material-ui/core/Grid';
import AccessTime from '@material-ui/icons/AccessTime';
import DateMomentUtils from '@date-io/moment';
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
//import { DateTimePicker } from "@material-ui/pickers";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date,time) => {
    setSelectedDate(date,time);
  }

  const [note, setNote] = useState({
    title: "",
    date:"",
    time:"",
    content: ""
  });

  function handleChange(event) {
    if(event?.target){
      const { name, value } = event.target;
      console.log(name, value)
      setNote(prevNote => {
        return {
          ...prevNote,
          [name]: value,
         
      } }
      )
    }else{
      setNote(prevNote => {
        return {
          ...prevNote,
          date: JSON.stringify(selectedDate),
          time: JSON.stringify(selectedDate),
      } }
      )
    }
  }

  function submitNote(event) {
    props.onAdd(note);
    // setNote({
    //   title: "",
    //   date:"",
    //   time:"",
    //   content: ""
    // });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }
  
  React.useEffect(()=>{
     console.log(note);
  },[note])

  

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onClick={expand}
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            
          />
        )}
        
        {isExpanded &&(
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <KeyboardDatePicker
          //disableToolbar
          variant="inline"
          format= 'DD-MM-YYYY'
          margin="normal"
          id="date-picker-inline"
          name="date"
          value={selectedDate}
          onChange={(e)=>{handleChange(e);handleDateChange(e)}}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          placeholder="Date"
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          value={selectedDate}
          onChange={(e)=>{handleChange(e);handleDateChange(e)}}
          keyboardIcon={<AccessTime/>}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          placeholder="Time"
        />
        </MuiPickersUtilsProvider>
        )}
        
        <textarea
         name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  const date = new Date(props.date.replace(/"/g, "")).toString().split(' ');
  const time = new Date(props.date.replace(/"/g, "")).toString().split(' ');

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <h3>Date: {date[2]+" "+date[1]+ " "+date[3]+", "+date[0]}</h3>
      <h3>Time: {time[4]}</h3>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

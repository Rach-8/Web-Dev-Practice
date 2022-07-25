import React from "react";

function Note(props) {
  return (
    <div className="note">
    <form action="http://www.foo.com" method="GET"></form>
    <div class="flex-parent-element">
  <div class="flex-child-element magenta note_header">{props.username}</div>

</div>
    
      <h1 contenteditable = "true" >{props.title}</h1>
      <p contenteditable = "true">{props.note}</p>
    <h6>{props.date_time}</h6>  
    </div>
  );
}

export default Note;


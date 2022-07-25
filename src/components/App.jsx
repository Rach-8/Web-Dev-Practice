import React from "react";
import Form from "./Form";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer"


function createNote(info) {
  return <Note 
  key = {info.id}
  username = {info.username}
  title = {info.title}
  note = {info.note}
  date_time = {info.date_time}
   />
}


function App() {
  return (
    <div>
      <div className="pad">
      <Header />


        <Form />

      {info_obj.map(createNote)}


      <Footer />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email
        })
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");

        setMessage("Posted.");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form note">
      <form onSubmit={handleSubmit}>
        <input class = " form_title"
          type="text"
          value={name}
          placeholder="Title"
          onChange={(e) => setName(e.target.value)}
        />
        <input class = " form_note"
          type="text"
          value={email}
          placeholder="Note"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="btn">Post</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form;

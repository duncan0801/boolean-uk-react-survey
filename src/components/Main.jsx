import { useState } from "react";

import Form from "./Form";

import AnswersList from "./AnswersList";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formSubmissions, setFormSubmissions] = useState({formData})
  const formData = {
    answerItem: {
        username: "motherDucker",
        email:  "motherDucker@pondmail.co.uk",
        logo: 1,
        colour: 1,
        consistency: 1,
        timeSpent: "",
        review: "I ducking love this wee guy, he's so ducking cute!",
        bestFeatures: ["It has a logo!"],
        worstFeature: ["It's yellow!"]
      }
}

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* Use the AnswersList component here */}
      </section>
      <section className="main__form">
      <Form />
      </section>
    </main>
  );
}

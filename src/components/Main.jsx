import { useState } from "react";

import Form from "./Form";

import AnswersList from "./AnswersList";

export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const answerData = [
      {
        username: "motherDucker",
        email:  "motherDucker@pondmail.co.uk",
        logo: 1,
        colour: 1,
        consistency: 1,
        timeSpent: [],
        review: "I ducking love this wee guy, he's so ducking cute!",
        bestFeatures: [],
        worstFeatures: []
      }
    ]
  const [formSubmissions, setFormSubmissions] = useState({})
  const [answerItems, setAnswerItems] = useState(answerData)
  console.log(answerItems)
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
        answersList={answerItems}
        />
        {/* Use the AnswersList component here */}
      </section>
      <section className="main__form">
      <Form />
      </section>
    </main>
  );
}

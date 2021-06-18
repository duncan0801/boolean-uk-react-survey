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
  const formDataTemplate = {
    username: "",
    email:  "",
    logo: "",
    colour: "",
    consistency: "",
    timeSpent: [],
    review: "",
    bestFeatures: [],
    worstFeatures: []
  }
  const [formSubmissions, setFormSubmissions] = useState({})
  const [responses, setResponses] = useState(answerData)
  const [formData, setFormData] = useState({})

  function handleFormSubmission(event) {
    event.preventDefault()

    

    const bestFeaturesStrings = [...event.target.bestFeatures].filter(input => input.checked).map(checkedInput => checkedInput.value)

    

    const worstFeaturesStrings = [...event.target.worstFeatures].filter(input => input.checked).map(checkedInput => checkedInput.value)

    

    const timeSpentStrings = [...event.target.timeSpent].filter(input => input.checked).map(checkedInput => checkedInput.value)

    const data = {
      username: event.target.username.value,
      email:  event.target.email.value,
      logo: event.target.logo.value,
      colour: event.target.colour.value,
      consistency: event.target.consistency.value,
      timeSpent: timeSpentStrings,
      review: event.target.review.value,
      bestFeatures: bestFeaturesStrings,
      worstFeatures: worstFeaturesStrings
    }
    setFormData(data)
    console.log("formData", formData)

    console.log("data:", data)// ? EMPTY OBJECT
    
    addFormDataToResponses(data)
    console.log("responses:", responses)
    event.target.reset()

  }

  function addFormDataToResponses(formData) {
    setResponses([...responses, formData])
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList 
        responses={responses}
        />
        {/* Use the AnswersList component here */}
      </section>
      <section className="main__form">
      <Form handleFormSubmission={handleFormSubmission}
        setFormData={setFormData} />
      </section>
    </main>
  );
}

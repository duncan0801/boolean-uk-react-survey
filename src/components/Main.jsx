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
    addFormDataToResponses(data)
    event.target.reset()

  }

  function handleChangeWithString(event) {
    setFormData({...formData, [event.target.name] : event.target.value})
    console.log("changed!")
  }
  function handleChangeWithArray(event) {

    setFormData({...formData, [event.target.name]:[...event.target[event.target.name]].filter(input => input.checked).map(checkedInput => checkedInput.value)})
  }

    //1. We need to change setFormData to whatever it was before plus the chnage from the input 
    /*
    Names:
    username,
    email,
    logo,
    colour,
    consistency,
    timeSpent,
    review,
    bestFeatures,
    worstFeatures
    */

    /**
     1. If the name is === ""
          CAn do the easy adding 
    2. if name === bestFeatures
          const bestFeaturesStrings = [...event.target.bestFeatures].filter(input => input.checked).map(checkedInput => checkedInput.value)

          setFormData({...formData}, name: bestFeaturesStrings)
    3. if name === worstFeatures
          const worstFeaturesStrings = [...event.target.worstFeatures].filter(input => input.checked).map(checkedInput => checkedInput.value)

          setFormData({...formData}, name: worstFeaturesStrings)
    4. if name === timeSpent
          const timeSpentStrings = [...event.target.timeSpent].filter(input => input.checked).map(checkedInput => checkedInput.value)

          setFormData({...formData}, name: timeSpentStrings)
     */


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
      <Form 
      handleFormSubmission={handleFormSubmission}
      handleChangeWithString={handleChangeWithString}
      handleChangeWithArray={handleChangeWithArray}
        setFormData={setFormData} />
      </section>
    </main>
  );
}

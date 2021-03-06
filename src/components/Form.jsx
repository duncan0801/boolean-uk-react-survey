import CheckboxesList1 from "./CheckboxesList1"
import CheckboxesList2 from "./CheckboxesList2"
import RadioListItem from "./RadioListItem"


function Form({handleFormSubmission, setFormData, handleChangeWithArray, handleChangeWithString}) {

    const ratingScale = ["1", "2", "3", "4"]
    
    return (
        <form className="form" onSubmit={handleFormSubmission}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <CheckboxesList1 handleChangeWithArray={handleChangeWithArray} type={"best"}/>
            </div>
            <div className="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <CheckboxesList1  handleChangeWithArray={handleChangeWithArray} type={"worst"}/>
            </div>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                {ratingScale.map((numRating) => {
                    return <RadioListItem  
                    handleChangeWithString={handleChangeWithString} 
                    content={"consistency"} 
                    key={numRating} 
                    numRating={numRating}/>
                })}
            </div>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                {ratingScale.map((numRating) => {
                    return <RadioListItem  
                    handleChangeWithString={handleChangeWithString} 
                    content={"colour"} 
                    key={numRating} 
                    numRating={numRating}/>
                })}
            </div>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                {ratingScale.map((numRating) => {
                    return <RadioListItem  
                    handleChangeWithString={handleChangeWithString} 
                    content={"logo"} 
                    key={numRating} 
                    numRating={numRating}/>
                })}
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckboxesList2 handleChangeWithArray={handleChangeWithArray}/>
            </div>
            <label
                >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10" 
                onChange={handleChangeWithString}
                ></textarea></label>
                <label
                >Put your name here (if you feel like it):<input
                type="text"
                name="username" 
                onChange={handleChangeWithString}
                /></label>
                <label
                >Leave us your email pretty please??<input
                type="email"
                name="email" 
                onChange={handleChangeWithString}
                /></label>
                <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    )
}
export default Form
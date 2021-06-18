// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

//Takes in a list and will map over that list and creare an li with either a answer value from answerSet1 or answerSetTwo
function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <li>
          {Object.keys(answersSet).includes(item)
            ? answersSet[item]
            : answersSetTwo[item]}
        </li>
      ))}
    </ul>
  );
}

// These answers objects keys match the values attributes from the checkboxes
export const answersSet = {
  colour: "It's yellow!",
  sound: "It squeaks!",
  logo: "It has a logo!",
  size: "Its big!"
};

export const answersSetTwo = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed

  response: {
    username,
    email,
    logo,
    colour,
    consistency,
    timeSpent,
    review,
    bestFeatures,
    worstFeatures
  }
})
{
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>
            What would you say that are the best features of your rubber duck?
          </em>
          <ItemsList list={bestFeatures} />
        </p>
        <p>
          <em>
            What would you say that are the worst nags of your rubber duck?
          </em>
          <ItemsList list={worstFeatures} />
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistency}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logo}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={timeSpent} />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}

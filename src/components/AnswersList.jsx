import AnswersItem from "./AnswersItem";

export default function AnswersList({ responses }) {
  return (
    <ul>
      {responses.map((response, i) => (
        <AnswersItem response={response} key={i} />
      ))}
    </ul>
  );
}

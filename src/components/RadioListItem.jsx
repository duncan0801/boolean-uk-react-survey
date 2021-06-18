function RadioListItem({numRating, content}) {
    return (
        <li>
            <input id={`${content}${numRating}`} type="radio" name={content} value={`${numRating}`} /><label
            htmlFor={`${content}${numRating}`}
            >{numRating}</label>
        </li>
    )
}
export default RadioListItem
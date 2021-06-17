function RadioListItem({numRating}) {
    return (
        <li>
            <input id={`consistency${numRating}`} type="radio" name="consistency" value={`${numRating}`} /><label
            for={`consistency${numRating}`}
            >{numRating}</label>
        </li>
    )
}
export default RadioListItem
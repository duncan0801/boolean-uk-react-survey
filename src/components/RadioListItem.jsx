function RadioListItem({numRating, content, handleChangeWithString}) {
    return (
        <li>
            <input 
            id={`${content}${numRating}`} 
            type="radio" 
            name={content} 
            value={`${numRating}`} /><label
            htmlFor={`${content}${numRating}`}
            onChange={handleChangeWithString}
            >{numRating}</label>
        </li>
    )
}
export default RadioListItem
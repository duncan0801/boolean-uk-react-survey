function CheckboxesList1Item({keys, value, i, type, handleChangeWithArray}) {
    return (
        <li>
            <label>
                <input 
                onChange={handleChangeWithArray} 
                name={`${type}Features`} 
                type="checkbox" 
                value={keys[i]} />
                {value}
            </label>
        </li>
    )
}
export default CheckboxesList1Item
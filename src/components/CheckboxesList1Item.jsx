function CheckboxesList1Item({keys, value, i, type}) {
    return (
        <li>
            <label>
                <input name={`${type}Features`} type="checkbox" value={keys[i]} />
                {value}
            </label>
        </li>
    )
}
export default CheckboxesList1Item
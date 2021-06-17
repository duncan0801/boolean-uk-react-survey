function CheckboxesList2Item({keys, value, i}) {
    return (
        <li>
            <label>
                <input name="bestFeatures" type="checkbox" value={keys[i]} />
                {value}
            </label>
        </li>
    )
}
export default CheckboxesList2Item
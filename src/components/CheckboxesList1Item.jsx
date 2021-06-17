function CheckboxesList1Item({keys, value, i}) {
    return (
        <li>
            <label>
                <input name="bestFeatures" type="checkbox" value={keys[i]} />
                {value}
            </label>
        </li>
    )
}
export default CheckboxesList1Item
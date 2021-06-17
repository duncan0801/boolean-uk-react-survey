import {answersSet} from "./AnswersItem"
import CheckboxesList1Item from "./CheckboxesList1Item"

function CheckboxesList1({type}) {

    const keys = Object.keys(answersSet)
    const values = Object.values(answersSet)

    return (
        <ul>
            {values.map((value, i) => {
                console.log(keys,
                    values)
                return (
                    <CheckboxesList1Item
                    type={type}
                    key={i}
                    keys={keys} 
                    value={value}
                    i={i}/>
                )
            })}
        </ul>
        
    )
}
export default CheckboxesList1
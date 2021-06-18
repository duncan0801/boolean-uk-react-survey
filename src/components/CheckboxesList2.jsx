import {answersSetTwo} from "./AnswersItem"
import CheckboxesList2Item from "./CheckboxesList2Item"

function CheckboxesList2() {

    
    const keys = Object.keys(answersSetTwo)
    const values = Object.values(answersSetTwo)

    return (
        <ul>
            {values.map((value, i) => {
        
                return (
                    <CheckboxesList2Item 
                    key={i}
                    keys={keys} 
                    value={value}
                    i={i}/>
                )
            })}
        </ul>
    )
}
export default CheckboxesList2
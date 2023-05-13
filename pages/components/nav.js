/**
 * @param {Object} props
 * @param {String} props.name
 * @param {(number|null|undefined)} props.age
 * @returns
 */

import Proptypes from 'prop-types'

export default function Nav(props){
    console.log('props', props)
    const {name,age} = props
    console.log("name", name)
    return(
        <div className="h-20 bg-green-200">
            NAME: {name}
            <div>
                age: {5 + age}
            </div>
  
        </div>
    )
}

Nav.propTypes = {
    name: Proptypes.string.isRequired,
    age: Proptypes.number.isRequired,
    data: Proptypes.arrayOf(Proptypes.shape({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired
    }))
}

Nav.defaultProps = {
    name: "test",
    age: 12,
    data: []
}
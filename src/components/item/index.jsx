import React from 'react'
import BtnRemove from '../removeBtn'
import BtnSelected from '../selectedBtn'
import PropTypes from 'prop-types'

const styles = {
    select: {
        paddingLeft: '0.5em'
    },
    item: {
        textTransform: 'capitalize',
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    name: {
        textTransform: 'capitalize',
        verticalAlign: 'middle'
    }
}

const Item = props => {
    const { 
        element, 
        index, 
        itemForRemove, 
        itemSelected, 
        theClass } = props

    const handleRemove = e => {
        e.preventDefault()
        itemForRemove(element)
    }

    const handleSelected = e => {
        e.preventDefault()
        itemSelected(element)
    }

    return(
        <tr>
            <td>
                <BtnSelected 
                style={styles.select}
                handleClick={handleSelected}
                theClass={theClass(element)}/>
            </td>
            <td style={styles.item}>{index}</td>
            <td style={styles.name}>{element}</td>
            <td>
                <BtnRemove handleClick={handleRemove}/>
            </td>
        </tr>
    )
}

Item.propTypes = {
    element: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    itemForRemove: PropTypes.func.isRequired,
    itemSelected: PropTypes.func.isRequired,
    theClass: PropTypes.func.isRequired

}

export default Item
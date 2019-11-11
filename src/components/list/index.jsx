import React from 'react'
import Item from '../item'
import PropTypes from 'prop-types'

const styles = {
    table: {
        maxWidth: '320px',
        margin:'30px auto 20px'
    },
    bought: {
        paddingLeft:'1.3em'
    },
    action: {
        paddingLeft:'1.5em'
    }
}

const List = props => {
    const { 
        items, 
        itemForRemove, 
        itemSelected, 
        theClass } = props
    
    return(
        <div className="table-container">
            <table style={styles.table} className="table">
                <thead>
                    <tr>
                    <th style={styles.bought}>Bought</th>
                    <th>Item</th>
                    <th>Name</th>
                    <th style={styles.action}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((element,index) => (
                        <Item key={index}
                        index={index+1} 
                        element={element}
                        itemForRemove={itemForRemove}
                        itemSelected={itemSelected}
                        theClass={theClass}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    itemForRemove: PropTypes.func.isRequired,
    itemSelected: PropTypes.func.isRequired,
    theClass: PropTypes.func.isRequired
}

export default List

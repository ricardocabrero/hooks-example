import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    lineHeight: '1.2em',
    height: '2.4em'
}

const BtnRemove = props => {
    const { handleClick } = props
    return(
        <button
        style={styles} 
        onClick={handleClick}
        className='button is-primary is-light'>
        remove
        </button>
    )
}

BtnRemove.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default BtnRemove
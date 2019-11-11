import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    lineHeight: '1.2em',
    height: '2.4em'
}

const BtnSelected = (props) => {
    const { handleClick, theClass }  = props
    return(
        <button
        style={styles}
        className={theClass}
        onClick={handleClick}>select</button>
    )
}

BtnSelected.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default BtnSelected
import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    title: {
        padding: '15px 5px 15px',
        background: '#000',
        color:'#FFF',
        marginBottom: '55px',
        fontWeight: '700',
        letterSpacing: '0.01em'
    }
}

const Header = props => {
    const { title } = props
    return(
        <header>
            <h1 style={styles.title} className='title is-4'>{title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
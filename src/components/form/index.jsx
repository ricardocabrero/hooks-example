import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    strong: {
        fontWeight: 'bold'
    }
}

const Form = props => {
    const { handleInput } = props
    const [input, setInput] = useState('')

    const handleChange = ({target}) => {
        const { value } = target
        setInput(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleInput(input)
        setInput('')
    }

    return(
        <div style={styles.wrap}>
            <form 
            onSubmit={handleSubmit}
            className="field has-addons">
                <div className="control">
                    <input 
                    onChange={handleChange}
                    value={input}
                    className="input" 
                    type="text" 
                    placeholder="Add item to the list"/>
                </div>
                <div className="control">
                    <button style={styles.strong} className="button is-info">
                    Add +
                    </button>
                </div>
            </form>
        </div>
    )
}

Form.propTypes = {
    handleInput: PropTypes.func.isRequired  
}

export default Form
import React, {Component} from 'react'
import PropTypes from 'prop-types'

// React component
export default class Counter extends Component {
    render() {
        const {count, wish_value, onIncreaseClick, onUpdateClick} = this.props
        return (
            <div>
                <div>{count}</div>
                <input value={wish_value} type='text' onChange={onUpdateClick}/>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}
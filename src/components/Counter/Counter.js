import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../../features/counter/counterSlice'
import Weather from '../Weather/Weather'
import './Counter.less'

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className='body'>
      <div className='title'> Counter: {counter.value} </div>
      <div className='redux-counter'>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => decrement()}> - </button>
      </div>
      <Weather/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
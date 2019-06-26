import React from 'react';
import {connect} from 'react-redux'

// class I extends React.Component {
//     add = () => {
//         this.props.dispatch({
//             type: 'add',
//         })
//     }

//     minus = () => {
//         this.props.dispatch({
//             type: 'minus',
//         })
//     }

//     render () {
//         return (
//             <>
//                 <button onClick={this.add}>+</button>
//                 <span>{this.props.count}</span>
//                 <button onClick={this.minus}>-</button>
//             </>
//         )
//     }
// }

/**
 * @description react hook对比写法
 */ 

function I(props) {
    function add() {
        props.dispatch({
            type: 'add',
        })
    }

    function minus() {
        props.dispatch({
            type: 'minus',
        })
    }

    return (
        <>
            <button onClick={add}>+</button>
            <span>{props.count}</span>
            <button onClick={minus}>-</button>
        </>
    )
}

function a() {
    return function (params) {
        const _dispatch = function dispatch() {
            console.log('我是dispatch函数')
        }
        return {
            dispatch: function dispatch() {
                return _dispatch.apply(void 0, arguments)
            }
        }
    }
}

const b = a('我是参数')('我是参数二')

const Counter = connect(state => {
    return state
})(I);

export default Counter
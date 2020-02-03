import React, { Component } from 'react'

import { connect } from "react-redux";

import { addCourse, removeCourse } from '../actions/courseActions'

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

class Course extends Component {

  onAddHandler = (e) => {
    e.preventDefault();
    const{ data, addCourse, cart } = this.props
    if (cart.length < 7) {
        addCourse(data)
    } else {
        console.log("ERROR!")
    }
    
  }

  onRemoveHandler = (e) => {
    e.preventDefault();
    const{ data, removeCourse, cart, onRemoveHandler } = this.props
    if (cart.length > 0) {
        removeCourse(data)
        if (onRemoveHandler) {
          onRemoveHandler(data)
        }
    } else {
        console.log("ERROR!")
    }
  }

  onSelect = (e) => {
    e.preventDefault();
    const { data, onSelectHandler } = this.props
    onSelectHandler(data)
  }

  render() {
    const { data, cart } = this.props
    return (
      <div>
        {data ?
          <div>
              <span onClick={this.onSelect}>{data.dept}{data.number}</span>
              {cart.includes(data) ? 
              <button onClick={this.onRemoveHandler}>Added!</button>
              :
              <button onClick={this.onAddHandler}><AddCircleRoundedIcon fontSize='inherit'/></button> 
              }
          </div>
          :
          null
        }
      </div>

    )
  }
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };  

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (course) => {
            dispatch(addCourse(course))
        },
        removeCourse: (course) => {
          dispatch(removeCourse(course))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)

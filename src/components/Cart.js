import React, { Component } from 'react'

import Nav from "./Nav"

import { connect } from "react-redux";

import Courses from "./Courses"
import CourseDetail from "./CourseDetail"

import { Grid } from '@material-ui/core'

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      selected: null
    })
  }

  onSelectHandler = (course) => {
    this.setState({
      selected: course
    })
  }

  onRemoveHandler = (course) => {
    const { selected } = this.state
    if (selected === course) {
      this.setState({
        selected: null
      })
    }
  }

  render() {
    const { selected } = this.state
    const { cart } = this.props
    return (
      <div>
        <Nav />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7} >
            Cart
            {cart.length === 0 ?
              <div>Empty</div>
              :
              null
            }
            <Courses courses={cart} onSelectHandler={this.onSelectHandler} onRemoveHandler={this.onRemoveHandler} />
          </Grid>
          <Grid item xs={12} sm={5} >
            <CourseDetail course={selected}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart)

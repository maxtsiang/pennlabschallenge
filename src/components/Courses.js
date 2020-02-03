import React, { Component } from 'react'

import Course from './Course'

import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

class Courses extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      alert: false
    })
  }

  fireAlert = () => {
    this.setState({alert: true})
  }

  handleClose = () => {
    this.setState({alert: false})
  }

  render() {
    const { alert } = this.state
    const { courses } = this.props
    return (
      <div>
        {alert ? 
          <Snackbar open={alert} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <Alert onClose={this.handleClose} severity="error">
              You can't add more than 7 courses!
            </Alert>
          </Snackbar>
          :
          null
        }
        {courses.map((course) => {
          return (
            <Course data={course} fireAlert={this.fireAlert} {...this.props}/>
            );
        })}
      </div>
    )
  }
}

export default Courses

import React, { Component } from 'react'

import courses from '../data/courses'

import Nav from './Nav'
import Courses from './Courses'
import CourseDetail from './CourseDetail'

import { Grid } from '@material-ui/core'

class Home extends Component {

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

  render() {
    const { selected } = this.state
    return (
      <div>
        <Nav />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7} >
            <Courses courses={courses} onSelectHandler={this.onSelectHandler}/>
          </Grid>
          <Grid item xs={12} sm={5} >
            <CourseDetail course={selected}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Home;

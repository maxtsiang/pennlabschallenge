import React, { Component } from 'react'

import Course from './Course'

class Courses extends Component {

  render() {
    const { courses } = this.props
    return (
      <div>
        {courses.map((course) => {
          return (
            <Course data={course} {...this.props}/>
            );
        })}
      </div>
    )
  }
}

export default Courses

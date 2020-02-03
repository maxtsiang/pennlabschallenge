import React, { Component } from 'react'

class Courses extends Component {

  render() {

    const { course } = this.props
    return (
      <div>
          {course ? 
            <div>
              <div>{course.dept + course.number}: {course.title}</div>
              <div>{course.description}</div>
              {course.prereqs ?
                <div>
                  {course.prereqs.map((prereq) => {
                    return (
                      <div>{prereq}</div>
                    )
                  })}
                </div>
                :
                <div>
                  No prereqs
                </div>
              }
            </div>
            : 
            <div>
              Select a course
            </div>
          }

      </div>
    )
  }
}

export default Courses

import React, { Component } from "react";

import courses from "../data/courses";

import Nav from "./Nav";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";

import { Grid } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      courseFromApi: null
    };
  }

  onSelectHandler = course => {
    this.setState({
      selected: course
    });
    fetch(
      "https://api.pennlabs.org/registrar/search?q=" +
        course.dept +
        "-" +
        course.number
    )
      .then(res => res.json())
      .then(
        result => {
          if (result && result.courses.length > 0) {
            this.setState({
              courseFromApi: result.courses[0]
            });
          }
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    const { selected, courseFromApi } = this.state;

    return (
      <div>
        <Nav />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7} style={{ padding: 30 }}>
            <Courses
              selected={selected}
              courses={courses}
              onSelectHandler={this.onSelectHandler}
              {...this.props}
            />
          </Grid>
          <Grid item xs={12} sm={5} style={{ padding: 30 }}>
            <CourseDetail courseFromApi={courseFromApi} course={selected} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";

import { Typography } from "@material-ui/core";

class CourseDetail extends Component {
  render() {
    const { course, courseFromApi } = this.props;

    return (
      <div>
        {course ? (
          <div>
            <Typography variant="h3" color="inherit">
              {course.dept + course.number}
            </Typography>
            <Typography variant="h5" color="inherit">
              {course.title}{" "}
              {courseFromApi ? <div>({courseFromApi.credits})</div> : null}
            </Typography>
            <br />
            <Typography variant="body1" color="inherit">
              {course.description}
            </Typography>
            <br />
            {course.prereqs ? (
              <div>
                <Typography variant="body1" color="inherit">
                  <div style={{ fontStyle: "italic" }}>Prerequisites</div>
                  {course.prereqs.map(prereq => {
                    return <div>{prereq}</div>;
                  })}
                </Typography>
              </div>
            ) : (
              <Typography
                variant="body1"
                color="inherit"
                style={{ fontStyle: "italic" }}
              >
                No prerequisites.
              </Typography>
            )}
            <br />
            {courseFromApi &&
            courseFromApi.meetings.length > 0 &&
            courseFromApi.meetings[0] ? (
              <Typography variant="body1" color="inherit">
                Location: Room {courseFromApi.meetings[0].room_number},{" "}
                {courseFromApi.meetings[0].building_name}
              </Typography>
            ) : null}
          </div>
        ) : (
          <Typography variant="h4">Select a course</Typography>
        )}
      </div>
    );
  }
}

export default CourseDetail;

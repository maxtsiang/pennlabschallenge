import React, { Component } from "react";

import Course from "./Course";

import { Snackbar, Button, Menu, MenuItem } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      filterAnchor: null,
      filter: "",
      asc: true
    };
  }

  componentDidMount() {
    const { courses } = this.props;
    if (courses) {
      this.setState({ courses: courses });
    }
  }

  fireAlert = () => {
    this.setState({ alert: true });
  };

  handleClose = () => {
    this.setState({ alert: false });
  };

  handleFilterClick = e => {
    this.setState({ filterAnchor: e.currentTarget });
  };

  handleFilterSelect = value => {
    if (value === this.state.filter) {
      this.setState({ filter: null });
    } else {
      this.setState({
        filter: value
      });
    }
  };

  handleFilterClose = () => {
    this.setState({ filterAnchor: null });
  };

  handleSortClick = () => {
    this.setState(prev => ({
      asc: !prev.asc
    }));
  };

  render() {
    const { alert, filterAnchor, filter, asc } = this.state;
    const { courses } = this.props;

    let filteredCourses;
    if (filter) {
      if (filter === "no-prereqs") {
        filteredCourses = courses.filter(course => !Boolean(course.prereqs));
      }
    } else {
      filteredCourses = courses;
    }

    if (!asc) {
      let tempCourses = [...filteredCourses];
      filteredCourses = tempCourses.reverse();
    }

    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleFilterClick}
        >
          Filter
        </Button>
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={filterAnchor}
          open={Boolean(filterAnchor)}
          onClose={this.handleFilterClose}
        >
          <MenuItem onClick={() => this.handleFilterSelect("no-prereqs")}>
            {filter === "no-prereqs" ? (
              <div>
                No Prerequisites{" "}
                <DoneOutlinedIcon
                  fontSize="inherit"
                  style={{ marginBottom: -2 }}
                  color="primary"
                />
              </div>
            ) : (
              <div>No Prerequisites</div>
            )}
          </MenuItem>
        </Menu>

        <Button onClick={this.handleSortClick}>
          {asc ? (
            <div>
              <ArrowDownwardOutlinedIcon fontSize="inherit" />
            </div>
          ) : (
            <div>
              <ArrowUpwardOutlinedIcon fontSize="inherit" />
            </div>
          )}
        </Button>

        {alert ? (
          <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={this.handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={this.handleClose} severity="error">
              You can't add more than 7 courses!
            </Alert>
          </Snackbar>
        ) : null}
        {filteredCourses
          ? filteredCourses.map(course => {
              return (
                <Course
                  data={course}
                  fireAlert={this.fireAlert}
                  {...this.props}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default Courses;

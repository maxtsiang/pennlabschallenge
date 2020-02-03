import React, { Component } from "react";

import Nav from "./Nav";

import { connect } from "react-redux";

import Courses from "./Courses";
import CourseDetail from "./CourseDetail";

import { Grid, Typography } from "@material-ui/core";

import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

class Cart extends Component {
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
          //Handle error
        }
      );
  };

  onRemoveHandler = course => {
    const { selected } = this.state;
    if (selected === course) {
      this.setState({
        selected: null
      });
    }
  };

  render() {
    const { selected, courseFromApi } = this.state;
    const { cart } = this.props;
    return (
      <div>
        <Nav />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7} style={{ padding: 30 }}>
            <Typography
              variant="h4"
              color="inherit"
              style={{ paddingBottom: 10 }}
            >
              <ShoppingCartRoundedIcon
                fontSize="inherit"
                style={{ margin: -5 }}
              />{" "}
              Cart
            </Typography>
            <Courses
              isCartPage={true}
              selected={selected}
              courses={cart}
              onSelectHandler={this.onSelectHandler}
              onRemoveHandler={this.onRemoveHandler}
            />
            {cart.length === 0 ? (
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontStyle: "italic" }}
              >
                Empty
              </Typography>
            ) : null}
          </Grid>
          <Grid item xs={12} sm={5} style={{ padding: 30 }}>
            <CourseDetail courseFromApi={courseFromApi} course={selected} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(Cart);

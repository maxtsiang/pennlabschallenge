import React, { Component } from "react";

import { connect } from "react-redux";

import { addCourse, removeCourse } from "../actions/courseActions";

import { Grid, Button, Typography, Divider } from "@material-ui/core";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DeleteIcon from "@material-ui/icons/Delete";

class Course extends Component {
  onAddHandler = e => {
    e.preventDefault();
    const { data, addCourse, cart, fireAlert } = this.props;
    if (cart.length < 7) {
      addCourse(data);
    } else {
      fireAlert();
    }
  };

  onRemoveHandler = e => {
    e.preventDefault();
    const { data, removeCourse, cart, onRemoveHandler } = this.props;
    if (cart.length > 0) {
      removeCourse(data);
      if (onRemoveHandler) {
        onRemoveHandler(data);
      }
    }
  };

  onSelect = e => {
    e.preventDefault();
    const { data, onSelectHandler } = this.props;
    onSelectHandler(data);
  };

  render() {
    const { data, cart, isCartPage, selected } = this.props;
    return (
      <div>
        {data ? (
          <Grid
            container
            justify="space-between"
            spacing={0}
            style={{ padding: 5 }}
          >
            <Grid item onClick={this.onSelect} style={{ cursor: "pointer" }}>
              {selected === data ? (
                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ fontWeight: "bold" }}
                >
                  {data.dept}
                  {data.number}
                </Typography>
              ) : (
                <Typography variant="h6" color="inherit">
                  {data.dept}
                  {data.number}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {cart.includes(data) ? (
                <Button onClick={this.onRemoveHandler}>
                  {isCartPage ? (
                    <DeleteIcon color="secondary" />
                  ) : (
                    <CheckCircleRoundedIcon color="primary" />
                  )}
                </Button>
              ) : (
                <Button onClick={this.onAddHandler}>
                  <AddCircleRoundedIcon color="action" />
                </Button>
              )}
            </Grid>
          </Grid>
        ) : null}
        <Divider light />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => {
      dispatch(addCourse(course));
    },
    removeCourse: course => {
      dispatch(removeCourse(course));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);

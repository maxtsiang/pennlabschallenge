import React, { Component } from 'react'
import {Link} from "react-router-dom"

import { connect } from "react-redux";

import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'

class Nav extends Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          <Grid container justify="space-between" spacing={1}>
            <Grid item>
              <Link to={"/"}>
                <Typography variant="title" color="inherit">
                  Penn Course Cart
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/cart"}>
                <Typography variant="title" color="inherit">
                  Cart {cart.length}
                </Typography>
              </Link>
            </Grid>
          </Grid>
            
          </Toolbar>
        </AppBar>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Nav);

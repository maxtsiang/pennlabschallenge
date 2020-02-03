import React, { Component } from 'react'
import {Link} from "react-router-dom"

import { connect } from "react-redux";

import { AppBar, Toolbar, Typography, Grid, Button, TextField } from '@material-ui/core'

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

class Nav extends Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
          <Grid container justify="space-between" spacing={0}>
            <Grid item>
              <Typography variant="title" color="inherit">
                <Button color="inherit" component={Link} to="/">
                  Penn Course Cart
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="title" color="inherit">
                <Button color="inherit" component={Link} to="/cart">
                  <ShoppingCartRoundedIcon /> {cart.length}
                </Button>
              </Typography>
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

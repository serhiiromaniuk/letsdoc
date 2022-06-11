import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { LoginStyles } from "./styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import axios from 'axios';

import { api, opt, makeLogin } from '../../../Utils'
import { CustomParagraph } from '../../../Styles';
import { NavLink } from "react-router-dom";
import AppPannel from '../../../AppPannel';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      passwordConfrim: "",
      hidePassword: true,
      hidePasswordConfirm: true,
      error: null,
      errorOpen: false
    };
    // this.delta = this.delta.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }


  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  showPasswordConfirm = () => {
    this.setState(prevState => ({ hidePasswordConfirm: !prevState.hidePasswordConfirm }));
  };

  isValid = () => {
    if (this.state.email === "" || this.state.password === "" || this.state.passwordConfrim === "") {
      return false;
    }
    return true;
  };

  isValidRegister = () => {
    return true;
  };

  submitLogin = (e) => {
    e.preventDefault();
    if (!this.passwordMatch()) {
      this.setState({
        errorOpen: true,
        error: "Password are not equal"
      });
    } else {
      if (this.state.password.length <= 6) {
        this.setState({
          errorOpen: true,
          error: "Incorrect password"
        });
      } else {
        const url = api.post.auth.user.login;
        const data = {
            email:    this.state.email,
            password: this.state.password
        };
        let externalState = this;
    
        axios.post(url, data, opt)
          .then(
            function(res) {
              makeLogin(res.data.ok)
            }
          ).catch(
            function(err) {
              if (!!err.response.data.failed) {
                externalState.setState({
                  errorOpen: true,
                  error: err.response.data.failed
                });
              }
            }
          );
      }
    }

  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <AppPannel/>
      <div className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PeopleAltIcon className={classes.icon} />
          </Avatar>
         
          <form
            className={classes.form}
            onSubmit={() => this.submitLogin}
          >
            <div className={classes.text}>
              <p>Login into Service App</p>
            </div>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" className={classes.labels}>
                Email Address
              </InputLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("email")}
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="password" className={classes.labels}>
                Password
              </InputLabel>
              <Input
                name="password"
                autoComplete="password"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("password")}
                type={this.state.hidePassword ? "password" : "input"}
                endAdornment={
                  this.state.hidePassword ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="passwordConfrim" className={classes.labels}>
                Confrim Password
              </InputLabel>
              <Input
                name="passwordConfrim"
                autoComplete="passwordConfrim"
                className={classes.inputs}
                disableUnderline={true}
                onClick={this.state.showPassword}
                onChange={this.handleChange("passwordConfrim")}
                type={this.state.hidePasswordConfirm ? "password" : "input"}
                endAdornment={
                  this.state.hidePasswordConfirm ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPasswordConfirm}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPasswordConfirm}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>
            <Button
              disabled={!this.isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.submitLogin}
            >
              Login
            </Button>

            <NavLink to='/register'>
              <Button
              // disabled={!this.isValidRegister()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.register_button}
              type="button"
              >
              Register
              </Button>
            </NavLink>

          </form>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={10000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
      </>
    );
  }
}

export default withStyles(LoginStyles)(Login);

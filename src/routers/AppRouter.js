import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Main, About, Portfolio, Cv, NotFound } from '../components';

class AppRouter extends Component {
  state = {
    drawerOpen: false,
    navClass: '',
    handleToggleButtonClassName: 'drawer-button'
  };

  handleDrawerToggleButton = () => {
    if (!this.state.drawerOpen) {
      this.setState(() => ({
        handleToggleButtonClassName: 'drawer-button rotate-in'
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
          navClass: 'toolbar__navigation',
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out'
        }));
      }, 400);
    } else {
      this.setState(() => ({
        navClass: 'toolbar__navigation__out',
        handleToggleButtonClassName: 'drawer-button rotate-in rotate-out'
      }));

      setTimeout(() => {
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in '
        }));
      }, 800);

      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
          handleToggleButtonClassName: 'drawer-button'
        }));
      }, 1700);
    }
  };

  onMouseOverToggleButton = () => {

  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            isOpen={this.state.drawerOpen}
            handleDrawerToggleButton={this.handleDrawerToggleButton}
            navClass={this.state.navClass}
            handleToggleButtonClassName={this.state.handleToggleButtonClassName}
          />
          <Main>
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/cv" component={Cv} exact />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

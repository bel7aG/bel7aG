import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Main, About, Portfolio, Cv, NotFound } from '../components';

class AppRouter extends Component {
  state = {
    drawerOpen: false,
    navClass: '',
    handleToggleButtonClassName: 'drawer-button',
    isHoverToggleButton: false,
    mainClassName: 'main'
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
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out',
          mainClassName: 'main hidden'

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
          handleToggleButtonClassName: 'drawer-button',
          mainClassName: 'main'
        }));
      }, 1700);
    }
  };

  isHoverToggleButton = () => {
    switch (this.state.handleToggleButtonClassName) {
      case 'drawer-button':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button hover-in'
        }));
        break;
      case 'drawer-button rotate-in rotate-out':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out hover-out'
        }));
        break;
      case 'drawer-button hover-in':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button'
        }));
        break;
      case 'drawer-button rotate-in rotate-out hover-out':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out'
        }));
        break;
      default:
        break;
    }
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
            isHoverToggleButton={this.isHoverToggleButton}
          />
          <Main className={this.state.mainClassName}>
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

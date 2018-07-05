import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, About, Portfolio, Cv, NotFound } from '../components';

class AppRouter extends Component {
  state = {
    drawerOpen: false,
    class: 'toolbar__navigation'
  };

  handleDrawerToggleButton = () => {
    if (!this.state.drawerOpen) {
      this.setState(() => ({
        class: 'toolbar__navigation'
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
        }));
      }, 800);

    } else {
      this.setState(() => ({
        class: 'toolbar__navigation__out'
      }));
      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
        }));
      }, 1600);

    }
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            isOpen={this.state.drawerOpen}
            handleDrawerToggleButton={this.handleDrawerToggleButton}
            class={this.state.class}
          />
          <Switch>
            <Route path="/" component={About} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/cv" component={Cv} exact />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default AppRouter;

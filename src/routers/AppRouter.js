import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, About, Portfolio, NotFound, Cv } from '../components';

class AppRouter extends Component {
  state = {
    drawerOpen: false
  };

  handleDrawerToggleButton = () => {
    console.log(this.state.drawerOpen);
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            isOpen={this.state.drawerOpen}
            handleDrawerToggleButton={this.handleDrawerToggleButton}
          />
          <Switch>
            <Route path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/cv" component={Cv} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default AppRouter;

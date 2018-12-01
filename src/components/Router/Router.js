import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Main, About, Portfolio, Contact, NotFound, TurnAround } from '../'

class Router extends Component {
  state = {
    drawerOpen: false,
    navClass: '',
    handleToggleButtonClassName: 'drawer-button',
    isHoverToggleButton: false,
    isToggleButtonClicked: false,
    mainClassName: 'main'
  }

  handleDrawerToggleButton = () => {
    if (!this.state.drawerOpen) {
      this.setState(() => ({
        handleToggleButtonClassName: 'drawer-button rotate-in',
        isToggleButtonClicked: true
      }))

      setTimeout(() => {
        this.setState(() => ({
          isToggleButtonClicked: false
        }))
      }, 1900)

      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
          navClass: 'toolbar__navigation',
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out',
          mainClassName: 'main hidden'
        }))
      }, 400)


    } else {
      this.setState(() => ({
        navClass: 'toolbar__navigation__out',
        handleToggleButtonClassName: 'drawer-button rotate-in rotate-out',
        isToggleButtonClicked: true
      }))

      setTimeout(() => {
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in '
        }))
      }, 800)

      setTimeout(() => {
        this.setState((prevState) => ({
          drawerOpen: !prevState.drawerOpen,
          handleToggleButtonClassName: 'drawer-button',
          mainClassName: 'main',
          isToggleButtonClicked: false
        }))
      }, 1700)
    }
  }

  isHoverToggleButton = () => {
    switch (this.state.handleToggleButtonClassName) {
      case 'drawer-button':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button hover-in'
        }))
        break

      case 'drawer-button hover-in':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button'
        }))
        break

      case 'drawer-button rotate-in rotate-out':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out hover-out'
        }))
        break

      case 'drawer-button rotate-in rotate-out hover-out':
        this.setState(() => ({
          handleToggleButtonClassName: 'drawer-button rotate-in rotate-out'
        }))
        break

      default:
        break
    }
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            isOpen={this.state.drawerOpen}
            pages={this.props.pages}
            handleDrawerToggleButton={this.handleDrawerToggleButton}
            navClass={this.state.navClass}
            handleToggleButtonClassName={this.state.handleToggleButtonClassName}
            isHoverToggleButton={this.isHoverToggleButton}
            isToggleButtonClicked={this.state.isToggleButtonClicked}
          />
          <Main className={this.state.mainClassName}>
            <Switch>
              <Route path="/" component={About} exact />
              <Route path="/portfolio" component={Portfolio} exact />
              <Route path="/contact" component={Contact} exact />
              <Route component={NotFound} />
            </Switch>
          </Main>
          <TurnAround />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router

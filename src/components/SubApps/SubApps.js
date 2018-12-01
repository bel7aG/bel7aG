import React, { Component } from 'react'
import AppPerson from './TodoPerson'

export default class SubApp extends Component {
  render() {
    return (
      <div className="sub-app">
        <AppPerson />
      </div>
    )
  }
}

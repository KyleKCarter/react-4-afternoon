import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();
    this.state ={
      studentInfo: {}
    }
  }

  componentDidMount = () => {
    axios.get(`/students/${this.props.match.params.id}`)
    .then(response => {
      this.setState({studentInfo: response.data});
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    console.log(this.state.studentInfo)
    return (
      <div className="box">
       <Link to={`/classlist/${this.state.studentInfo.class}`}>
        <h2>{'<'} Back</h2>
       </Link>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}
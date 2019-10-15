import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
    axios.get(`/students?class=${this.props.match.params.class}`
    ).then(response => {
      this.setState({ students: response.data });
      console.log(this.state.students);
    })
      .catch(error => {
        console.log(error);
      })
  }

  

  render() {
    const students = this.state.students.map((student, i) => {
      return (
        <Link key={i} to={`/student/${student.id}`}>
          <h3>
            {student.first_name} {student.last_name}
          </h3>
        </Link>
      )
    });
    return (
      <div className="box">
        <Link to={'/'}>
          <h2>{'<'} back</h2>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>Class List:</h2>
        {students}
      </div>
    )
  }
}
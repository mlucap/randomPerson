import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }


  render() {

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div className="center">Loading...</div>
        ) : (
          <div className="desc">
            {/* <h1>Random Person Generator</h1>
            <div>Title: {this.state.person.name.title}</div>
            <div>First: {this.state.person.name.first}</div>
            <div>Last: {this.state.person.name.last}</div>
            <div>Age: {this.state.person.dob.age}</div>
            <img alt="a" src={this.state.person.picture.large}/> */}
<Card>
  <Card.Header as="h5">Randomly Generated Person</Card.Header>
  <Card.Body>
    <Card.Title>This person is completely randomly generated using an API!</Card.Title>
    <Card.Text>
      <img alt="thumbnail" src={this.state.person.picture.large}/>
      <div><b>Name:</b> {this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</div>
      <div><b>Age:</b> {this.state.person.dob.age}</div>
      <div><b>Date of Birth:</b> {new Date(this.state.person.dob.date).toDateString()}</div>
      <div><b>Address:</b> {this.state.person.location.street.number} {this.state.person.location.street.name} </div>
      <div><b>City:</b> {this.state.person.location.city} </div>
      <div><b>State:</b> {this.state.person.location.state} </div>
      <div><b>Country:</b> {this.state.person.location.country} </div>
      <div><b>Home Phone Number:</b> {this.state.person.phone} </div>
      <div><b>Cell Phone Number:</b> {this.state.person.cell} </div>
    </Card.Text>
    <Button variant="primary" onClick={refreshPage}>Generate Another Person</Button>
  </Card.Body>
</Card>
          </div>
        )}
      </div>
    );
  }

}

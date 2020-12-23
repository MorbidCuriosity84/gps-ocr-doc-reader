import React, { Component } from 'react';
import './App.css';
import MyForm from "./Components/MyForm";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar";
import MyTable from "./Components/MyTable";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      upload: true
    };

    this.changeState = this.changeState.bind(this)
  }


  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('http://localhost:5000/');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  changeState(state) {
    this.setState({
      data: state.data,
      upload: state.upload
    })
  }

  render() {
    return (
        <div className="App">
          <div>
            <Header />
          </div>
          <div>
            <MyNavbar changeState = {this.changeState}/>
          </div>
          <p className="App-intro">{this.state.data}</p>
          {this.state.upload ? <MyForm/> : <MyTable/> }
        </div>
    );
  }
}

export default App;

import { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
//import { robo } from "./robo";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = { robo: [], searchfield: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        return Response.json();
      })
      .then((user) => {
        this.setState({ robo: user });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // console.log(event.target.value);
  };
  render() {
    const { robo, searchfield } = this.state;
    const chooseRobro = robo.filter((robo) => {
      return robo.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robo.length ? (
      <h1>loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Robr0z</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robo={chooseRobro} />
        </Scroll>
      </div>
    );
  }
}

export default App;

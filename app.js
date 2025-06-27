const Header = (props) => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.playersNumber}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.player.name}
      </span>
      <Score />
    </div>
  );
}

class Score extends React.Component {
  state = { score: 0 };
  decrement = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  }
  increment = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrement}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.increment}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      { name: "Alice", id: 0 },
      { name: "Bob", id: 0 },
      { name: "Charlie", id: 0 },
      { name: "Kay", id: 0 }
    ]
  };
  render() {
    return (
      <div>
        <Header playersNumber={this.state.players.length} />
        <Player player={this.state.players[0]} />
        <Player player={this.state.players[1]} />
        <Player player={this.state.players[2]} />
        <Player player={this.state.players[3]} />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
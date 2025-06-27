const Header = (props) => {
  return (
    <header>
      <h1>Casino Chips</h1>
      <span className="stats">Players: {props.playersNumber}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.player.id)}>🗑</button>
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
  bankrupt = () => {
    this.setState(() => ({
      score: -1
    }));
  }
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrement}>-</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.increment}>+</button>
        <button className="counter-action increment" onClick={this.bankrupt}>❌</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      { name: "Alice", id: 1 },
      { name: "Bob", id: 2 },
      { name: "Charlie", id: 3 },
      { name: "Kay", id: 4 }
    ]
  };
  removePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    })
  }
  render() {
    return (
      <div>
        <Header playersNumber={this.state.players.length} />
        {this.state.players.map(player =>
          <Player player={player} key={player.id.toString()} removePlayer={this.removePlayer} />
        )}
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
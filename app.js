const Header = (props) => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: {props.players}</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        name
      </span>
      <Score />
    </div>
  );
}

class Score extends React.Component {
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement">-</button>
        <span className="counter-score">30</span>
        <button className="counter-action increment">+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header players="3" />
        <Player />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
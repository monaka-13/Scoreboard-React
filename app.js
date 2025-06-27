const Header = (props) => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">players: {props.players}</span>
    </header>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header players="3" />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
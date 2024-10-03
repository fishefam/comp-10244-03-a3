main();

function main() {
  console.log('git');
  const container = document.querySelector('#root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

function App() {
  return <h1>Hello</h1>;
}

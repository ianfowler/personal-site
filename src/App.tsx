import logo from "./logo.svg";

const App = () => {
  return (
    <div className="bg-sky-200">
      <header className="">
        <img src={logo} className="" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

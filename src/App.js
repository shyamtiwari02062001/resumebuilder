import "./App.css";
import FormBody from "./components/formbody";
import Progress from "./components/progressbar";
const App = () => {
  return (
    <div className="App">
      <Progress />
      <br />
      <br />
      <FormBody />
    </div>
  );
};

export default App;

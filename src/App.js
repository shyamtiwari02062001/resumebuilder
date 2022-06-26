import "./css/App.css";
import FormBody from "./components/formbody";
import Progress from "./components/progressbar";
import { ResumeDetailsProvider } from "./indexContext";
const App = () => {
  return (
    <ResumeDetailsProvider>
      <div className="App">
      <Progress />
      <br />
      <br />
      <FormBody />
    </div>
    </ResumeDetailsProvider>
  );
};

export default App;

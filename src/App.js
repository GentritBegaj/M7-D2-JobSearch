import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MainSearch from "../src/components/MainSearch";
import JobDetails from "../src/components/JobDetails";

function App() {
  const [selectedJob, setSelectedJob] = useState({});

  const selectJobHandler = (data) => {
    setSelectedJob(data);
  };

  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Route
        path="/"
        exact
        render={(routerProps) => (
          <MainSearch {...routerProps} selectJobHandler={selectJobHandler} />
        )}
      />
      <Route path="/:id" exact>
        <JobDetails data={selectedJob} />
      </Route>
    </Router>
  );
}

export default App;

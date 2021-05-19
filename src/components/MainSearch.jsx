import React, { useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import SearchResult from "./SearchResult";

function MainSearch(props) {
  const [searchInput, setSearchInput] = useState({
    what: "",
    where: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  const inputUpdateHandler = (event) => {
    setSearchInput({ ...searchInput, [event.target.id]: event.target.value });
  };

  const searchHandler = async () => {
    try {
      if (searchResults.length !== 0) {
        setSearchResults([]);
      }
      setIsLoading(true);
      const response = await fetch(
        `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json${
          searchInput.what.length !== 0
            ? `?description=${searchInput.what}`
            : ""
        }${
          searchInput.where.length !== 0
            ? searchInput.what.length === 0
              ? `?location=${searchInput.where}`
              : `&location=${searchInput.where}`
            : ""
        }`
      );
      const data = await response.json();
      if (data) {
        setSearchInput({
          what: "",
          where: "",
        });
        setSearchResults(data);
        setIsLoading(false);
      } else {
        setErrors(data);
        setShowErrors(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <h5 className="font-weight-bold">Search new jobs</h5>
      <div id="main-search">
        <Row className="align-items-end">
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">What</h5>
            <input
              type="text"
              id="what"
              placeholder="Ex. Software Developer"
              className="w-100"
              onChange={(e) => inputUpdateHandler(e)}
              value={searchInput.what}
            />
          </Col>
          <Col xs={5}>
            <h5 className="mb-1 ml-1 font-weight-bold">Where</h5>
            <input
              type="text"
              id="where"
              placeholder="Ex. London"
              className="w-100"
              onChange={(e) => inputUpdateHandler(e)}
              value={searchInput.where}
            />
          </Col>
          <Col xs={12}>
            <Button className="search-btn my-1" onClick={searchHandler}>
              Search Jobs
            </Button>
          </Col>
        </Row>
      </div>

      <div id="search-results" className="mt-4">
        {isLoading && (
          <div className="d-flex align-items-center">
            <span className="font-weight-bold">Loading...</span>
          </div>
        )}
        {
          <Row>
            {searchResults.length > 0 &&
              searchResults.map((result, i) => (
                <SearchResult
                  key={i}
                  data={result}
                  selectJobHandler={props.selectJobHandler}
                />
              ))}
          </Row>
        }
      </div>
    </Container>
  );
}

export default MainSearch;

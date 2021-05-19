import React from "react";
import { Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function SearchResult(props) {
  const moreDetailHandler = () => {
    props.selectJobHandler(props.data);
    props.history.push(`/${props.data.id}`);
  };

  return (
    <Col xs={6}>
      <div className="search-result mb-3">
        <h2 className="font-weight-bold mb-0">{props.data.title}</h2>
        <p className="font-weight-bold mb-3">{props.data.location}</p>
        <div className="d-flex">
          <img
            src={props.data.company_logo}
            className="mr-3"
            alt="company-logo"
          />
          <div>
            <h5 className="font-weight-bold mb-0">{props.data.company}</h5>
            <a href={props.data.company_url} target="_blank">
              {props.data.company_url}
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-4">
          <p className="job-type mb-0">{props.data.type}</p>
          <Button
            variant="dark"
            className="px-4 mb-0"
            style={{ fontSize: 14 }}
            onClick={moreDetailHandler}
          >
            More details
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default withRouter(SearchResult);

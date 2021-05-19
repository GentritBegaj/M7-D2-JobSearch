import React from "react";
import { Button } from "react-bootstrap";

function JobDetails(props) {
  console.log(props);

  const jobDetailsAsHTML = () => {
    return { __html: props.data.description };
  };

  return (
    <div id="job-detail-main">
      <h1 className="font-weight-bold mb-0">
        {props.data.title} - {props.data.type}
      </h1>
      <h3 className="mb-4">{props.data.location}</h3>
      <div className="d-flex mb-5">
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
      <div dangerouslySetInnerHTML={jobDetailsAsHTML()}></div>
      <Button variant="dark" className="px-5 py-3 mt-5">
        Apply Now!
      </Button>
    </div>
  );
}

export default JobDetails;

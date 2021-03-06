import React from "react";
import SectionTitle from "../SectionTitle";
import PropTypes from "prop-types";

export default function ResultItem({ label, img, text, location }) {
  return (
    <div
      style={{
        marginBottom: "10px",
        display: "flex",
        borderBottom: "1px solid",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      {img && (
        <div>
          <img
	    alt = ""
            style={{
              marginRight: "50px",
              maxWidth: "250px",
              maxHeight: "200px",
              minWidth: "200px"
            }}
            src={img}
          />
        </div>
      )}
      <div style={{ maginBottom: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "500px"
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <SectionTitle label={label} />
            <div
              style={{ font: "Helvetica", fontSize: "14px", color: "#5D5D5D" }}
            >
              in {location}
            </div>
          </div>
          <body
            style={{
              marginBottom: "25px",
              font: "Helvetica",
              fontSize: "14px",
              color: "#5D5D5D"
            }}
          >
            {" "}
            {text}{" "}
          </body>
        </div>
      </div>
    </div>
  );
}

ResultItem.propTypes = {
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

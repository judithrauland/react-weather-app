import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              id="city-input"
              autocomplete="off"
            />
            <div className="col-1">
              <button
                type="submit"
                className="btn btn-light"
                id="search-button"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>City</h1>
        <ul>
          <li>Last updated:</li>
          <li>Description</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">Icon</div>
          <div className="float-left">Temperature °C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: %</li>
            <li>Wind: m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

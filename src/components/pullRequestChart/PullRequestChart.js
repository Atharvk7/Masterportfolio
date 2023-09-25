import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        
      ],
    };

    return (
      <div className="pr-chart">
       
      </div>
    );
  }
}

export default PullRequestChart;

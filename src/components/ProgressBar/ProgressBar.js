import React from "react";
import PropTypes from "prop-types";
import { getWidthAsPercentOfTotalWidth } from "../../utils/percentUtils";

class ProgressBar extends React.Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return "green";
    return this.props.percent > 50 ? "lightgreen" : "red";
  };

  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  };

  render() {
    const { percent, width, height } = this.props;
    return (
      <div style={{ border: "solid 1px lightgray", width: width }}>
        <div
          style={{
            width: getWidthAsPercentOfTotalWidth(
              this.props.percent,
              this.props.width
            ),
            height,
            backgroundColor: this.getColor(percent),
          }}
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

ProgressBar.defaultProps = {
  height: 5,
};
export default ProgressBar;

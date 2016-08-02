import React from 'react';
import rd3 from 'react-d3';

const { LineChart } = rd3;

const createClass = (chartType) => {
  class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = { size: { w: 0, h: 0 } };
    }

    fitToParentSize() {
      const w = this.refs.wrapper.offsetWidth - 20;
      const h = this.refs.wrapper.offsetHeight - 20;
      const currentSize = this.state.size;
      if (w !== currentSize.w || h !== currentSize.h) {
        this.setState({
          size: { w, h },
        });
      }
    }

    getChartClass() {
      if (chartType === 'LineChart') {
        return LineChart;
      }

      console.error('Invalid Chart Type name.');
    }

    componentDidMount() {
      window.addEventListener('resize', ::this.fitToParentSize);
      this.fitToParentSize();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', ::this.fitToParentSize);
    }

    render() {
      const { duration, margin, ...others } = this.props;
      let Component = this.getChartClass();
      let width = this.props.width;
      let height = this.props.height;
      width = this.state.size.w || 100;
      height = this.state.size.h || 100;
      return (
        <div className="chart-wrapper" ref="wrapper">
          <Component
            width = {width}
            height = {height}
            margin = {margin}
            {...others}
          />
        </div>
      );
    }
  }

  Chart.defaultProps = {
    margin: {
    },
  };

  Chart.propTypes = {
    duration: React.PropTypes.array.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    margin: React.PropTypes.object,
  };
  return Chart;
};

const ResponsiveLineChart = createClass('LineChart');

export {
  ResponsiveLineChart
};

export default {
  ResponsiveLineChart
};
import classNames from 'classnames';
import React from 'react';
import Highcharts from 'highcharts';

const Chart = (props) => {
  const { children, className, ...others } = props;
  const classes = classNames (
    'chart',
    className
  );

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  );
};

Chart.propTypes = {
  children: React.PropTypes.node
};

export default Chart;

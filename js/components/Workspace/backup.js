import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
/*import { LineChart } from 'react-d3';*/
import { LineChart } from 'rd3';

import Widget from '../Widget';

import Highcharts from '../Highcharts';
import HighchartsOptions from '../Highcharts/samples';

/*import D3chart from '../D3chart';*/
import { ResponsiveLineChart } from '../D3chart/responsive';
import D3chartOptions from '../D3chart/samples';
import D3chartColors from '../D3chart/colors';

import './index.styl';

class Workspace extends Component {
    render() {
        const styles = {
            widgetContent: {
                position: 'absolute',
                top: 34,
                left: 0,
                right: 0,
                bottom: 0,
                padding: 10
            }
        };
        const layout = [
            { i: 'pie-chart', x: 0, y: 0, w: 6, h: 12, minW: 2, maxW: 8 },
            { i: 'line-chart', x: 6, y: 0, w: 6, h: 12, minW: 2, maxW: 8 },
            { i: 'bar-chart', x: 0, y: 2, w: 6, h: 12, minW: 2, maxW: 8 },
            { i: 'react-d3-line-chart', x: 6, y: 2, w: 6, h: 12, minW: 4, maxW: 8 }
        ];

        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <Widget key="pie-chart">
                    <Widget.Header>
                        <Widget.Title>Hicharts - Pie Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>

                    <Widget.Content style={styles.widgetContent}>
                        <Highcharts container="highcharts-pie" options={HighchartsOptions.pie} />
                    </Widget.Content>
                </Widget>

                <Widget key="line-chart">
                    <Widget.Header>
                        <Widget.Title>Hicharts - Line Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>

                    <Widget.Content style={styles.widgetContent}>
                        <Highcharts container="highcharts-line" options={HighchartsOptions.lines} />
                    </Widget.Content>
                </Widget>

                <Widget key="bar-chart">
                    <Widget.Header>
                        <Widget.Title>Hicharts - Bar Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>

                    <Widget.Content style={styles.widgetContent}>
                        <Highcharts container="highcharts-bar" options={HighchartsOptions.bar} />
                    </Widget.Content>
                </Widget>

                <Widget key="react-d3-line-chart" id="react-d3-line-chart">
                    <Widget.Header>
                        <Widget.Title>React D3 - Line Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>

                    <Widget.Content style={styles.widgetContent}>
                        <LineChart
                            legend={true}
                            data={D3chartOptions.lines.series}
                            width="100%"
                            height="100%"
                            viewBoxObject={{
                                x: 0,
                                y: 0,
                                width: 500,
                                height: 400
                            }}
                            title={D3chartOptions.title}
                            yAxisLabel={D3chartOptions.lines.yAxis.title}
                            xAxisLabel={D3chartOptions.lines.xAxis.title}
                            gridHorizontal={true}
                            showTooltip={true}
                            colors={D3chartColors}
                        />
                    </Widget.Content>
                </Widget>
            </GridLayout>
        );
    }
}

export default Workspace;

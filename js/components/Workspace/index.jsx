import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import Widget from '../Widget';
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
            { i: 'pie-chart', x: 0, y: 0, w: 4, h: 2, static: true },
            { i: 'line-chart', x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 8 },
            { i: 'bar-chart', x: 6, y: 0, w: 2, h: 2, minW: 2, maxW: 8 }
        ];

        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <div key={'pie-chart'}>
                    <Widget>
                        <Widget.Header>
                            <Widget.Title>Pie Chart</Widget.Title>
                            <Widget.Controls>
                                <Widget.Button
                                    type="delete"
                                />
                            </Widget.Controls>
                        </Widget.Header>
                        <Widget.Content style={styles.widgetContent}>
                            Pie Chart
                        </Widget.Content>
                    </Widget>
                </div>
                <div key={'line-chart'}>
                    <Widget>
                        <Widget.Header>
                            <Widget.Title>Line Chart</Widget.Title>
                            <Widget.Controls>
                                <Widget.Button
                                    type="delete"
                                />
                            </Widget.Controls>
                        </Widget.Header>
                        <Widget.Content style={styles.widgetContent}>
                            Line Chart
                        </Widget.Content>
                    </Widget>
                </div>
                <div key={'bar-chart'}>
                    <Widget>
                        <Widget.Header>
                            <Widget.Title>Bar Chart</Widget.Title>
                            <Widget.Controls>
                                <Widget.Button
                                    type="delete"
                                />
                            </Widget.Controls>
                        </Widget.Header>
                        <Widget.Content style={styles.widgetContent}>
                            Bar Chart
                        </Widget.Content>
                    </Widget>
                </div>
            </GridLayout>
        );
    }
}

export default Workspace;

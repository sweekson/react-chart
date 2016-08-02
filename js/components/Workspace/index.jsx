import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

import Widget from '../Widget';

import Paperchart from '../Paperchart';
import PaperchartOptions from '../Paperchart/samples';

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
            { i: 'paper-bar-chart', x: 0, y: 1, w: 6, h: 12, minW: 2, maxW: 8 }
        ];

        return (
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                width={1200}
            >
                <Widget key="paper-bar-chart">
                    <Widget.Header>
                        <Widget.Title>Paper - Line Chart</Widget.Title>
                        <Widget.Controls>
                            <Widget.Button type="edit" />
                            <Widget.Button type="toggle" />
                            <Widget.Button type="fullscreen" />
                            <Widget.Button type="delete" />
                        </Widget.Controls>
                    </Widget.Header>

                    <Widget.Content style={styles.widgetContent}>
                        <Paperchart.BarChart data={PaperchartOptions.bar} />
                    </Widget.Content>
                </Widget>
            </GridLayout>
        );
    }
}

export default Workspace;

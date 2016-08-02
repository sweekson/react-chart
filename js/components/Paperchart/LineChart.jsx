import React, { Component } from 'react';
import paper, { Path, Point, Size, PointText} from 'paper';

const defaults = {
    margin: {
        left: 60,
        right: 20,
        top: 20,
        bottom: 60
    }
};

export default class LineChart extends Component {
    componentDidMount () {
        this.draw();
    }

    drawLines () {
        new Path.Line({
            from: [10, 30],
            to: [280, 30],
            strokeColor: '#999',
            strokeWidth: 1,
            dashArray: [3, 3]
        });

        new Path.Line({
            from: [10, 80],
            to: [280, 80],
            strokeColor: '#999',
            strokeWidth: 1,
            dashArray: [3, 3]
        });
    }

    drawRects (x, y, width, height, fill) {
        return new Path.Rectangle({
            point: [x, y],
            size: [width, height],
            fillColor: fill
        });
    }

    drawAxes () {
        // xAxis
        new Path.Line({
            from: [10, 130],
            to: [280, 130],
            strokeColor: 'black',
            strokeWidth: 1
        });

        // yAxis
        new Path.Line({
            from: [10, 10],
            to: [10, 130],
            strokeColor: 'black',
            strokeWidth: 1
        });
    }

    drawTitles (xAxis, yAxis) {
        new PointText({
            point: [50, 50],
            content: 'Title',
            fillColor: '#222',
            fontFamily: 'Courier New',
            fontSize: 14
        });
    }

    draw () {
        const { colors } = this.props;

        paper.setup(this.refs.canvas);
        
        this.drawRects(140, 49, 30, 80, '#ccccff');
        this.drawRects(180, 69, 30, 60, '#ccffcc');
        this.drawRects(220, 59, 30, 70, '#ffcccc');

        paper.view.draw();
    }

    render () {
        const { className } = this.props;

        return (
            <canvas ref="canvas" data-paper-resize="true"></canvas>
        );
    }
}
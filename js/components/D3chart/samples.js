const lines = {
    title: {
        text: 'Line Chart'
    },
    xAxis: {
        title: 'AltitudeElapsed Time (sec)'
    },
    yAxis: {
        title: 'Altitude'
    },
    series: [{
        name: "series1",
        values: [
            { x: 0, y: 22 },
            { x: 1, y: 39 },
            { x: 2, y: 63 },
            { x: 3, y: 43 },
            { x: 4, y: 52 },
            { x: 5, y: 31 },
            { x: 6, y: 66 },
            { x: 7, y: 56 },
            { x: 8, y: 42 },
            { x: 9, y: 33 },
            { x: 10, y: 69 }
        ]
    }, {
        name: "series2",
        values: [
            { x: 0, y: 38 },
            { x: 1, y: 47 },
            { x: 2, y: 22 },
            { x: 3, y: 27 },
            { x: 4, y: 48 },
            { x: 5, y: 51 },
            { x: 6, y: 46 },
            { x: 7, y: 38 },
            { x: 8, y: 44 },
            { x: 9, y: 23 },
            { x: 10, y: 18 }
        ]
    }, {
        name: "series3",
        values: [
            { x: 0, y: 35 },
            { x: 1, y: 41 },
            { x: 2, y: 32 },
            { x: 3, y: 33 },
            { x: 4, y: 56 },
            { x: 5, y: 40 },
            { x: 6, y: 43 },
            { x: 7, y: 28 },
            { x: 8, y: 46 },
            { x: 9, y: 37 },
            { x: 10, y: 58 }
        ]
    }]
}

const Options = {lines};

export default Options;
const existingPoints = localStorage.getItem('bingos');
const toggledPoints = existingPoints && existingPoints.length ? JSON.parse(existingPoints) : [];

function saveState(toggledArray) {
    localStorage.setItem('bingos', JSON.stringify(toggledArray));
}

function bingoData() {
    const existingData = localStorage.getItem('bingoCard');
    let returnArray;
    const values = [];
    if (existingData && existingData.length) {
        values.push(...JSON.parse(existingData));
    }


    const width = 5;
    const height = 5;

    const maxNumber = 75;

    if (!values.length) {
        while (values.length < (width * height)) {
            const totallyRandomValue = Math.max(Math.round(Math.random() * 100), 1);

            if (totallyRandomValue <= maxNumber && !values.includes(totallyRandomValue)) {
                values.push(totallyRandomValue);
            }
        }

        localStorage.setItem('bingoCard', JSON.stringify(values));
    }

    // Sort and convert to matrix
    returnArray = values.reduce((arr, value, i) => {

        const currentRow = parseInt(i / height);
        const currentColumn = (i - (currentRow * height));

        arr.push({
            x: currentRow,
            y: currentColumn,
            value,
            toggled: toggledPoints.includes(value)
        });

        return arr;

    }, []);

    return returnArray;
}

const tickedColor = 'lightBlue';
const defaultColor = 'white';

const toggled = [];

function togglePoint(point) {
    let toggled = false;

    const index = toggledPoints.indexOf(point.value);

    if (index > -1) {
        toggledPoints.splice(index, 1);
    } else {
        toggledPoints.push(point.value);
        toggled = true;
    }

    point.applyOptions({
        color: !toggled ? defaultColor : tickedColor,
        toggled
    });

    point.series.redraw();

    saveState(toggledPoints);
}

const chart = Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        height: 800,
        plotBorderWidth: 1,
        events: {
            render: (e) => {
                const chart = e.target;
                const [series] = chart.series;

                series.points.forEach(point => {
                    if (toggledPoints.includes(point.value)) {
                        point.applyOptions({
                            color: tickedColor,
                            toggled: true
                        });
                    }
                });
            }
        }
    },
    title: {
        text: 'HighBingo'
    },

    xAxis: {
        labels: {
            enabled: false
        }
    },

    yAxis: {
        labels: {
            enabled: false
        },
        title: false
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function (e) {
                        togglePoint(e.point);
                    }
                }
            },
            dataLabels: {
                style: {
                    fontSize: 20,
                    fontFamily: 'sans-serif'
                }
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: '#FFFFFF'
    },

    legend: {
        enabled: false,
    },
    series: [{
        name: 'Bingo?',
        borderWidth: 1,
        data: bingoData(),
        dataLabels: {
            enabled: true,
            color: '#000000',
        }
    }]

});

chart.redraw();

document.querySelector('#clearCard').addEventListener('click', () => {
    localStorage.removeItem('bingoCard');
    localStorage.removeItem('bingos');
    chart.update({
        series: [{
            data: bingoData()
        }]
    });
});

console.log(chart);

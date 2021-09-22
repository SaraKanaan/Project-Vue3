

Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Sales per employee per weekday'
    },

    xAxis: {
        categories: ['Alexander', 'Marie', 'Maximilian']
    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday'],
        title: null
    },

    colorAxis: {
        stops: [
            [0, '#00CF1D'],
            [0.2, '#fffbbc'],
            [0.5, '#c4463a']
        ],
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        //colorByPoint: true,
       
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 1], [0, 1, 1], [0, 2, 5], [1, 0, 1], [1, 1, 5], [1, 2, 2], [2, 0, 5], [2, 1, 2], [2, 2, 2]],
        dataLabels: {
            enabled: true,
            color: '#000000',
          
        }
    }]

});
 //全部的信息start


$(function(){

    chart1=Highcharts.chart('container', {
    chart: {
        type: 'column',

    },
    legend: {
						itemStyle: {
								color: '#000000',
								fontSize:'20px'
						}
				},
    credits: {
			enabled: false
			},

exporting: {
            enabled:false
},
    title: {
        useHTML:true,
        text: '信息统计',
        style:{
            fontSize:'.2rem'
        }
    },
    xAxis: {
        categories: [
            '违建',
            '疑似违建',
            '拆迁',
            '疑似拆迁'
        ],
        crosshair: true,
        labels : {
        style : {
            'fontSize' : '18px'
        }
    }
    },
    yAxis: {
        min: 0,
        title: {
            text: ' ',
        },
        labels: {
								style: {
										color: 'black',
										fontSize:'20px'
								}
						}


    },
    tooltip: {
        headerFormat: '<span style="font-size:20px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:10px"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 2
        }
    },
    series: [{
        name: '面积（平方公里）',
        data: [500, 100, 100, 100]

    }, {
        name: '事件数量（个）',
        data: [50, 20, 20, 10]
    }]
});
//全部的信息end
//违建start
chart2=Highcharts.chart('container2', {
    chart: {
        type: 'column',
    },
    legend: {
						itemStyle: {
								color: '#000000',
								fontSize:'16px'
						}
				},
    credits: {
			enabled: false
			},

exporting: {
            enabled:false
},
    title: {
        text: '违建',
        style:{
            "fontSize":"26px"
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '违建'
        ],
        crosshair: true,
        labels : {
        style : {
            'fontSize' : '18px'
        }
    }
    },
    yAxis: {
        min: 0,
        title: {
            text: ' ',
        },
        labels: {
								style: {
										color: 'black',
										fontSize:'20px'
								}
						}


    },
    tooltip: {
        headerFormat: '<span style="font-size:20px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:10px"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.3,
            borderWidth: 2
        }
    },
    series: [{
        name: '面积（平方公里）',
        data: [500]

    }, {
        name: '事件数量（个）',
        data: [50]
    }]
});
//违建end
//疑似违建start
chart3=Highcharts.chart('container3', {
    chart: {
        type: 'column',

    },
    legend: {
						itemStyle: {
								color: '#000000',
								<!--fontWeight: 'bold',-->
								fontSize:'16px'
						}
				},
    credits: {
			enabled: false
			},

exporting: {
            enabled:false
},
    title: {
        text: '疑似违建',
        style:{
            "fontSize":"26px"
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '疑似违建'
        ],
        crosshair: true,
        labels : {
        style : {
            'fontSize' : '18px'
        }
    }
    },
    yAxis: {
        min: 0,
        title: {
            text: ' ',
        },
        labels: {
								style: {
										color: 'black',
										fontSize:'20px'
								}
						}


    },
    tooltip: {
        headerFormat: '<span style="font-size:20px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:10px"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.3,
            borderWidth: 2
        }
    },
    series: [{
        name: '面积（平方公里）',
        data: [100]

    }, {
        name: '事件数量（个）',
        data: [20]
    }]
});
//疑似违建end
//拆迁start
chart4=Highcharts.chart('container4', {
    chart: {
        type: 'column',

    },
    legend: {
						itemStyle: {
								color: '#000000',
								<!--fontWeight: 'bold',-->
								fontSize:'16px'
						}
				},
    credits: {
			enabled: false
			},

exporting: {
            enabled:false
},
    title: {
        text: '拆迁',
        style:{
            "fontSize":"26px"
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '拆迁'
        ],
        crosshair: true,
        labels : {
        style : {
            'fontSize' : '18px'
        }
    }
    },
    yAxis: {
        min: 0,
        title: {
            text: ' ',
        },
        labels: {
								style: {
										color: 'black',
										fontSize:'20px'
								}
						}
    },
    tooltip: {
        headerFormat: '<span style="font-size:20px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:10px"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.3,
            borderWidth: 2
        }
    },
    series: [{
        name: '面积（平方公里）',
        data: [100]

    }, {
        name: '事件数量（个）',
        data: [20]
    }]
});
//拆迁end


//疑似拆迁start
    chart5=Highcharts.chart('container5', {
    chart: {
        type: 'column',

    },
    legend: {
						itemStyle: {
								color: '#000000',
								fontSize:'16px'
						}
				},
    credits: {
			enabled: false
			},

exporting: {
            enabled:false
},
    title: {
        text: '疑似拆迁',
        style:{
            "fontSize":"26px"
        }
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '疑似拆迁'
        ],
        crosshair: true,
        labels : {
        style : {
            'fontSize' : '18px'
        }
    }
    },
    yAxis: {
        min: 0,
        title: {
            text: ' ',
        },
        labels: {
								style: {
										color: 'black',
										fontSize:'20px'
								}
						}


    },
    tooltip: {
        headerFormat: '<span style="font-size:20px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:10px"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.3,
            borderWidth: 2
        }
    },
    series: [{
        name: '面积（平方公里）',
        data: [100]

    }, {
        name: '事件数量（个）',
        data: [10]
    }]
});
$.ajax({
            type:'get',
            url:'/history_data/',
            success:function(result){

                var area=result['area'];
                var count=result["count"];
                chart1.series[0].update({
                name:"面积（平方公里）",
                data:area

                });
                chart1.series[1].update({
                name:'事件数量（个）',
                data:count
                });

               chart2.series[0].update({
                name:"面积（平方公里）",
                data:[area[0]]

                });
                chart2.series[1].update({
                name:'事件数量（个）',
                data:[count[0]]
                });

                chart3.series[0].update({
                name:"面积（平方公里）",
                data:[area[1]]

                });
                chart3.series[1].update({
                name:'事件数量（个）',
                data:[count[1]]
                });

                chart4.series[0].update({
                name:"面积（平方公里）",
                data:[area[2]]

                });
                chart4.series[1].update({
                name:'事件数量（个）',
                data:[count[2]]
                });
                chart5.series[0].update({
                name:"面积（平方公里）",
                data:[area[3]]

                });
                chart5.series[1].update({
                name:'事件数量（个）',
                data:[count[3]]
                });



            },
            error:function(){
                alert('查询失败');
            }
         });
});
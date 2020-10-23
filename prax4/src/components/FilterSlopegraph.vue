<template>
    <Chart :options="chartOptions" :updateArgs="[true, true, true]"></Chart>
</template>

<script>
    import {Chart} from 'highcharts-vue'
    import Api from "@/api";
    export default {
        name: "FilterSlopegraph",
        components:{Chart},
        data: () => {
            return {
                chartOptions: {
                    chart: {
                        renderTo:'container',
                        defaultSeriesType:'line',
                        height: 900
                    },
                    title:{
                        text:'Filtride kasutamise trend'
                    },
                    legend:{
                        enabled:false
                    },
                    tooltip: {
                        formatter: function() {
                            let point =  this.point.name;
                            if (point !== undefined) {
                                return point + ' : ' + this.y + '%';
                            }
                            else {
                                let data = this.series.data;
                                let ind = -1;
                                for (let i = 0; i < data.length; i++) {
                                    if (data[i].category === this.point.category) {
                                        ind = i;
                                    }
                                }
                                let tip = this.point.series.chart.series.filter(el => el.yData[ind] === this.y);
                                let ans = '';
                                tip.forEach(el => ans += el.name + ': ' + this.y + '%, ');
                                ans = ans.substring(0, ans.length - 2);
                                return ans;
                            }
                        }
                    },
                    xAxis: {
                        opposite:true,
                        lineColor:'#999',
                        categories:['Example1','Example2'],
                        title:{
                            text:''
                        },
                        labels:{
                            style:{
                                fontWeight:'bold'
                            }
                        }
                    },
                    yAxis: {
                        gridLineWidth:0,
                        lineColor:'#999',
                        labels:{
                            format: '{value}%',
                            enabled: true,
                        },
                        title:{
                            text:'',
                        }
                    },
                    plotOptions: {
                        line:{
                            lineWidth:2,
                            shadow:false,
                            color: "#3CB371",
                            marker:{
                                radius:2,
                                symbol: 'circle'
                            },
                            dataLabels:{
                                enabled:true,
                                align:'left',
                                x:10,
                                y:5,
                                padding: 1,
                                formatter:function() {
                                    if (this.series.data[1].category === this.point.category) {
                                        let ans = '';
                                        let data = this.series.chart.series.filter(y => y.processedYData[1] === this.y)
                                            .map(y => {
                                                return {name: y.name, data: y.processedYData[1]}
                                            });
                                        data.forEach(d => ans += d.name + ':' + d.data + '%, ');
                                        ans =  ans.substring(0, ans.length - 2);
                                        return ans;
                                    }
                                }
                            }
                        },
                        scatter:{
                            shadow:false,
                            color:"#3CB371",
                            marker:{
                                radius:2
                            },
                            dataLabels:{
                                enabled:true,
                                align:'right',
                                x:-10,
                                y:5,
                                padding:1,
                                formatter:function(){
                                    return this.point.name + ': ' + this.y + '%';
                                }
                            }
                        }
                    },
                series: []
                }
                }
            },
        created() {
            Api.getData().then(data => {
                let bar = data.filter_trend;
                this.chartOptions.xAxis.categories = bar.x_axis;
                let data_scatter = bar.data.map(el => { return {'x': 0, 'y': el.data[0], 'name': el.name}});
                bar.data.push({type: 'scatter', data: data_scatter});
                this.chartOptions.series = bar.data;
                console.log(bar.data);
        })
        }
    }
</script>

<style scoped>

</style>
<template>
    <ECharts :options="data"></ECharts>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/scatter'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import Api from '@/api'
    export default {
        name: "ReasonForBuy",
        components: {ECharts},
        data: () => {
            return {
                data: {
                    title: {
                        text: 'söömise trend',
                        link: ''
                    },
                    color:'#2E4057',
                    xAxis: [{
                        name: 'emotsioonsus',
                        min: -100,
                        max: 100,
                        axisLabel:{
                            formatter: "{value}%"
                        },
                        nameTextStyle: {
                            align: 'center',
                            padding: [30, 45, 0, 0],
                            fontSize: 20
                        }
                    },{
                        name: 'ratsionaalsus',
                        nameLocation: 'start',
                        position: 'left',
                        offset: -140,
                        nameTextStyle: {
                            align: 'center',
                            padding: [0, 0, 30, 48],
                            fontSize: 20
                        }
                    }],
                    yAxis: [{
                        min: -100,
                        max: 100,
                        axisLabel:{
                            formatter: "{value}%"
                        },
                        name: 'üksik',
                        nameTextStyle: {
                            align: 'center',
                            padding: [0, 0, 0, 30],
                            fontSize: 20
                        }
                    }, {
                        name: 'koos',
                        nameLocation: 'start',
                        position: 'left',
                        offset: -240,
                        nameTextStyle: {
                            align: 'center',
                            padding: [0, 50, 50, 0],
                            fontSize: 20
                        }
                    }],
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        name: '',
                    },
                    series: [{
                        name: 'Toidu trendid',
                        type: 'scatter',
                        data: [[1, 2, 5, 'hi', 7]],
                        symbolSize: function (data) {
                            return data[2];
                        },
                        label: {
                            show:true,
                            formatter: '{@[3]}\n{@[2]}%',
                            fontSize: 14,
                            textBorderWidth: 2
                        }
                    }, ]
                }
            }
        },
        created() {
            Api.getData().then(data => {
                    let scatter = data.reason_for_buy_scatter;
                    this.data.title.text = scatter.title;
                    this.data.title.link = scatter.url;
                    this.data.series[0].data = scatter.data;
                });
        }
    }
</script>

<style scoped>

</style>
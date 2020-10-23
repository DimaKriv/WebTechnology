<template>
    <ECharts :options="data"></ECharts>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import Api from '@/api'
    export default {
        name: "OnlineForecast",
        components: {ECharts},
        data: () => {
            return {
                data: {
                    title: {
                        text: "Online toiduaine ostmise prognoos",
                        link: ""
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        show: true,
                        data: ["online turg statisika andmeid", "prognooseritud online turg"]
                    },
                    xAxis: {
                        min: (value) => value.min,
                        name: 'aastaid'
                    },
                    yAxis: {
                       name: 'billions'
                    },
                    series: [{
                      type: 'line',
                      name: 'online turg statisika andmeid',
                      lineStyle: {color: '#3CB371'},
                      data: [[1,2]]
                    }, {
                        type: 'line',
                        name: 'prognooseritud online turg',
                        lineStyle: {color:'#2E4057'},
                        data: [[1,2]]
                    }]
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let line = data.forecast_online;
                this.data.series[0].data = line.data1;
                this.data.series[1].data = line.data2;
                this.data.title.link = line.url;
            })
        }
    }
</script>

<style scoped>

</style>
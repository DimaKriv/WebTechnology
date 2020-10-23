<template>
    <ECharts :options="polar"></ECharts>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import Api from '@/api'

    export default {
        name: "TimeUse",
        components: {ECharts},
        data: () => {
            return {
                polar: {
                    color:["#3CB371"],
                    title: {
                        text: 'Serveri kasutamise aeg kuus'
                    },
                    legend: {
                        data: ['protsent kõik kasutajast'],
                        align: 'left',
                        left: 'right'
                    },
                    xAxis: {
                        data:['1', '2','3']
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {formatter: "{value} %"}
                    },
                    series: [{
                        name: 'protsent kõik kasutajast',
                        data: [1, 2, 3],
                        type: 'bar'
                    }],
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let bar = data.time_used_bar;
                this.polar.xAxis.data = bar.x_axis;
                this.polar.series[0].data = bar.data;
            })
        }
    }
</script>

<style scoped>

</style>
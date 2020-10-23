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
        name: "FilterUsage",
        components: {ECharts},
        data: () => {
            return {
                polar: {
                    color:["#3CB371"],
                    grid: {
                        containLabel: true
                    },
                    title: {
                        text: 'Filtri valitud kuus'
                    },
                    legend: {
                        data: ['protsent filtri kasutamist'],
                        align: 'left',
                        left: 'right'
                    },
                    xAxis: {
                        type: "value",
                        axisLabel: {formatter: "{value} %"}
                    },
                    yAxis: {
                        type : 'category',
                        data: [1, 2, 3]
                    },
                    series: [{
                        name: 'protsent filtri kasutamist',
                        data: [1, 2, 3],
                        type: 'bar'
                    }],
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let bar = data.filter_usage_bar;
                this.polar.yAxis.data = bar.y_axis;
                this.polar.series[0].data = bar.data;
            })
        }
    }
</script>

<style scoped>

</style>
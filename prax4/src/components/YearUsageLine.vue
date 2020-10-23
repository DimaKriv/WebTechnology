<template>
    <ECharts :options="polar"></ECharts>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import Api from '@/api'

    export default {
        name: "YearUsageLine",
        components: {ECharts},
        data: () => {
            return {
                polar: {
                    color:["#3CB371"],
                    title: {
                        text: 'Aasta kasutaja arv'
                    },
                    legend: {
                        data: ['kasutajad'],
                        align: 'left',
                        left: 'right'
                    },
                    xAxis: {
                        type: "category",
                        data: [1, 2, 3]
                    },
                    yAxis: {
                        type : 'value',
                    },
                    series: [{
                        name: 'kasutajad',
                        data: [1, 2, 3],
                        type: 'line'
                    }],
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let bar = data.year_usage_line;
                this.polar.xAxis.data = bar.x_axis;
                this.polar.series[0].data = bar.data;
            })
        }
    }
</script>

<style scoped>

</style>
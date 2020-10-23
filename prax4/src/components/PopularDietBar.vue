<template>
    <ECharts :options="data"></ECharts>
</template>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/title'
    import Api from '@/api'
    export default {
        name: "PopularDietBar",
        components: {ECharts},
        data: () => {
            return {
                data: {
                    title: {
                        text: 'Diet trends',
                        link: ''
                    },
                    grid: {
                        containLabel: true,
                        right: 150
                    },
                    color:'#3CB371',
                    xAxis: {
                        axisLabel: {
                            formatter: "{value}%"
                        },
                        name: 'vastajatest protsent'
                    },
                    yAxis: {
                        data:[],
                        name: 'Diets'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        name: '',
                    },
                    series: [{
                        name: 'Diet trend',
                        type: 'bar',
                        data: [],
                    }]
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let bar = data.popular_diet;
                this.data.yAxis.data = bar.category;
                this.data.title.link = bar.url;
                this.data.series[0].data = bar.data;
            });
        }
    }
</script>

<style scoped>

</style>
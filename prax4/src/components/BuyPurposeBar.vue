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
        name: "BuyPurposeBar",
        components: {ECharts},
        data: () => {
            return {
                data: {
                    title: {
                        text: 'Toidu ostu olulised faktid',
                        link: ''
                    },
                    grid: {
                        containLabel: true,
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
                        name: 'põhjus'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        name: '',
                    },
                    series: [{
                        name: 'Põhjuse nii',
                        type: 'bar',
                        data: [],
                    }]
                }
            }
        },
        created() {
            Api.getData().then(data => {
                let bar = data.food_buying_major_factor;
                this.data.yAxis.data = bar.category;
                this.data.title.link = bar.url;
                this.data.series[0].data = bar.data;
            });
        }
    }
</script>

<style scoped>

    </sty
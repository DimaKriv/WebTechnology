import VueRouter from 'vue-router'
import TimeThenUse from "@/components/TimeThenUse";
import FilterUsage from "@/components/FilterUsage";
import YearUsageLine from "@/components/YearUsageLine";
import FilterSlopegraph from "@/components/FilterSlopegraph";

export default new VueRouter({
    routes: [
        {
            path:'/',
            name: 'Kasutamise aeg',
            component: TimeThenUse
        },
        {
            path: '/filter_bar',
            name: 'Filtri kasutamine',
            component: FilterUsage
        },
        {
            path: '/year',
            name: 'Aasta kasuatajad',
            component: YearUsageLine
        },
        {
            path: '/trend',
            name: 'Filter trend',
            component: FilterSlopegraph
        }
    ]
})
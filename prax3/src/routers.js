import Index from './components/Index'
import Registry from "@/components/Registry";
import Road from "@/components/Road";
import Orders from '@/components/ProductChoose';
import RoadTrack from "@/components/RoadTrack";
import Thanks from "@/components/Thanks";

const routes =  [
        {
            path: '/',
            name: 'Toidupoe kiirendi',
            component: Index,
            meta: {is_login: false}
        },
    {
        path: '/registry',
        name: 'Registreerima',
        component: Registry,
        meta: {is_login: false}
    },
    {
        path: '/road',
        name: 'Marsruut',
        component: Road,
        meta: {is_login: true}
    },
    {
        path: '/orders',
        name: 'Toit ja retseptid vaimine',
        component: Orders,
        meta: {is_login: true}
    },
    {
        path:'/road_track',
        name: 'Tee jälgimine',
        component: RoadTrack,
        meta: {is_login: true}
    },
    {
        path:'/thanks',
        name:'Äitäh',
        component: Thanks,
        meta: {is_login: true}
    }
    ];
export default routes;
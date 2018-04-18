import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Recommend from '@/components/recommend/recommend'
import Search from '@/components/search/search'
import Tab from '@/components/tab/tab'
import Singer from '@/components/singer/singer'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        },{
            path: '/Rank',
            name: 'Rank',
            component: Rank
        },
        {
            path: '/recommend',
            name: 'Recommend',
            component: Recommend
        },
        {
            path: '/Search',
            name: 'Search',
            component: Search
        },
        {
            path: '/Tab',
            name: 'Tab',
            component: Tab
        },
        {
            path: '/Singer',
            name: 'Singer',
            component: Singer
        },
    ]
})

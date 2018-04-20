<template>
    <div class="hello">
        <YHeader></YHeader>
        <tab></tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script >
    import YHeader from  './components/m-header/m-header'
    import Tab from './components/tab/tab'

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: '我是yh页面'
            }
        },
        components:{
            YHeader,
            Tab
        }
    }
</script>

<style scoped>

</style>
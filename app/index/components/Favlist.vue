<template id="template-home">
    <div>
        <p> WebPack+Vue框架搭建成功！</p>
        <p> 测试Vuex：{{count}}</p>
    </div>
</template>

<style>
    p {
        font-size: 24px;
        font-weight: bolder;
    }

    .bg {
        width: 200px;
        height: 200px;
    }
</style>
<script type="es6">
    module.exports = {
        computed: {
            count () {
                return this.$store.state.count
            }
        }
    }
</script>

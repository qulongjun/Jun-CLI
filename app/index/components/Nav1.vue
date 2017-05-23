<template>
    <div>
        {{msg}}

        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    module.exports = {
        data(){
            return {
                msg: '这是Demo1'
            }
        }
    }
</script>

<template>
    <div class="page-header">
        <h1>这是第一页
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </h1>
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

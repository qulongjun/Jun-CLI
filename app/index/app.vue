<template>
    <div>
        <!--组件Demo-->
        <my-component></my-component>
        <!--路由Demo-->
        <router-link :to="{ path: '/nav1' }">Nav1</router-link>
        <router-link :to="{ path: '/nav2' }">Nav2</router-link>
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<template>
    <div>
        <h6 class="child_style">曾以为子组件是下一层路由的组件~~~~~</h6>
        <router-link to="/home/detail">
            点击
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .child_style {
        color: red;
    }
</style>
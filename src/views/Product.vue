<script setup>
    import navbar from "../components/NavBar.vue";
    
</script>


<template>
    <div class="body">
        <router-view/>
    </div>
</template>



<style>
.body{
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: auto;
}

</style>
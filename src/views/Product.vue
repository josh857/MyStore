<script setup>
    import navbar from "../components/NavBar.vue";
    
</script>


<template>
    <!--上層-->
    <div>
        <navbar/>
    </div>
    <!--中層-->
    <div class="body">
        <router-view/>
    </div>
</template>



<style>
.body{
    height: 90%;
}

</style>
<template>
    <div class="foodDetails">
        <h1>Food Details</h1>
        <p>{{item.food_name}}</p>
        <p>{{item.nf_calories}}</p>
    </div>    
</template>

<script>
export default {
    name: 'foodDetails', 
    data(){
        return{
            foodId: this.$route.params.id
        }
    },
    computed: {
        item(){
            return this.$store.state.myList[this.foodId]
        }
    },
    methods: {
    }
}
</script>

<style>

</style>

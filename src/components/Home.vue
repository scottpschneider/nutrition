<template>
    <div class="home">
        <h1>Home</h1>
        <input type="text" v-model="query">
        <button @click="search">Search</button>
        <hr>
        <div class="list-section">
       
        <div class="row">
            <div class="results">
            <h3>Search results</h3>
            <ol>
              <li v-for="item in results">
                  {{item.food_name}}
                  <button @click="addtolist(item)">Add Food</button>
              </li>
            </ol>
            </div>
        <!-- <list :list="myList"></list> -->
        
        
            
        </div>
        <div class="row">
        <div class="userlist">
            <h3>List</h3>
            <ol>
              <li v-for="item in userlist">
                  {{item.food_name}}
                  <button @click="">Remove Food</button>
              </li>
            </ol>
        </div>
        </div>
        </div>
    </div><!--finaldiv-->
</template>

<script>
// import List from './List.vue'
export default {
  name: "Home",
  //   components: {
  //       List
  //   },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    results() {
      return this.$store.state.searchResults;
    },
    userlist(){
        return this.$store.state.myList
    }
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.query);
      this.query=""
    },
    addtolist(item){
        this.$store.dispatch("addtolist", item)
    }
  }
};
</script>

<style>
.list-section {
  display: grid;
  grid-template-areas: "results userlist";
}

.results {
  grid-area: results;
}

.userlist {
  grid-area: userlist;
}
</style>

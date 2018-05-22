import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router'

vue.use(vuex)
var api=axios.create({
    baseURL:'https://trackapi.nutritionix.com/v2/natural/nutrients',
    timeout: 3000,
    headers: {
        'x-app-key':'2f275afd78d47af9c07062d16127250a',
        'x-app-id': 'eac9f2a6'
    }
})
export default new vuex.Store({
    state: {
        myList: [],
        searchResults:[]
    },
    mutations: {
        addItem(state,item){
            state.searchResults = item
        },
        addtolist(state,item){
            state.myList.push(item)
        }
    },
    actions: {
        search({commit,dispatch},payload){
            api.post("", {query:payload})
            .then(res=>{
                commit("addItem",res.data.foods)
            })
        },
        addtolist({commit, dispatch},payload){
            commit("addtolist", payload)
        }


    }
})
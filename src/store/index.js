import Vue from 'vue'; 
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 6
    },

    // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用。
    getters:{
        storePrintCount:(state)=>{
            console.log('the count is:'+state.count)
        }
    },

    // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用,用actions去调用这些个方法。
    mutations:{
        printfCount:(state)=>{
            console.log(state.count);
        },

        addCount:(state)=>{
            state.count++;
            console.log(state.count);
        },

        addNumCount:(state,n)=>{
            state.count+=n;
            console.log(state.count);
        },
    },

    // 借助actions的手去 执行 mutations 。 通过子组件  this.$store.dispatch 的方式调用actions里面的方法
    // 可以用来执行异步操作，可以跟踪异步数据状态变化。
    actions:{
        commitPrintfCount:(context)=>{
            console.log(context);
            context.commit('printfCount');
        },

        commitAddCount:(context)=>{
            console.log(context);
            context.commit('addCount');
        },

        commitAddNumCount:(context,n)=>{
            console.log(context);
            context.commit('addNumCount',n);
        },
    },
})

export default store
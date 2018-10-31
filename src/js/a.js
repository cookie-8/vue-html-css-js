import html from "@/html/a.html"
import css from '@/css/a.css'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'



export default {
  template: html,
  data() {
    return {
      test: "This is a!",
      css: css,
      
    }
  },
  
  computed:{
    ...mapState({
      num:state => state.count,
    }),
    ...mapGetters({
      storePrintCount:'storePrintCount',
    }),

    ...mapMutations(['printfCount','addCount','addNumCount']),

    ...mapActions({
      commitAddCount:'commitAddCount',
      commitAddNumCount:'commitAddNumCount',
      commitPrintfCount:'commitPrintfCount'
    }),

  },
  methods:{
    printCount:function(a){
      if(a==='+' || a==='+5'){
        if(a==='+'){ 
          this.commitAddCount;
          //this.$store.dispatch('commitAddCount');
        }
        else{
          this.$store.dispatch('commitAddNumCount',5);
        }
      }
      else{
        this.commitPrintfCount;
      }
    },
    
  },

    


} 
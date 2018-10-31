import html from "@/html/new.html"
import css from '@/css/new.css'
import login from '@/js/logins'
import loading from '@/js/loading'

export default {
    template: html,
    components:{
        login,
        loading,
    },
    data() {
      return {
        isload:false,
        isLoginShow:false,
        css: css,
        styleobj:{

        },
      }
    },
    beforecreat(){
        setTimeout(
            function(){
                this.isload=true;
                this.styleobj={
                    opacity:0.3,
                }
            },5000
        );
        
        
    },
    mounted(){
        this.isload=false;
        this.styleobj={
            opacity:1,
        }
    },
    methods:{
        showLogin(){
            this.isLoginShow=true;
            this.styleobj={
                opacity:0.3,
            }
        },
        closeLogin(){
            this.isLoginShow=false;
            this.styleobj={
                opacity:1,
            }
        }
    }
  } 
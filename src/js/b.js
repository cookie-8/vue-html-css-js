import html from '@/html/b.html'
import css from '@/css/b.css'
import doit from '@/js/doit'


export default{
    template: html,
    data(){
        return{
           css:css,
            username:'',
            foo:'你好！',
            bar: 'HELLO',
            username2:'我是父组件',
        }
    },
    components:{
        doit,
    },
    methods: {
        triggerOne () {
          alert('1')
        },
        triggerTwo () {
          alert('2')
        }
    },
    provide: {
        house: '房子',
        car: '车子',
        money: '￥10000'
      },
}
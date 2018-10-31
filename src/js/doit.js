import html from '@/html/doit.html'
import css from '@/css/doit.css'

export default{
    template:html,
    props:['name','foo'],
    data(){
        return {
            css:css,
            text:'',
            username2fromparent:'',
        }
    },
    watch:{
        text(newVal){
            this.$emit('update:name', newVal)
        }
    },
    inject: {
        house: {
          default: '没房'
        },
        car: {
          default: '没车'
        },
        money: {
          // 长大工作了虽然有点钱
          // 仅供生活费，需要向父母要
          default: '￥4500'
        }
      },

    created () { 
        //alert(this.$parent.username2)  能获取到父组件实例的值
        console.log(this.$attrs, this.$listeners)
        // -> {bar: "HELLO"}
        // -> {two: fn}

        //this.$listeners.one()  不执行，有native修饰器
        //this.$listeners.two()  执行父组件中的two

        console.log(this.house, this.car, this.money)
  
      },
      methods:{
        changeParent:function(){
            debugger;
            this.$parent.username2 = '666'
        }
      },
    
}
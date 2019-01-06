import html from '@/html/pagenon.html'
import css from '@/css/pagenon.css'


export default({
    template : html,
    data(){
        return {
            css:css, 
        }
    },
    created(){
        $(function(){
            debugger;
            $(".showbox").click(function(){
                debugger;
                alert('ok')
            })
            $.ajax({
                url:'package.json',
                type:get,
                success(data){

                },
                error(erdata){
                    $(".showbox").html(erdata);
                },
                
            })


        })//最外层
            
        
    }
})
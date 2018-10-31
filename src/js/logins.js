import html from "@/html/logins.html"
import css from "@/css/logins.css"

export default {
  template: html,
  data() {
    return {
      isable: false,
      css: css
    }
  },
  methods: {
    closebox() {
      this.$emit('close');
    },
    isMobile() {
     
      var mob = document.getElementById("mobile").value;
      var str = mob.replace(/\s*/g, "");
      var isnum = isNaN(Number(str));
      if (str.length === 11 && !isnum) {
        var randomX = Math.random() * 9000 + 1000;
        var randomY = Math.floor(randomX);
        document.getElementById("yanzhengma").value = randomY;
        document.getElementById("mobile").innerHTML += mob;
        this.isable = true;
      }
      else {
        var error = "输入手机号格式不正确，请重新输入";
        document.getElementById("mobile").value = error;
        this.isable = false;
      }
    },
    loginseccess(isable) {
      if (isable) {
        alert("领取成功！");
        this.$emit('close');
      }

    }


  }
}
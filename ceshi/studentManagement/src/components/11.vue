<template>
  <div class="box">
     <div class="img">
         <img src="../assets/img/logo.png" alt="" style="height:77px; width: 130px">
     </div>
     <img src="../assets/img/reg.jpg" alt="">
     <div class="out">
     </div>
     <div class="inner">
      <form action="/ajax/checklogin" method="post">
        <div class="photo">
            <img src="../assets/img/photo.jpg" alt="" style="height: 50px;width: 50px">
        </div>
        <div class="message">{{message}}</div>
        <div class="form-group">
          <label for="name">用户名</label>
          <input type="input" class="form-control" id="name" v-model="user" placeholder="用户名" autocomplete="off">
        </div>
        <div class="form-group">
          <label for="pass">密码</label>
          <input type="password" class="form-control" id="pass" v-model="pass" placeholder="Password" autocomplete="off">
        </div>
        <button type="button" class="btn btn-default" @click="submit()">登陆</button>
        <br> 没有密码？请在点击这里 <router-link to="/reg" class="reg">注册</router-link>
    </form>
   </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                user: "",
                pass: "",
                message:""
            }
        },
        methods: {
            submit(){
               var  params="user="+this.user+"&pass="+this.pass
                fetch("/ajax/checklogin?"+params).then(function (e) {
                   return e.json()
                }).then((e)=>{
                    console.log(e.message)
                    if(e.message==1){
                        this.$router.push("/")
                        sessionStorage.setItem("uid",e.uid)
                        sessionStorage.setItem("user",e.user)
                    }else{
                        this.$router.push("/login")
                        this.message = "账号密码错误"
                    }
                })
            }
        }
    }
</script>
<style scoped>
     .box{
      width:100%;
      height: 100%;
      position: relative;
      overflow: hidden;
  }
  .img{
        display: block;
        margin: 0 auto;
  }
  .out{
    width: 410px;
    height: 330px;
    background-color: #fff;
    opacity: 0.4;
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    margin: 35px  auto;
}
   .inner{
    width: 380px;
    height: 300px;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    margin: 50px auto;
}
.photo{
     width: 50px;height: 50px;
     border-radius: 50%;
     margin: 10px auto;
 }
.photo img{
  border-radius: 50%;
}
   form{
       display: block;
       margin-top: 30px;
   }
.form-group{
    padding: 5px 0 5px 0;
    margin: 5px auto;
    text-align: left;
}
label{
    width: 100px;
    float: left;
    margin-left: 20px;
    margin-top: 10px;
    color: #333;
}
input{
    outline: none;
    border: 1px solid #CCC;
    padding: 5px;
    box-shadow: #DFDFDF 0 1px 2px 0 inset;
    width: 230px;
    color: #666;
    height: 25px;
    line-height: 25px;
    overflow: hidden;
}
    button{
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    border: none;
    width: 340px;
    display: inline-block;
    padding: 0;
    color: #666;
    font-size: 16px;
    margin-left: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #EEEEF0;
    outline: #666666;
}
.reg{
    text-decoration: none;
}
.message{
  width: 150px;
  height: 20px;
  position: absolute;
  left: 380px;
  top:100px;
}
</style>
<template>
  <div class="home">
      <!--<button @click="out">退出登录</button>-->
        <div class="left col-xs-6 col-sm-2 col-md-2 col-lg-2">
            <div class="head">
                <div class="head1">
                    <div class="head2"><img src="../assets/timg2.jpg" alt=""></div>
                </div>
            </div>
            <div class="name">猪八戒的小仙女</div>
            <div class="type1 type2">考试中心 | Examination center</div>
            <div class="line1">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
            </div>
            <div class="con">
                <div class="conright">
                    <router-link to="/Timetable">考试信息 ></router-link>
                    <router-link to="/person">随机考试 ></router-link>
                    <router-link to="/Uniquetable">指定考试 ></router-link>
                </div>
            </div>
            <div class="type1">个人中心 | Personal center</div>
             <div class="line1">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
            </div>
            <div class="con1">
                <div class="conright1">
                    <router-link to="/Chengji">查看成绩 ></router-link>
                     <router-link to="/Page">信息设置 ></router-link>
                     <router-link to="/Page1">修改密码 ></router-link>
                     <router-link to="/Page2">设置头像 ></router-link>
                </div>
            </div>
        </div>
        <div class="right col-xs-6 col-sm-10 col-md-10 col-lg-10" src="personal1.html" name="one">
             <div class="top">
            <div class="right">[退出登陆]</div>
            <div class="right1">欢迎您：猪八戒的小仙女</div>
            <div class="cen">学生个人系统</div>

        </div>
            <div class="line"></div>
          <router-view>

          </router-view>

        </div>
    </div>

</template>

<script>

export default {
    data(){
        return{

        }
    },
    methods:{
        out(){
            sessionStorage.removeItem("user")
            this.$router.push("/login")
        }
    }
}
</script>
<style scoped>
.home{
    width:100%;height:661px;
    /*overflow: hidden;*/
}
.left{
    width:20%;
    height:661px;
    float: left;
    background:#666;
    z-index: 1;
    overflow: hidden;
    /*float: left;*/
}
.head{
    width:130px;height: 120px;border-radius: 50%;
    margin:17px auto;padding-top:10px;
    background:#49494D;
}
.head .head1{
    width:110px;height: 100px;border-radius: 50%;background-color: #7E7E80;margin: auto ;
    padding-top:10px;
}
.head .head1 .head2{
    width:90px;height:90px;border-radius: 50%;background-color: #FFECE7;margin: auto ;
}
.head .head1 .head2 img{
    width:90px;height:90px;border-radius: 50%;
}
.name{
    width: 140px;height: 20px;
    margin: auto;
    text-align: center;
    line-height: 20px;
    color: #ffffff;
}
.type1{
    width: 100%;height: 23px;
    #background: red;
    text-align: center;
    color: white;
    line-height: 23px;
    font-size: 16px;
}
.type2{
    width: 100%;height: 23px;
    #background: red;margin-top:30px;
    text-align: center;
    color: white;
    line-height: 23px;
    font-size: 16px;
}
.line1{
    width: 95%;height: 1px;
    margin: 10px auto;
    background: #ffc017;
    position: relative;
}
.rect1{
    width: 6px;
    height: 3px;
    background: #ffc017;
    position: absolute;
    bottom: 0;
}
.rect2{
    width: 6px;
    height: 3px;
    background: #ffc017;
    position: absolute;
    bottom: 0;
    left: 48%;
}
.rect3{
    width: 6px;
    height: 3px;
    background: #ffc017;
    position: absolute;
    bottom: 0;
    right: 0;
}
.con{
    width: 90%;
    height:70px;
    #background: red;
    margin-top: 5px;
    margin-left: 5%;
}
.conright{
    width: 100%;
    height: 100%;
    #background: blue;
    float: right;
}
.conright a{
    display: block;font-size: 14px;
    text-decoration: none;
    margin-top: 10px;
    color: aliceblue;
    text-align: center;
}
.con{
    width: 90%;
    height: 150px;
    #background: red;
    margin-top: 5px;
    margin-left: 5%;
}
.conright{
    width: 100%;
    height: 100%;
    #background: blue;
    float: right;
}
.conright a{
    display: block;
    text-decoration: none;
    margin-top: 15px;
    color: aliceblue;
    text-align: center;
}
.con1{
    width: 90%;
    height:100px;
    #background: red;
    margin-top: 5px;
    margin-left: 5%;
}
.conright1{
    width: 100%;
    height: 100%;
    #background: blue;
    float: right;
}
.conright1 a{
    display: block;font-size: 14px;
    text-decoration: none;
    margin-top: 15px;
    color: aliceblue;
    text-align: center;
}
.right{
    width:80%;
    height: 100%;
    float: right;
    #background: #ffc017;
    /*overflow: hidden;*/

    /*float: left;*/
}
.search input{
    width: 220px;height: 35px;
    padding: 0 10px;
    outline: 0;
    border-radius: 50px;
    box-sizing: border-box;
    display: block;
    float: left;
    border: 0;
}
.search button{
    width: 60px;height: 30px;
    border-radius: 20px;
    padding: 2px 10px;
    background: white;
    box-sizing: border-box;
    background: #35363A;
    border: #35363A;
    color: white;
    margin-top: 5px;
}

body{
    margin: 0;padding: 0;
}
.top{
    width: 100%;height:80px;
}
.top .cen{
    width:500px;height: 80px;float: right;
    font-size:24px;color: black;text-align: center;line-height: 80px;font-weight: bold;
}
.top .right{
    width:120px;height: 80px;float: right;
    font-size: 14px;color: #AFAFAF;text-align: center;line-height: 80px;
}
.top .right1{
    width:200px;height:80px;float: right;
    font-size: 14px;color: #5D5D5D;text-align: center;line-height: 80px;
}
.line{
    width: 100%;height:8px;background-color:#C9c9c9;
}
</style>

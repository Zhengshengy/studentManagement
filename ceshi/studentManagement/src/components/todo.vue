<template>
    <div id="app">
   <div class="head">
       <div class="title">
           <label for="title">ToDoList</label>
           <input type="text" placeholder="添加" id="title" v-model="inval" @keydown.13="add">
       </div>
   </div>
        <!--3.span标签接收变量的同时，在双击时又传给changetname函数，进行改变值-->
        <span @dblclick="changetname(title)" v-show="show">{{title.label}}</span>
        <input type="text" v-model="title.label" v-show="!show" @blur="changetname(title)">
   <div class="select">
       <div class="jinxing"  @click="change(0)" :class="{red:statics=='0'}" style="font-family:'华文楷体'">正在进行</div>
        <div class="done" @click="change(1)" :class="{red:statics=='1'}" style="font-family:'华文楷体'">已经完成</div>
        <div class="all" @click="change('all')" :class="{red:statics=='all'}" style="font-family:'华文楷体'">全部完成</div>
   </div>
    <div class="con">
        <ul>
            <li v-for="row in result">
                <div class="input" type="checkbox"  @click="changeStatic(row)"  :class="{checked:row.static=='1'}"></div>
                <p @dblclick="update(row)" v-show="row.edit==0" >{{row.val}}</p>
                <input type="text" class="edit" v-model="row.val" v-show="row.edit==1" @focus="" @blur="update(row)" >
                <div class="a" @click="del(row.id)"></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
 export default{
        data() {
            return {
                inval:"",
                datas:[],
                statics:"all",
                did:"",
                title1:"",
                show:true
                //dir表中的目录
            }
        },
      // 时刻检测数据，数据的完成状态
         computed:{
            result(){
                return this.datas.filter((item)=>{
                    if(this.statics == "all"){
                        return item;
                    }else if (this.statics == item.static) {
                        return item;
                    }
                })
            },
             //2.将保存的title对象返回个title变量
            title(){
                return this.$store.state.title
            }
        },
        // mounted(){
        //     var that=this
        //     var xmlobj=new XMLHttpRequest()
        //     xmlobj.onload=function(){
        //         that.datas=JSON.parse(xmlobj.response)
        //     }
        //     xmlobj.open("get",'/ajax/select')
        //     xmlobj.send()
        // },
        mounted(){
            // localStorage["name"]="zhangsan"
            this.did=this.$route.params.id
            // 一种获取其他数据表的方法
            var uid= sessionStorage.getItem("uid")
            fetch("/ajax/select?uid="+uid+"&did="+this.did).then(function (e) {
                return e.json()
            }).then((e)=>{
                this.datas=e
            })
        },
         watch:{
            $route() {
                var uid = sessionStorage.getItem("uid")
                this.did = this.$route.params.id
                console.log(this.did)
                fetch("/ajax/select?uid=" + uid + "&did=" + this.did).then(function (e) {
                    return e.json()
                }).then((e) => {
                    this.datas = e
                })
            }
         },
        methods:{
             add(){
                if(this.inval){
                    var obj = {}
                    obj.static = 0
                    obj.val = this.inval;
                    obj.edit=false
                    obj.did=this.$route.params.id
                    obj.uid= sessionStorage.getItem("uid")
                    this.data=""
                    this.inval=""
                    var values="val="+obj.val+"&uid="+obj.uid+"&did="+obj.did
                    fetch('/ajax/add?'+values).then(function(e){
                        return e.text()
                    }).then((e)=>{
                            obj.id=e
                            console.log(obj.id)
                            this.datas.push(obj)
                    })
                    }else{
                        this.data="请输入内容"
                    }
             },
             del(id){
                 this.datas=this.datas.filter((item)=>{
                    if(item.id!=id){
                        return item
                    }
                })
                var id="id="+id
                fetch("/ajax/del?"+id).then(function(e){
                    return e.text()
                }).then(function(e){
                    if(e=="ok"){
                       alert("删除成功")
                    }
                })
             },
             changeStatic(obj){
                var state=obj.static==0?1:0;
                var parms="attr=static&val="+state+"&id="+obj.id
                fetch("/ajax/edit?"+parms).then(function(e){
                    return e.text()
                }).then((e)=>{
                    if(e=="ok"){
                        obj.static=state
                    }
                })
             },
             change(code){
                this.statics=code
             },
             update(obj){
                obj.edit=!obj.edit
                if(!obj.edit){
                    var parms="attr=val&val="+obj.val+"&id="+obj.id
                    fetch("/ajax/edit?"+parms).then(function(e){
                        return e.text()
                    })
                }
             },
          // 4.双击span标签时对数据进行修改
            changetname(data){
                 console.log(data)
                 this.show=!this.show
                this.$store.commit("setTitle",data)
            }

        },

    }
</script>

<style scoped>
 /*scoped  自动生成唯一属性*/
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    #app{
        width: 920px;
        height: 520px;
        background-color: rgba(255,255,255,0.8);
    }
    .head{
        width: 100%;
        height: 50px;
        background: #282828;
    }
    .head .title{
        width: 600px;
        padding: 0 10px;
        margin: 0 auto;
    }
    label {
        float: left;
        width: 100px;
        line-height: 50px;
        color: #DDD;
        font-size: 24px;
        cursor: pointer;
    }
    .head input {
        float: right;
        width: 60%;
        height: 24px;
        margin-top: 12px;
        text-indent: 1em;
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
        border: none;
    }
    .con{
        width: 600px;
        margin: 0 auto;
    }
    .con h2 {
        height: 31px;
        display: block;
        font-size: 1.5em;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .con span{
        float: right;
        display: inline-block;
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #E6E6FA;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
    }
    ul{
         margin-top: 20px;
         margin-bottom: 20px;
    }
    li {
        height: 32px;
        line-height: 32px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629A9C;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    }
    li .input {
        position: absolute;
        top: 5px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
        background: #CDCDCD;
    }
    li .a {
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }
    li .edit{
        position: absolute;
        top: 5px;
        left: 40px;
        width: 400px;
        float: right;
    }
     li .checked{
        background: red;
    }
    .select{
        width: 600px;
        height: 200px;
        margin: 0 auto;
    }
    .jinxing,.done,.all{
        width: 100px;
        float: left;
        height: 20px;
        margin-right: 100px;
        margin-top: 20px;
        text-align: center;
    }
    .red{
        color: #D2607A;
    }
</style>
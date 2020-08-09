<template>
  <div>
    <!-- header -->
    <div class="head">
      <div class="top">
        <div class="top_content" id="titlehtml" >
          <router-link to="/header"> 购物车</router-link>
          <router-link to="/">订单</router-link>
          <router-link to="/register">注册</router-link>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
      <div class="nav">
        <div class=" iw_nav">
          <a class="logo" id="logohref"  href="/"><img src="../../assets/33cake.jpg" alt=""></a>
            <div class="top_info">
              <p class="top_phone">400-968-3133</p><br>
              <p class="top_ps">市区内免费配送</p>
            </div>
            <ul class="nav_ul">
              <li>
                <a id="s1" href="/Default.aspx" class="active">
                <span class="english">Home</span><br /><br/>
                <span class="china">首页</span>
                </a>
              </li>
              <li>
                <a id="s2" href="/Products.aspx">
                  <span class="english">Cake List</span><br/><br/>
                  <span class="china">蛋糕名录</span>
                  </a>
              </li>
              <li>
                <a id="s3" href="/News.aspx">
                  <span class="english">New Activity</span><br /><br/>
                  <span class="china">最新活动</span>
                </a>
              </li>
              <li>
                <a id="s4" href="/BrandStory.aspx">
                  <span class="english">Brand Story</span><br /><br/>
                  <span class="china">品牌故事</span>
                </a>
              </li>
              <li id="lvs">
                <a id="s5" href="/ArticlePromotions.aspx">
                  <span class="english">33 Members</span><br /><br/>
                  <span class="china">33会员</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- zhuce -->
       <mt-field 
      type="text"
      label="用户名"
      :state="usernameState"
      placeholder="请输入用户名"
      v-model="username"
      @blur.native.capture="checkUsername">
    </mt-field>    
    <mt-field 
      type="password"
      label="密码"
      :state="passwordState"
      disableClear
      placeholder="请输入密码"
      v-model="password"
      @blur.native.capture="checkPassword">
    </mt-field> 
    <mt-field 
      type="password"
      label="确认密码"
      :state="password2State"
      placeholder="请再次输入密码"
      :attr="{maxlength:'10',autocomplete:'off'}"
      v-model="password2"
      @blur.native.capture="checkConPassword">      
    </mt-field>   
    <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>    
      
  
  <!-- footer -->
   <div class="footer">
      <div class="iw">
        <div class="f1" id="footid">
          <p>
            订购专线：
            <strong>400 968 3133</strong>
            (服务时间 08:00-20:00)
          </p>
          <p>客服电话：0917-3434702（宝鸡）|&nbsp;&nbsp;33cake@sina.com(邮箱）&nbsp;&nbsp;</p>
          <p>
            宝鸡市区：
            <strong>提前5小时预订;(当日22点以后的订单，于次日8点开始审核）</strong>
          </p>
          <p>Copyright@33cake蛋糕网&nbsp;2014-2019，版权所有</p>
        </div>
          <div class="fr">
            <div class="bottom_nav">
              <a href="/">企业试吃</a>|
              <a href="/">联系我们</a>|
              <a href="/">订购帮助</a> |
              <a href="/">企业合作</a>
            </div>
            <div class="bottom_share">
            <a href="">
              <img src="/" /></a>
              <a href="" class="weixin_box">
              <img src="" />
            <div class="ewm_img_box" id="weixin">
            </div>
            </a>
            </div>
          </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      //保存用户名
      username:'',
      //保存密码
      password:'',
      //保存确认密码
      password2:'',
      //保存用户名的状态
      usernameState:'',
      //保存密码的状态
      passwordState:'',
      //保存确认密码的状态
      password2State:''
    }
  },
  methods:{
    //检测用户名
    checkUsername(){
        let username = this.username;
        //校验用户名,用户名的规则为:字母、数字及下划线的组合,长度为6~12个字符
        let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
        if(usernameRegExp.test(username)){
          this.usernameState = 'success';
          return true;
        } else{
          this.usernameState = 'error';
          this.$toast({
            message:"请输入合法用户名",
            position:"top",
            duration:2000
          });
          return false;
        }
    },
    //检测密码
    checkPassword(){
      let password = this.password;
      //校验密码,密码的规则为:字母、数字及下划线的组合,长度为8~20个字符
      let passwordRegExp = /^[0-9A-Za-z_]{6,20}$/;
      if(passwordRegExp.test(password)){
        this.passwordState = 'success';
        return true;
      } else {
        this.passwordState = 'error';
        this.$toast({
          message:"请输入合法密码",
          position:"top",
          duration:2000
        });
        return false;
      }
    },
    //检测确认密码
    checkConPassword(){
      let password2 = this.password2;
      if(password2 == this.password){
        this.password2State = 'success';
        return true;
      } else {
        this.password2State = 'error';
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:2000
        });
        return false;
      }
    },

    handle(){     
      //仍然进行用户名、密码及确认密码的校验
      if(this.checkUsername() && this.checkPassword() && this.checkConPassword()){
          //如果所有信息都为合法的信息,则进行提交;
          this.axios.post('/register','username=' + this.username + '&password=' + this.password).then(res=>{
            if(res.data.code==0){
               this.$messagebox("注册提示","对不起,用户已存在");
            }else{
              this.$router.push('/header');
            }
          });
         
      }
     
    }
  }
}
</script>

<style scoped>
div {
    display: block;
}
.head {
    box-shadow: 0 0 4px 0 #ccc;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 20px;}
.top {
    height: 30px;
    line-height: 30px;
    color: #8e6a55;
    text-align: right;
    border-bottom: 1px solid #eaeaea;}

.top_info p.top_phone {
    background:url(../../assets/phone.png)  no-repeat left center;
    color:#5c5252 ;
    padding-left: 30px;
    font-size: 16px;
}
.top_info p.top_ps {
    background:url(../../assets/ps.png) no-repeat left center;
    padding-left: 30px;
    margin-top: -35px;
    color:#5c5252 ;
}
.top_content{
  margin-right: 20%;
  margin-top: 20;
}
.top_content a{
  text-decoration: none;
  color: #8e6a55;
  font-size: 12px;
  float: right;
  margin-right: 5px;
}
.top_content a:hover{
  color: pink;
}

.nav {
    height: 70px;
}
.nav .logo {
    position: absolute;
    top: 10px;
    left: 0%;
    background: #fff;
    z-index: 9999;}
a:link, a:visited {
  text-decoration: none;
  color: #666; 
}
.top_info {
    margin-top: 10px;
    width: 190px;
    position: absolute;
    right: 0%;
}
.nav .nav_ul {
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 30px;
    text-align: center;
    margin-bottom: 50px;
}
.nav .nav_ul li {
    text-align: center;
    width: 110px;
    display: inline-block;
}
.nav .nav_ul li a {
    color: #8e6a55;
    display: block;
    padding: 0px 0;
    background:  no-repeat left center;
    border-bottom: 1px solid #fff;
}
.nav .nav_ul li a .english {
    font-size: 16px;
    margin-bottom:4px ;
}

.footer {
    border-top: 1px solid #432818;
    padding: 20px 0;
    margin-top: 20px;
}
.iw {
    width: 1200px;
    margin: auto;
}
.footer_main {
    overflow: hidden; 
}
.footer_main .fl {
    font-size: 12px;
    color: #8e6a55;
    line-height: 20px;
    width: 600px;
}
.fl {
    float: left;
}
.footer_main .fr {
    width: 500px;
}
.fr {
    float: right;
}
.footer_main .fr .bottom_nav {
    color: #8e6a55;
    text-align: right;
    font-size: 12px;
}
.footer_main .fr .bottom_share {
    text-align: right;
    margin-top: 30px;
}
</style>
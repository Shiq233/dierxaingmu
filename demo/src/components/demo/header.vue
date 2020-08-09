<template>
  <div>
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
                <a id="s3" href="/">
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
                <a id="s5" href="/">
                  <span class="english">33 Members</span><br /><br/>
                  <span class="china">33会员</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <!-- lunbotu  -->
     <div id="demo" class="carousel" data-ride="carousel">
				
				<div class="carousel-inner">
					<div class="carousel-item active">
						<a href="#"><img class="w-100" src="../../assets/banner.jpg" alt=""></a>
					</div>
					<div class="carousel-item">
						<a href="#"><img class="w-100" src="../../assets/banner1.png" alt=""></a>
					</div>
					<div class="carousel-item">
						<a href="#"><img class="w-100" src="../../assets/banner2.png" alt=""></a>
					</div>
				</div>
				<!-- 轮播指示器 -->
				<ul class="carousel-indicators">
					<li data-slide-to="0" data-target="#demo" class="active"></li>
					<li data-slide-to="1" data-target="#demo"></li>
					<li data-slide-to="2" data-target="#demo"></li>
					<li data-slide-to="3" data-target="#demo"></li>
				</ul>
				 <!-- 左右箭头 -->
				<a data-slide="next" class="carousel-control-next" href="#demo">
					<span class="carousel-control-next-icon"></span>
				</a>
				<a data-slide="prev" class="carousel-control-prev" href="#demo">
					<span class="carousel-control-prev-icon"></span>
				</a>
			</div>

      <div class="main_pro" style="display:block">
        <div class="hd">33CAKE-产品推荐   Recomendation</div>
        <div class="bd">
          <ul class="pro_ulbox" id="recommendproduct">
            <li>
              <router-link to='/'><img src="../../assets/p11.png" alt="">
               <div class="pro_info">
                 Caffe Latte<br>
                  那提（咖啡口味）
               </div>
              </router-link>
            </li>
            <li>
              <router-link to='/'><img src="../../assets/p2.png" alt="">
               <div class="pro_info">
                 Caffe Latte<br>
                  那提（咖啡口味）
               </div></router-link>
            </li>
            <li>
              <router-link to='/'><img src="../../assets/p3.png" alt="">
               <div class="pro_info">
                 Caffe Latte<br>
                  那提（咖啡口味）
               </div>
               </router-link>
            </li>
            <li>
              <router-link to='/'><img src="../../assets/p4.png" alt="">
               <div class="pro_info">
                 Caffe Latte<br>
                  那提（咖啡口味）
               </div></router-link>
            </li>
          </ul>
        </div>
      </div>
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
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default { 
  name: 'Header',

    data(){
        return{

        }
    }
}
</script>

<style>
/* 轮播图 */
.carousel{
  margin-top: 50px;
}
.carousel-indicators li{
				width:.8rem;height: .8rem;
				border-radius: 50%;
				background-color: #fff;
        
			}
.carousel-indicators .active {
				background-color: #0aa1ed;
			}
.carousel-control-prev,
.carousel-control-next{
				width:4%;height: 20%;
				background-color: #aaa;
				border-radius: 0.25rem;
				top:40%;
        }



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

.contentImg{
 height: 600px;
 width: 1200px;
}

.main_pro .hd {
    height: 50px;
    line-height: 50px;
    color: #8e6a55;
    font-size: 16px;
}
.main_pro .pro_ulbox {
    overflow: hidden;
    
}
.main_pro .pro_ulbox li a {
    display: block;
    float: left;
    width: 25%;
}
ul, li {
    list-style: none;
}

.main_pro .pro_ulbox li .pro_info {
    font-size: 14px;
    position: absolute;
    bottom: -62px;
    background: rgba(0,0,0,0.3);
    width: 25%;
    text-align: center;
    color: #fff;
    padding: 1px 0;
    transition: all 0.4s linear;
}
a:link, a:visited {
    text-decoration: none;
    color: #666;
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

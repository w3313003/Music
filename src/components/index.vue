<template>
	<div class='wrap'>
		<div class='seacher'>
			<div class="left">
				<span>音 乐</span>
			</div>
			<div class='center'>
				<router-link :to='{path:"/search"}'>
				<input type="text" placeholder="搜索喜欢的歌曲" style="width: 100%;height: 80%;font-size:15px"/>
				</router-link>
			</div>
			<div class='right'>
				<span>用 户</span>
			</div>
		</div>
		<div class='swiper'>
			<mt-swipe :auto="4000">
  				<mt-swipe-item v-for='item in banner' key="data.id">
  					<img :src='item.src'/>
  				</mt-swipe-item>
			</mt-swipe>  			
		</div>
		<div class='typeList'>
			<h1>音乐特色榜</h1>
			<ul class="">
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
    data () {
        return {
            banner: [
                {'id':1, 'src':'http://p4.music.126.net/kXn-DuZHpWUt92wtn-kdJg==/18922595114158461.jpg'},
                {'id':2, 'src':'http://p3.music.126.net/OrppkkA9uzaq7w4m4M0hyQ==/18734578627590227.jpg'},
                {'id':3, 'src':'http://p3.music.126.net/ByeFpfshMXvOjnaiy886ug==/18888510253690479.jpg'},
                {'id':4, 'src':'http://p4.music.126.net/Fnw_tQevNEQFpN0V_Sx_kw==/18917097556020132.jpg'},
  
            ],
            typelist:[
                {
                    'id':'19723756', 
                    'src':'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150',
                    'title':'飙升榜',
                    'updatetime':'每天更新'
                },
                {
                    'id':'3779629', 
                    'src':'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150',
                    'title':'新歌榜',
                    'updatetime':'每天更新'
                },
                {
                    'id':'2884035', 
                    'src':'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150',
                    'title':'原创榜',
                    'updatetime':'每周四更新'
                },
                {
                    'id':'3778678', 
                    'src':'http://p3.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150',
                    'title':'热歌榜',
                    'updatetime':'每周四更新'
                }
            ],
            typelist2:[
                {
                    'id':'71385702', 
                    'src':'http://p3.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=150y150',
                    'title':'ACG音乐榜',
                    'updatetime':'每周四更新'
                },
                {
                    'id':'71384707', 
                    'src':'http://p4.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=150y150',
                    'title':'古典音乐榜',
                    'updatetime':'每周四更新'
                },
                {
                    'id':'10520166', 
                    'src':'http://p4.music.126.net/4mh2HWH-bd5sRufQb-61bg==/3302932937414659.jpg?param=150y150',
                    'title':'电音榜',
                    'updatetime':'每周五更新'
                },
                {
                    'id':'180106', 
                    'src':'http://p4.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=150y150',
                    'title':'UK排行榜周榜',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'60198', 
                    'src':'http://p4.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=150y150',
                    'title':'美国Billboard周榜',
                    'updatetime':'每周三更新'
                },
                {
                    'id':'3812895', 
                    'src':'http://p4.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=150y150',
                    'title':'Beatport全球电子舞曲榜',
                    'updatetime':'每周四更新'
                },
                {
                    'id':'27135204', 
                    'src':'http://p3.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg?param=150y150',
                    'title':'法国 NRJ Vos Hits 周榜',
                    'updatetime':'每周五更新'
                },
                {
                    'id':'21845217', 
                    'src':'http://p4.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg?param=150y150',
                    'title':'KTV唛榜',
                    'updatetime':'每周五更新'
                },
                {
                    'id':'11641012', 
                    'src':'http://p4.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=150y150',
                    'title':'iTunes榜',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'60131', 
                    'src':'http://p3.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=150y150',
                    'title':'日本Oricon周榜',
                    'updatetime':'每周三更新'
                },
                {
                    'id':'120001', 
                    'src':'http://p4.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=150y150',
                    'title':'Hit FM Top榜',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'112463', 
                    'src':'http://p3.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=150y150',
                    'title':'台湾Hito排行榜',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'112504', 
                    'src':'http://p3.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=150y150',
                    'title':'中国TOP排行榜（港台榜）',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'64016', 
                    'src':'http://p4.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=150y150',
                    'title':'中国TOP排行榜（内地榜）',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'10169002', 
                    'src':'http://p3.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=150y150',
                    'title':'香港电台中文歌曲龙虎榜',
                    'updatetime':'每周五更新'
                },
                {
                    'id':'4395559', 
                    'src':'http://p4.music.126.net/N2whh2Prf0l8QHmCpShrcQ==/19140298416347251.jpg?param=150y150',
                    'title':'华语金曲榜',
                    'updatetime':'每周一更新'
                },
                {
                    'id':'1899724', 
                    'src':'http://p3.music.126.net/8gUF9TrXGNoRO6cKVaCzrQ==/5972547162256485.jpg?param=150y150',
                    'title':'中国嘻哈榜',
                    'updatetime':'每周五更新'
                },
                

            ],
            keywords: '',
            musiclist:[]
        }
    },
}
</script>

<style lang='stylus'>
.wrap
  .seacher
    width:100%
    height:40px
    background:#26a2ff
    display:flex
    .left,.center,.right
      display:inline-block
      font-size:14px
      color:#fff
      text-align:center
      line-height:40px
    .left
      flex:0 0 50px
    .right
      flex:0 0 50px  
    .center
      flex:1
  .swiper
    width:100%
    height:200px
    overflow:hidden
    img
      width:100%
      height:100%
      float:left  
 </style>
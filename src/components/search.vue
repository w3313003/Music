<template>
	<div class='wrap'>
		<div class='search'>
			<div class="left">
				<router-link :to='{name:"index"}'>
					<span>返回</span>
				</router-link>
			</div>
			<div class='center'>
				<input type="text" placeholder="搜索喜欢的歌曲" style="width: 100%;height: 80%;font-size:15px"
					v-model='song' @keyup.enter='seacher'/>
			</div>
			<div class='right' @click='seacher'>
				<span>搜索</span>
			</div>
		</div>
		<div class='list'>
			<ul v-if='listShow'>
				<li v-for='(item,index) in songList' class='songlist'>
				<router-link :to='{name:"play",params:{ id:item.id }}' @click.native="send(index)" style='display: inline-block;width:215px;padding: 0 90px;'>
					<span class='name'>
						{{item.name}}
					</span>
					<div class='msg'>
					<span class='cd'>
						歌手：{{item.ar[0].name}}
						专辑：{{item.al.name}}
					</span>
					</div>
				</router-link>
				</li>
			</ul>
		</div>
		<div class='history'>
			<div v-for></div>
		</div>
	</div>
</template>

<script>
import Bus from "../bus"
export default{
	data() {
		return {
			song: '',
			songList: [],
			listShow : true,
		}
	},
	methods: {
		seacher() {
			this.$indicator.open('加载中');
			let url = this.api.search(this.song);
			this.axios.get(url).then( (res) => {
				this.$indicator.close();
				this.songList = res.data.result.songs;
				console.log(res.data.result.songs[0])
			});
//			Bus.$emit('send',this.songList[index]);
		},
		send(index) {
			Bus.$emit('send',this.songList[index]);
		}
	}
}
</script>

<style lang='stylus'>
.wrap
  .search
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
  .list
    font-size:0
    .songlist
      background:#f5f5f5
      height:60px
      line-height:40px
      font-size:18px
      position:relative
      margin-bottom:10px
      .msg
        font-size:12px
        height:12px
        line-height:12px    	      
</style>
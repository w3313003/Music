<template>
	<div class='music-wrapper'>
		<mt-header :title="songMessage.name">
			<router-link to="/search" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="music-img" >
			<img :src='songMessage.al.picUrl' :class='{"toRorate":isPlay}'/>
		</div>
		<div class='singer'>演唱者：{{songMessage.ar[0].name}}</div>
		<div class="footer" :max='len'>
			<mt-range >
				<div slot="start">0</div>
  				<div slot="end">{{getTime}}</div>
			</mt-range>
			<span @click='play' id='contorl'>播放</span>
		</div>
	</div>
</template>

<script>
	import Bus from "../bus"
	export default {
		data() {
			return {
				song: {},
				songMessage: [],
				lyric: '',
				playCount: 0,
				isPlay:false,
				
			}
		},
		computed: {
			getTime() {
				let value = this.songMessage.dt;
				let s = parseInt(value/1000);
				let mint = parseInt(s/60);
				let time = s - mint * 60;
				return mint+'分'+time+'秒';
			},
			len() {
				return parseInt(this.songMessage.dt/1000);
			}
		},
		created() {
			this.$indicator.open('加载中');
			const id = this.$route.params.id;
			this.axios.get(this.api.getSong(id)).then((res) => {
				this.$indicator.close();
				this.song = res.data.data[0];
			}).catch(() => {
				this.$toast('请求失败请稍后再试');
			});
			this.axios.get(this.api.getLrc(id)).then((res) => {
				this.lyric = res.data.lrc.lyric;
			});
			Bus.$on('send', (data) => {
				this.songMessage = data;
				console.log(this.songMessage)
			})
		},
		methods: {
			play() {
				let id = document.getElementById('contorl');
				let audioNum = document.getElementsByTagName('audio').length
				if(audioNum === 0) {
					let audio = document.createElement('audio');
					document.body.appendChild(audio);
					audio.src = this.song.url;
					audio.id = 'audio'
					audio.play();
					id.innerText = '暂停';
					this.isPlay = true;
				} else if(this.isPlay) {
					let audios = document.getElementById('audio');
					audios.pause();
					id.innerText = '播放';
					this.count--;
					this.isPlay = false;
				} else {
					let audios = document.getElementById('audio');
					audios.play();
					id.innerText = '暂停';
					this.isPlay = true;
				}
			},
		}
	}
</script>

<style>
@keyframes rotate{
from {transform: rotate(-360deg);}
to {transform: rotate(0deg);}
}
.footer{
	width:100%;
	height:105px;
	position: fixed;
	bottom: 0;
	border-top: 2px solid #f4f5f4;
	padding:10px 0
}
.music-img{
	width: 70%;
	height: 70%;
	overflow: hidden;
	margin: 0 auto;
	padding-top: 40px ;
	text-align: center;
}
.music-img img{
	width: 100%;
	height: 100%;
	vertical-align: middle;
	border-radius: 50%;
}
.toRorate{
	animation: rotate 8s linear infinite;
}
.music-wrapper{
	height: 100%;
}
</style>
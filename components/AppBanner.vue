<script setup>
onMounted(() => {
// 使用全局回调函数，确保 API 加载完成
  window.onYouTubeIframeAPIReady = function () {
    const player = new YT.Player('player_4620_1851317283_406218855', {
      events: {
        'onReady': function(event) {
          event.target.playVideo(); // 自动播放
        },
        'onStateChange': function(event) {
          // 在视频结束时重新播放
          if (event.data === YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
        }
      }
    });
  };

  // 动态插入 YouTube API 脚本
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
</script>
<template>
	<div 
	class="relative w-full h-screen bg-gray-900 flex justify-center items-center">
		<iframe
      class="w-full aspect-video av_youtube_frame min-h-full absolute object-cover"
      id="player_4620_1851317283_406218855"
      data-autoplay="1"
      data-videoid="2iMGoBy9dtQ"
      data-hd="1"
      data-rel="0"
      data-wmode="opaque"
      data-loop="0"
      data-version="3"
      data-autohide="1"
      data-color="white"
      data-controls="0"
      data-iv_load_policy="3"
      data-original_url="https://www.youtube.com/watch?v=2iMGoBy9dtQ"
      frameborder="0"
      allowfullscreen=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      title="這就是 OMNI / THIS IS OMNI【官方 PV #thisisOMNI 篇】"
      src="https://www.youtube.com/embed/2iMGoBy9dtQ?original_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2iMGoBy9dtQ&iv_load_policy=3&controls=0&color=white&autohide=1&version=3&loop=0&wmode=opaque&rel=0&hd=1&videoid=2iMGoBy9dtQ&autoplay=1&mute=1&html5=1&enablejsapi=1&origin=https%3A%2F%2Fwww.omni-taipei.com&widgetid=1&showinfo=0"
      data-gtm-yt-inspected-15="true"
    ></iframe>

		<!-- -->
		<div 
		class="absolute z-10 bg-repeat w-full h-screen opacity-50" 
		style="background-image: url(/dots-mini-light.png);">
		</div>
		<div class="absolute text-gray-50 text-[32px] z-20">
			<img src="/logo-w.png" class="w-[350px]">
		</div>
	</div>
</template>
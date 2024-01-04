<script setup>
onMounted(() => {
  document.addEventListener('click', handlePlay);
});

function handlePlay() {
  let video = document.querySelector('video');
  video.muted = true;
  video.play();
}
</script>
<template>
	<div 
	class="relative w-full h-screen bg-gray-900 flex justify-center items-center overflow-hidden">
     <video 
     @click="handlePlay"
     poster="/title-3.jpg"
     class="min-w-full min-h-full absolute z-10 object-cover bg-gray-900" src="/BBtunnelRed.mp4" type="video/mp4" autoplay muted loop webkit-playsinline playsinline></video>
		<!-- -->
		<div 
		class="absolute z-20 bg-repeat w-full h-[120vh] opacity-50" 
		style="background-image: url(/dots-mini-light.png);">
		</div>
		<div class="absolute z-30">
			<img src="/logo.svg" class="w-[210px] sm:w-[240px]">
		</div>
	</div>
</template>
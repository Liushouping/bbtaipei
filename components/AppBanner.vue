<script setup>
onMounted(() => {

});
</script>
<template>
	<div 
	class="relative w-full h-screen bg-gray-900 flex justify-center items-center">
     <video class="min-w-full min-h-full absolute z-10 object-cover bg-gray-900" src="/onmi.mp4" type="video/mp4" autoplay muted loop webkit-playsinline playsinline></video>
		<!-- -->
		<div 
		class="absolute z-20 bg-repeat w-full h-screen opacity-50" 
		style="background-image: url(/dots-mini-light.png);">
		</div>
		<div class="absolute z-30">
			<img src="/logo-w.png" class="w-[240px] sm:w-[350px]">
		</div>
	</div>
</template>
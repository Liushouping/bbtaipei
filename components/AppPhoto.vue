<script setup>
const images = [
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-1.jpg",
        alt: "BBtaipei"
	},
	{
		src: "/title-2.jpg",
        alt: "BBtaipei"
	}
];
onMounted(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {

    });    
});
</script>
<template>
	<div 
	class="relative bg-gray-900 h-full bg-cover bg-center flex justify-center"
	style="background-image: url(/bg.jpg);">
		<div class="absolute z-10 bg-gray-900/70 w-full h-full">
		</div>
		<div class="max-w-[80%] w-full h-full py-36 z-20">
			<div class="flex flex-row items-center h-full w-full space-x-6">
				<h5 class="text-[24px] font-light text-gray-50 mb-6 tracking-[1px]">Photo</h5>
				<hr class="w-full h-4 opacity-10">
				<img src="/logo.svg" width="35px">
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
				<a 
			    v-for="(image, index) in images"
      			:key="index"
			    data-fancybox="gallery" 
			    :data-src="image.src"
			    class="cursor-zoom-in">
					<img :src="image.src" :alt="image.alt" loading="lazy">
				</a>
			</div>
		</div>
	</div>
</template>

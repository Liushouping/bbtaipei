<template>
	<div class="w-full h-screen bg-gray-950 pt-48 pb-24">
		<div class="flex flex-col justift-center items-center">
			
			<p
			class="text-gray-50 font-bold text-[172px] tracking-[16px]">404</p>
			
			<p class="font-light text-[36px] text-gray-50 tracking-[2px]">Page not found</p>
			<NuxtLink 
			to="/" 
			class="bg-gray-800 text-[14px] px-6 py-2 text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
				Go back home
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

p {
	font-family: 'Anton', sans-serif;
}
</style>
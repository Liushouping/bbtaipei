<template>
	<div class="w-full h-screen bg-gray-950 pt-48 pb-24">
		<div class="flex flex-col justift-center items-center">
			
			<p
			class="text-gray-50 font-bold text-[148px] sm:text-[172px] tracking-[16px]">404</p>
			
			<p class="font-light text-[36px] text-gray-50 tracking-[2px]">Page not found</p>
			<NuxtLink 
			to="/" 
			class="bg-gray-800 text-[14px] px-6 py-2 text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
				Go back home
				<span class="ml-1">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
					  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
					</svg>
				</span>
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
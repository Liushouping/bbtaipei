<template>
	<div class="w-full h-full bg-gray-950 pt-36 pb-24">
		<div class="flex flex-col justift-center items-center">
			<h5 class="font-bold text-[128px] text-gray-50 tracking-[2px]">404</h5>
			<p class="font-light text-[36px] text-gray-50 tracking-[1px]">Page not found</p>
			<NuxtLink 
			to="/" 
			class="bg-gray-800 text-[14px] px-4 py-2 text-gray-50 rounded-lg flex flex-row items-center tracking-[2px] hover:bg-gray-700 transition-colors mt-8">
				Go back home
			</NuxtLink>
		</div>
	</div>
</template>
<script setup>
useHead({
  title: 'BBtaipei | 404 Error',
});

</script>
<template>
	<div class="w-full h-screen bg-gray-950 pt-48 pb-24">
		<div class="flex flex-col justift-center items-center">
			<p class="bg-clip-text text-transparent bg-gradient-to-b from-[#F0B90B] to-gray-950 font-bold text-[124px] sm:text-[172px] tracking-[12px]">Oops!</p>

			<span class="flex flex-row space-x-1 justift-center items-center mb-2">
				<p class="text-[14px] bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-950">404 Error</p>
<!-- 				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
				</svg> -->
			</span>

			<p class="bg-clip-text text-transparent bg-gradient-to-b from-[#F0B90B] to-gray-950 font-light text-[24px] tracking-[2px]">We can’t find that page ...</p>
			<div class="flex flex-row space-x-4">
				<NuxtLink
				to="/"
				class="bg-gray-800 text-[12px] px-6 py-2 font-light text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
					<span class="mr-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
						</svg>
					</span>
					Back
				</NuxtLink>

				<NuxtLink
				to="/"
				class="bg-gray-800 text-[12px] px-6 py-2 font-light text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
					Home
					<span class="ml-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
						  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>
					</span>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

p {
	font-family: 'Anton', sans-serif;
}
</style>
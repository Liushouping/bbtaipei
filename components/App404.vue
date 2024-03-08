<script setup>
useHead({
  title: 'BBtaipei | 404 Error',
});

</script>
<template>
	<div class="w-full h-screen bg-gray-950 pt-48 pb-24">
		<div class="flex flex-col justift-center items-center">
			<p class="bg-clip-text text-transparent bg-gradient-to-b from-[#F0B90B] to-gray-950 font-bold text-[112px] sm:text-[172px] tracking-[2px]">Oops!</p>

			<div class="absolute top-0 right-0 bg-gradient-to-r from-[#F0B90B] to-gray-900 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] w-[600px] h-[400px] z-10">
				
			</div>
			<span class="flex flex-row space-x-1 justift-center items-center mb-2 z-20">
				<p class="text-[14px] bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-950">404 Error</p>
			</span>

			<p class="bg-clip-text text-transparent bg-gradient-to-b from-[#F0B90B] to-gray-950 font-light text-[18px] sm:text-[24px] tracking-[2px]">We can’t find that page ...</p>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');

p {
	font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}
</style>
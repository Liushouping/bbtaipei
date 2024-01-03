<script setup>
const headerHeight = ref(30);
const headerBackgroundColor = ref('transparent');
const headerTextColor = ref("white");
const headerShadow = ref(false);
const headerIcon = ref(true);

const menu = ref(false);

const handleScroll = () => {
	const scrollY = window.scrollY || window.pageYOffset;
    // headerHeight.value = scrollY > 110 ? 110 : 30;
    headerBackgroundColor.value = scrollY > 60 ? 'black' : 'transparent';
    headerTextColor.value = scrollY > 60 ? 'black' : 'white';
    headerShadow.value = scrollY > 60;
    headerIcon.value = scrollY < 60;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<div>
		<header 
		class="w-full fixed top-0 flex justify-center z-40">
			<nav class="w-full py-12 px-4 flex justify-center transition-all duration-1000" 
			:class="{ 'shadow-sm': headerShadow }"
			:style="{ height: `${headerHeight}px`, backgroundColor: headerBackgroundColor, color: headerTextColor }">
				<div class="max-w-[80%] w-full flex flex-row justify-between items-center">
					<NuxtLink to="/">
						<img src="/logo.png" class="w-[130px]">
					</NuxtLink>
					<div 
					class="flex md:hidden cursor-pointer"
					@click="menu =! menu">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
						</svg>
					</div>
<!-- 					<ul 
					class="hidden md:flex space-x-2 sm:space-x-6 font-bold text-[14px]">
						<li><NuxtLink to="/">HOME</NuxtLink></li>
						<li><NuxtLink to="/">About</NuxtLink></li>
						<li><NuxtLink to="/">Photo</NuxtLink></li>
						<li><NuxtLink to="/">EXPOSURE</NuxtLink></li>
					</ul> -->
				</div>
			</nav>
		</header>
		<Teleport to="body">
		<Transition name="slide-up">
		    <div 
		    v-if="menu" 
		    class="fixed top-0 left-0 w-full h-screen bg-gray-900 flex justify-center items-center z-[101]">
		      <button @click="menu =! menu" class="fixed top-8 right-4">
		        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
		      </button>
		      <div class="flex justify-center items-center">
		      	<ul class="flex flex-col justify-center items-center text-white md:hidden space-y-6 font-bold text-[14px]">
		      		<li><NuxtLink to="/" @click="menu =! menu">HOME</NuxtLink></li>
							<li><NuxtLink to="/" @click="menu =! menu">About</NuxtLink></li>
							<li><NuxtLink to="/" @click="menu =! menu">Photo</NuxtLink></li>
							<li><NuxtLink to="/" @click="menu =! menu">EXPOSURE</NuxtLink></li>
						</ul>
		      </div>
		    </div>
		</Transition>
		</Teleport>
	</div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
	transform: translateY(-1%);
  opacity: 0;
}

.slide-up-leave-to {
	transform: translateY(-1%);
  opacity: 0;
}
</style>

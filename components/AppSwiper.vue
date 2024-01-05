<template>
	<div class="scroll-bg relative overflow-hidden">
		<div class="scroll-swiper flex w-max animate-move-left">
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-3.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-4.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-5.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-6.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-7.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-3.jpg');">
			</div>
		</div>
		<div class="scroll-swiper flex w-max animate-move-right">
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-8.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-9.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-10.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-11.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-12.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-13.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-14.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-8.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-9.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/swipers/sw-10.jpg');">
			</div>
		</div>
	</div>
</template>

<style scoped>
/*.scroll-bg {
	mask-image: linear-gradient(90deg, transparent, #656 20%, #656 80%, transparent) !important;
}*/
.scroll-swiper {
	animation-play-state: running;
}
/*.scroll-swiper:hover {
	animation-play-state: paused;
}*/
.animate-move-left {
  -webkit-animation: moveLeft 60s linear 0s infinite normal none;
  animation: moveLeft 60s linear 0s infinite normal none;
}

@keyframes moveLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-3360px, 0, 0);
  }
}

.animate-move-right {
  -webkit-animation: moveRight 60s linear 0s infinite normal none;
  animation: moveRight 60s linear 0s infinite normal none;
}

@keyframes moveRight {
  0% {
    transform: translate3d(-3360px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}


</style>
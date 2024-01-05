<template>
	<!-- 輪播圖片 -->
	<div class="relative overflow-hidden">
		<div class="scroll-swiper flex w-max animate-move-left">
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-1.jpg');">
			</div>
		</div>
		<div class="scroll-swiper flex w-max animate-move-right">
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
			<div class="w-[480px] h-[360px] bg-cover" style="background-image: url('/title-2.jpg');">
			</div>
		</div>
	</div>
</template>

<style scoped>
.scroll-swiper {
	animation-play-state: running;
}
.scroll-swiper:hover {
	animation-play-state: paused;
}
.animate-move-left {
  -webkit-animation: moveLeft 60s linear 0s infinite normal none;
  animation: moveLeft 60s linear 0s infinite normal none;
}

@keyframes moveLeft {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-2000px, 0, 0);
  }
}

.animate-move-right {
  -webkit-animation: moveRight 60s linear 0s infinite normal none;
  animation: moveRight 60s linear 0s infinite normal none;
}

@keyframes moveRight {
  0% {
    transform: translate3d(-2000px, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
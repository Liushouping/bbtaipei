<template>
	<div class="scroll img-box flex flex-row" style="--t: 60s">
    <div class="flex flex-row">
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
    </div>

    <div class="flex flex-row">
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
    </div>
  </div>
</template>


<style scoped>
.scroll {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.scroll > div {
  white-space: nowrap;
  animation: animate var(--t) linear infinite;
  animation-delay: calc(var(--t) * -1);
}
@keyframes animate {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.scroll > div:nth-child(2) {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / -2);
}
@keyframes animate2 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-200%);
  }
}

.scroll:hover > div {
  animation-play-state: paused;
}

</style>
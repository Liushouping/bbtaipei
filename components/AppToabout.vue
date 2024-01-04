<template>
	<div 
	class="relative bg-gray-900 w-full h-full bg-cover bg-center flex flex-col justify-center items-center"
	style="background-image: url(/bg.jpg);">
		<div class="absolute z-10 bg-gray-900/70 backdrop-blur-md w-full h-full">
		</div>
<!-- 		<div class="relative w-full h-[400px] z-20 bg-gray-900">
			<Swiper
			    :modules="[SwiperAutoplay, SwiperEffectCreative]"
			    :slides-per-view="1"
			    :loop="true"
			    :effect="'creative'"
			    :autoplay="{
			      delay: 3000,
			      disableOnInteraction: true,
			    }"
			    :creative-effect="{
			      prev: {
			        shadow: false,
			        translate: ['-20%', 0, -1],
			      },
			      next: {
			        translate: ['100%', 0, 0],
			      },
			    }"
			  >
			    <SwiperSlide class="w-full cursor-pointer">
					<img src="/title-1.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full cursor-pointer">
					<img src="/title-2.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full cursor-pointer">
					<img src="/title-3.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full cursor-pointer">
					<img src="/title-4.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
			  </Swiper>
		</div> -->
		<div 
		class="max-w-[80%] w-full h-full py-36 z-20 text-white flex flex-col space-y-6 justify-center items-center">
			<div class="w-full h-full flex flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-16 flex flex-col md:flex-row justify-center items-center">
				<div class="w-full md:w-1/2">
					<ul>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-6">OMNI，區區四個字母，卻涵蓋了天地四方</h5></li>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-4">魅力，包羅萬象。</h5></li>
						<li>
							<p class="text-gray-50 text-[14p] font-light">OMNI 一字源於拉丁文，有萬象、全能之意。負責規劃與統籌的 theLOOP 團隊早在構思之初，便對 OMNI 一詞情有獨鍾，無非是認為唯有這個字能將這個場所包羅萬象、無奇不有的魔力給表現出來。為了將這個抽象的意境表現出來，團隊成員遠赴拉斯維加斯、Ibiza、倫敦、上海、首爾等地，親訪這些娛樂地標的指標夜店，再將 theLOOP 團隊多年來成功舉辦 White Party 白色派對，以及 Halloween Massive 萬獸派對及國際級萬人巨型音樂季的專業智慧投注於 OMNI 的軟硬體規劃之中，務求將 OMNI 當中「包羅萬象」的含義完整地具象化。</p>
						</li>
					</ul>
				</div>
				<div class="w-full md:w-1/2">
					<img src="/toabout-1.jpg" class="w-full">
				</div>
			</div>

			<div 
			class="w-full h-full flex flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-16 flex flex-col md:flex-row justify-center items-center">
				<div class="w-full md:w-1/2 order-2 md:order-1">
					<img src="/toabout-2.jpg" class="w-full">
				</div>
				<div class="w-full md:w-1/2 order-1 md:order-2">
					<ul>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-6">OMNI，區區四個字母，卻涵蓋了天地四方</h5></li>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-4">魅力，包羅萬象。</h5></li>
						<li>
							<p class="text-gray-50 text-[14p] font-light mb-6 md:mb-0">OMNI 一字源於拉丁文，有萬象、全能之意。負責規劃與統籌的 theLOOP 團隊早在構思之初，便對 OMNI 一詞情有獨鍾，無非是認為唯有這個字能將這個場所包羅萬象、無奇不有的魔力給表現出來。為了將這個抽象的意境表現出來，團隊成員遠赴拉斯維加斯、Ibiza、倫敦、上海、首爾等地，親訪這些娛樂地標的指標夜店，再將 theLOOP 團隊多年來成功舉辦 White Party 白色派對，以及 Halloween Massive 萬獸派對及國際級萬人巨型音樂季的專業智慧投注於 OMNI 的軟硬體規劃之中，務求將 OMNI 當中「包羅萬象」的含義完整地具象化。</p>
						</li>
					</ul>
				</div>
			</div>

			<div 
			class="w-full h-full flex flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-16 flex flex-col md:flex-row justify-center items-center">
				<div class="w-full md:w-1/2">
					<ul>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-6">OMNI，區區四個字母，卻涵蓋了天地四方</h5></li>
						<li><h5 class="text-gray-50 text-[21px] font-medium mb-4">魅力，包羅萬象。</h5></li>
						<li>
							<p class="text-gray-50 text-[14p] font-light">OMNI 一字源於拉丁文，有萬象、全能之意。負責規劃與統籌的 theLOOP 團隊早在構思之初，便對 OMNI 一詞情有獨鍾，無非是認為唯有這個字能將這個場所包羅萬象、無奇不有的魔力給表現出來。為了將這個抽象的意境表現出來，團隊成員遠赴拉斯維加斯、Ibiza、倫敦、上海、首爾等地，親訪這些娛樂地標的指標夜店，再將 theLOOP 團隊多年來成功舉辦 White Party 白色派對，以及 Halloween Massive 萬獸派對及國際級萬人巨型音樂季的專業智慧投注於 OMNI 的軟硬體規劃之中，務求將 OMNI 當中「包羅萬象」的含義完整地具象化。</p>
						</li>
					</ul>
				</div>
				<div class="w-full md:w-1/2">
					<img src="/toabout-1.jpg" class="w-full">
				</div>
			</div>

		</div>
	</div>
</template>
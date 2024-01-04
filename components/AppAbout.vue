<script setup>
</script>
<template>
	<div 
	id="about"
	class="relative bg-white w-full h-[2300px] sm:h-[1800px] flex justify-center items-start bg-cover bg-left bg-bottom"
	style="background-image: url(/bg.jpg);">
		<div class="bg-black/10 backdrop-blur-xl w-full h-full absolute z-10"></div>
		<div 
		class="absolute w-[80%] h-auto -top-[125px] z-20 flex flex-col">
			<div class="w-full flex justify-end items-center space-x-2">
				<span class="text-[10px] text-gray-50 tracking-[2px]">2024 BB Taipei 台北夜間娛樂指標</span>
				<hr class="w-[14px] h-[2px]">
			</div>
		</div>
		<div 
		class="absolute w-[80%] h-auto -top-[100px] z-20 flex flex-col">
			<!-- -->
			<div class="bg-white w-full flex flex-col lg:flex-row">
				<div 
				class="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 p-12 text-[14px]">
					<div class="bg-gray-950 w-[60px] h-[60px] flex justify-center items-center rounded-lg">
						<img src="/logo.svg" class="w-[40px]">
					</div>
					<p class="font-light">BB Taipei (Blue Balls) 台北最火辣的夜間娛樂品牌. 台灣的紅磨坊，沈浸式的瘋馬秀. 於2023年11月在台灣夜場地標ATT 4 FUN 10樓開幕，由加籍首席體驗設計師WT親自操刀，並由周杰倫演唱會專屬團隊首次將小巨蛋規格設備導入室內品牌，創造台灣最高規格的娛樂體驗。</p>
					<p class="font-light">從1000坪大的雷射字幕到融合現代小百老匯沈浸式的卡座設計，高規格的科技下隱藏的是夜間娛樂的人文深度。每週來台演出的韓國DJ及百大佐全台萬知名網紅模特舞者的，以全新的沈浸型態呈現紅磨坊的精神。</p>
					<p class="font-light">戶外更藏有亞洲首個粉紅沙灘水煙吧。極具特色。普開幕即吸引美日韓的朋友入台朝聖。邀請您每週末ㄧ同見證台灣新式紅魔紡在世界的崛起。</p>
				</div>
				<div 
				class="w-full lg:w-1/2 h-[600px] bg-cover bg-top"
				style="background-image: url(about-1.jpg);">
				</div>
			</div>
			<!-- -->
			<div class="bg-gray-900 w-full flex flex-col lg:flex-row">
				<div 
				class="w-full lg:w-1/2 h-[600px] bg-cover bg-top"
				style="background-image: url(/about-4.jpg);">
				</div>
				<div 
				class="w-full lg:w-1/2 h-[600px] bg-cover bg-top"
				style="background-image: url(/about-3.jpg);">
				</div>
			</div>
			<!-- -->
			<div class="bg-white w-full flex flex-col lg:flex-row">
				<div 
				class="w-full lg:w-1/2 h-[600px] bg-cover bg-center"
				style="background-image: url(about-2.jpg);">
				</div>
				<div 
				class="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 p-12 text-[14px]">
					<h5 class="text-[21px] font-bold">BB Taipei 營業時間 / OPERATING HOURS</h5>
					<ul class="text-[14px] font-light">
						<li>每週日、一、三、四、五、六</li>
						<li class="mb-4">22:00 ～ 04:00</li>
						<li class="mb-4">每週二 公休</li>

						<li class="mb-4">如有任何包場或其他特殊需求，請撥打電話或私訊社群聯絡我們</li>

						<li class="w-[160px] bg-gray-900 px-4 py-2 text-gray-50 rounded-md flex flex-row space-x-2 items-center">
							<NuxtLink to="https://www.facebook.com/profile.php?id=100095099185394" target="_blank">追蹤近期活動</NuxtLink>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
							  <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
							</svg>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
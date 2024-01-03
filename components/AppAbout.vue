<script setup>
const partners = [
	{
		src: "/partner/par-1.png",
	},
	{
		src: "/partner/par-2.jpeg",
	},
	{
		src: "/partner/par-3.jpeg",
	},
	{
		src: "/partner/par-4.jpeg",
	},
	{
		src: "/partner/par-5.jpeg",
	},
];
</script>
<template>
	<div 
	class="relative bg-white w-full h-[2300px] sm:h-[1200px] flex justify-center items-start bg-cover bg-bottom"
	style="background-image: url(OMNI-View.jpg);">
		<div 
		class="absolute bg-white w-[80%] h-auto -top-[100px] z-20">
			<div class="w-full flex flex-col sm:flex-row">
				<div 
				class="w-full sm:w-1/2 flex flex-col justify-center items-start space-y-6 p-12 text-[14px]">
					<h5 class="text-[32px] font-medium">OMNI TAIPEI</h5>
					<p class="font-light">BB Taipei (Blue Balls) 台北最火辣的夜間娛樂品牌. 台灣的紅磨坊，沈浸式的瘋馬秀. 於2023年11月在台灣夜場地標ATT 4 FUN 10樓開幕，由加籍首席體驗設計師WT親自操刀，並由周杰倫演唱會專屬團隊首次將小巨蛋規格設備導入室內品牌，創造台灣最高規格的娛樂體驗。</p>
					<p class="font-light">從1000坪大的雷射字幕到融合現代小百老匯沈浸式的卡座設計，高規格的科技下隱藏的是夜間娛樂的人文深度。每週來台演出的韓國DJ及百大佐全台萬知名網紅模特舞者的，以全新的沈浸型態呈現紅磨坊的精神。</p>
					<p class="font-light">戶外更藏有亞洲首個粉紅沙灘水煙吧。極具特色。普開幕即吸引美日韓的朋友入台朝聖。邀請您每週末ㄧ同見證台灣新式紅魔紡在世界的崛起。</p>
				</div>
				<div 
				class="w-full sm:w-1/2 h-[600px] bg-cover"
				style="background-image: url(OMNI-Atmosphere.jpg);">
				</div>
			</div>
			<!-- -->
			<div class="w-full flex flex-col sm:flex-row">
				<div 
				class="w-full sm:w-1/2 h-[600px] bg-cover"
				style="background-image: url(OMNI-Event.jpg);">
				</div>
				<div 
				class="w-full sm:w-1/2 flex flex-col justify-center items-start space-y-6 p-12 text-[14px]">
					<h5 class="text-[21px] font-medium">OMNI 營業時間 / Operating Hours:</h5>
					<ul class="text-[14px] font-light">
						<li>每週三、四、五、六、日</li>
						<li class="mb-4">22:30 ～ 04:30</li>

						<li>Wed, Thurs, Fri., and Sun.</li>
						<li class="mb-4">22:30 ～ 04:30</li>

						<li>訂位 / RSVP:</li>
						<li>+886-983-803-388</li>
					</ul>

					<hr class="bg-black h-[2px] w-full">
					<div class="flex flex-row flex-wrap flex-row space-x-2 justify-start">
						<img 
						v-for="(partner, index) in partners"
      					:key="index"
						:src="partner.src" 
						class="w-[80px]">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
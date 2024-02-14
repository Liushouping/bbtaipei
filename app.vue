<template>
  <div>
    <NuxtLayout class="tracking-[2px]">
        <NuxtPage />
        <AppSocial />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;500;700&display=swap');

:root {
  font-family: 'Noto Sans TC', sans-serif;
  letter-spacing: 1px;
}

/*.font-anton {
  font-family: 'Anton', sans-serif;
}*/

/*.page-enter-active,
.page-leave-active {
  transition: all .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}*/
</style>
<template>
  <section>
    <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8 ">
        <div class="max-w-lg md:max-w-none">
          <h1 class="text-2xl text-center font-bold text-indigo-500 py-8">
            {{ $t('myName') }}
          </h1>
          <hr class="px-8">
          <div class="grid md:grid-cols-2 gap-2 my-4 px-3">
            <div class="text-indigo-500 text-xl">{{ $t('job') }}</div>
            <div class="text-xl">{{ $t('jobTitle') }}</div>
            <div class="text-indigo-500 text-xl">{{ $t('workPlace') }}</div>
            <div class="text-xl">{{ $t('workPlaceName')}}</div>
            <div class="text-indigo-500 text-xl">{{ $t('gender') }}</div>
            <div class="text-xl">{{ $t('male') }}</div>
            <div class="text-indigo-500 text-xl">{{ $t('age') }}</div>
            <div class="text-xl">{{ $t('ageNum') }}</div>
            <div class="text-indigo-500 text-xl">{{ $t('status') }}</div>
            <div class="text-xl">{{ $t('married') }}</div>
            <div class="text-indigo-500 text-xl">{{ $t('phone') }}</div>
            <div class="text-xl">{{ $t('phoneNum') }}</div>
          </div>
          <hr>
        </div>
        <div>
          <img class="rounded-full object-cover size-[350px] border-2 border-indigo-500" src="@/assets/Theng.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>


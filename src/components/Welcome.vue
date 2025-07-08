<template>
  <section>
    <div class="mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 md:items-center md:gap-8">
        <div class="max-w-lg md:max-w-none">
          <h1 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {{ $t('hello') }}
          </h1>
          <p class="mt-4 text-xl indent-8 text-justify">{{ $t('welcome') }}
          </p>
          <div class="mt-4 flex justify-center gap-4 sm:mt-6">
            <router-link
              class="inline-block rounded border border-indigo-600 bg-indigo-500 px-5 py-3 text-white text-xl hover:bg-indigo-300"
              to="/project">
              {{$t ('my_project') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

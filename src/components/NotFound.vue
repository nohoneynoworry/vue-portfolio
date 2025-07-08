<template>
  <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-8xl font-bold text-indigo-500">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-500 sm:text-7xl">Page not found
      </h1>
      <p class="mt-6 md:text-3xl text-red-500 sm:text-xl/8">Sorry, we couldn’t find the page
        you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link to="/"
          class="rounded-md bg-indigo-500 px-4 py-3 text-md font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          <dl class="flex gap-2 lg:gap-6">
            <div class="flex gap-2">
              <dt><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H6M12 5l-7 7 7 7" />
                </svg></dt>
              <dd>Go to homepage</dd>
            </div>
          </dl>
        </router-link>
        <router-link to="/contact"
          class="rounded-md text-white bg-green-500 px-4 py-3 text-md shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 font-semibold">
          <dl class="flex gap-2 lg:gap-6">
            <div class="flex gap-2">
              <dt>Contact supporter</dt>
              <dd><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h13M12 5l7 7-7 7" />
                </svg></dd>
            </div>
          </dl>
        </router-link>
      </div>
    </div>
  </main>
</template>

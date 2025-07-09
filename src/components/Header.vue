<template>
  <header class="bg-green-100">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <router-link class="block text-teal-800" to="/">
        <span class="sr-only">Home</span>
        <img src="@/assets/Logo.jpg" width="80" height="80" alt="">
      </router-link>

      <div class="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" class="hidden md:block">
          <ul class="flex items-center gap-6 text-xl font-semibold text-black">
            <li>
              <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/about-me" exact>
                {{ $t('about') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/project">
                {{ $t('projects') }}
              </router-link>
            </li>
            <li>
              <router-link class="text-gray-500 transition hover:text-gray-500/75" to="/contact">
                {{ $t('contact') }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div v-if="$i18n.locale === 'en'" @click="changeLanguage('khm')"
            class="hover:cursor-pointer bg-indigo-500 rounded-3xl px-3 py-1 text-white hover:bg-indigo-300">
            ភាសាខ្មែរ</div>
          <div v-else @click="changeLanguage('en')"
            class="hover:cursor-pointer bg-indigo-500 rounded-3xl px-3 py-1 text-white hover:bg-indigo-300">
            English</div>
          <div class="sm:flex sm:gap-4">
            <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a href="https://www.facebook.com/share/1SAmEnGbBs/" rel="noreferrer" target="_blank"
                  class="text-gray-700 transition hover:opacity-75">
                  <span class="sr-only">Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4a90e2">
                    <path
                      d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm4 7.278V4.5h-2.286c-2.1 0-3.428 1.6-3.428 3.889v1.667H8v2.777h2.286V19.5h2.857v-6.667h2.286L16 10.056h-2.857V8.944c0-1.11.572-1.666 1.714-1.666H16z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/nohoneynoworry" rel="noreferrer" target="_blank"
                  class="text-gray-700 transition hover:opacity-75">
                  <span class="sr-only">GitHub</span>
                  <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/nohoneynoworry" rel="noreferrer" target="_blank"
                  class="text-gray-700 transition hover:opacity-75">
                  <img src="@/assets/telegram.svg" width="28" height="28" alt=""></a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                  fill="black">
                  <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

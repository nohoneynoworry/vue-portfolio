<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-green-500 sm:text-3xl">My Projects: {{ projects.length }}
        </h2>
      </header>
      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        <li v-for="(project, index) in projects" :key="index">
          <router-link :to="`project/${project.name}`"
            class="block rounded-md bg-indigo-500 shadow-lg shadow-cyan-500/50 sm:p-6">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
              <div class="sm:order-last sm:shrink-0">
                <img alt="" src="@/assets/Theng.jpg" class="size-16 rounded-full object-cover sm:size-[88px]" />
              </div>
              <div class="mt-4 sm:mt-0">
                <h3 class="text-green-100 uppercase font-bold">
                  {{ project.name }}
                </h3>
                <p class="text-white">
                  {{ project.language }}
                </p>
              </div>
            </div>
            <dl class="mt-6 flex gap-4 lg:gap-6">
              <div class="flex items-center gap-2">
                <dt class="text-white">
                  <span class="sr-only">Created at</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </dt>
                <dd class="text-md text-white">{{ project.created_at }}</dd>
              </div>
              <div class="flex items-center gap-2">
                <dt class="text-white">
                  <span class="sr-only"> Watchers </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" class="size-5">
                    <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </dt>
                <dd class="text-md text-white">{{ project.watchers }}</dd>
              </div>
            </dl>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  async mounted() {
    try {
      const response = await axios.get('https://api.github.com/users/nohoneynoworry/repos',
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          }
        }
      );
      this.projects = response.data;
    } catch (error) {
      console.error('Error fatching projects:', error);
      return;
    }
  },
  data() {
    return {
      projects: []
    }
  }
}
</script>

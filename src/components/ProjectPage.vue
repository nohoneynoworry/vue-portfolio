<template>
  <div class="grid grid-cols-7  gap-2 my-4">
    <div class="text-indigo-500 col-start-3 uppercase">Project name:</div>
    <div class="uppercase">{{ project.name }}</div>
    <div class="text-indigo-500 col-start-3 uppercase">Date pushed:</div>
    <div>{{ project.pushed_at }}</div>
    <div class="text-indigo-500 col-start-3 uppercase">Updated at:</div>
    <div>{{ project.updated_at }}</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  async mounted() {
    // catch params
    try {
      const repo_name = this.$route.params.name;
      const response = await axios.get('https://api.github.com/repos/nohoneynoworry/' + repo_name, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        }
      })
      this.project = response.data;
    } catch (error) {
      console.error('Error fetching project:', error);
      this.project = {};
    }

  },
  data() {
    return {
      project: {}
    }
  }
}
</script>

<template>
  <div v-for="repo of repos" class="list-group" :key="repo.id" >
    <a
      :href="repo.html_url"
      target="_blank"
      class="list-group-item list-group-item-action mb-3 animate__animated animate__pulse"
    >
      <div>
        <h6>
          {{ repo.name }}
        </h6>
        <p class="text-muted">
          {{ repo.description }}
        </p>
        <div class="d-flex justify-content-around">
          <span>
            <i class="fas fa-eye" aria-hidden="true"></i>
            {{ repo.watchers_count }}
          </span>
          <span>
            <i class="fas fa-code-branch"></i> {{ repo.stargazers_count }}
          </span>
          <span>
            <i class="fas fa-star" aria-hidden="true"></i>
            {{ repo.forks_count }}
          </span>
          <span>
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            {{ repo.open_issues }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: "Repos",
  props: ["repos_url"],
  data: function(){
      return{
          repos: []
      }
  },
  methods: {
      fetchData: async function(){
          if (this.repos_url) {
              const api = this.repos_url;
              const {data} = await Axios.get(api)
              this.repos = data
          }
      }
   
  },
   mounted(){
        this.fetchData();
    }
  
};
</script>

<style>
</style>


<template>
  <div class="container h-100">
    <div class="row mt-5" v-if="!userData">
      <div class="col-md-6">
        <img
          src="../assets/home.svg"
          alt=""
          class="img-fluid hero-img animate__animated animate__fadeIn animate__slow"
        />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center p-5">
        <h3
          class="text-center text-uppercase animate__animated animate__bounce"
        >
          Search your github profile
        </h3>
        <input
          type="text"
          placeholder="Github User Name"
          class="form-control"
          v-model="userName"
        />
        <button type="button" class="btn btn-primary" @click="fetchData">
          Search
        </button>
      </div>
    </div>

    <div class="row mt-3" v-else>
      <div class="col-md-4">
        <user-card  :userData="userData" :resetData="resetData" />
      </div>
      <div class="col-md-8">
        <repos :repos_url="repos_url"/>
        
      </div>
    </div>
  </div>
</template>

<script>

import Axios from "axios"

//components
import UserCard from '../components/UserCard.vue'
import Repos from "../components/Repos.vue"


import { mapGetters } from "vuex"    //map getetrs are used to check that user is authenticated or not


export default {
  name: "Home",
  components: {UserCard, Repos},
  data: function(){
    return{
      userName: "",
      userData: null,
      repos_url: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watcher: {
    isAyuthenticated: function(newVal){
      if (!newVal) {
        this.this.$router.replace("/signin")
      }
    }
  },
  // making a web request
  methods: {
    fetchData: async function(){
      try {
        const api = "https://api.github.com/users/"
        const {data } = await Axios.get(api+this.userName)
        this.userData = data
        this.repos_url = data.repos_url

      } catch (error){
        this.$swal({
          icon: "error",
          title: "ops",
          text: "Please check user name"
        })
      }
    },
    resetData: function(){
      this.userName = "";
      this.userData = null;
      this.repos_url = null;

    }

  }
  
};
</script>


<style  scoped>
.hero-img {
  height: 70vh;
  width: 100%;
}
button {
  margin-top: 5px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>
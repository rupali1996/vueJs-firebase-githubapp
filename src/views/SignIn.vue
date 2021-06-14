<template>
  <div class="container h-100">
    <div class="row mt-5">
      <div class="col-md-6">
        <img
          src="../assets/signin_image.png"
          alt=""
          class="img-fluid hero-img animate__animated animate__fadeIn animate__slow"
        />
      </div>

      <div class="col-md-6 m-auto">
        <form @submit.prevent="signIn" class="text-dark card card-body">
          <p class="text-center text-primary text-header">Login to Continue</p>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim = "email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <button type="submit" class="btn btn-primary btn-block">
            SignIn
          </button>

          <router-link to="/signup" class="mt-2"
            >Have an account? SignUp here</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"

import { mapGetters } from 'vuex'
export default {
  
  data: function(){
      return{
          email: "",
          password: "",
      }
  },
  computed: {
      ...mapGetters(["isAuthenticated"])
  },
  watch: {
      isAuthenticated: function(newVal){
          console.log({newVal})
          if (newVal) {
              return this.$router.replace("/")
          }
      }
  },
  methods: {
      signIn: function(){
            if(!this.email) return this.$swal("Please provide email")
            if(!this.password) return this.$swal("Please provide password")

            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((res) => {
                    console.log(res)
                    this.$router.push({path: "/"})
                })
                .catch((err) => {
                    this.$swal({
                        icon: "error",
                        title: "Ops",
                        text: err.message
                    })
                })
        }
  }
  
};
</script>

<style scoped>
.hero-img {
  height: 445px;
  width: 100%;
}
.text-header {
  text-transform: uppercase;
  border-bottom: 1px solid blue;
  font-size: 22px;
}
</style>
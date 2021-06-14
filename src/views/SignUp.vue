<template>
  <div class="container h-100">
    <div class="row mt-5">
      <div class="col md-6 m-auto">
        <img
          src="../assets/signup_image.svg"
          alt=""
          class="img-fluid hero-img animate__animated animate__fadeIn animate__slow"
        />
      </div>

      <div class="col-md-6 m-auto">
        <form @submit.prevent="signUp" class="text-dark card card-body">
          <p class="text-center text-primary text-header">
            SignUp to Get Started
          </p>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model.trim ="email"
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

          <button type="submit" class="btn btn-primary">SignUp</button>

          <router-link to="/signin" class="mt-2"
            >Have an account? SignIn here</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {

    data: function(){
        return {
            email:"",
            password:""
        }
    },
    methods: {
        signUp: function(){
            if(!this.email) return this.$swal("Please provide email")
            if(!this.password) return this.$swal("Please provide password")

            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
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

}
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

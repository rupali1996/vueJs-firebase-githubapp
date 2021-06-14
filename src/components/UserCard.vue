<template>
  <div class="card user-card text-black border-dark">
    <div class="background bg-secondary text-center">
      <img
        :src="userData.avatar_url"
        class="img-fluid rounded-circle profile-pic border-2 border-primary bg-secondary animate__animated animate__fadeIn animate__slow"
      />
    </div>

    <div class="card-body">
      <h5 class="card-title text-center text-black-50">{{userData.name}} </h5>
      <p class="card-text">
        {{userData.bio}} 
      </p>
      <p class="card-text">
        <span class="text-muted"> company :- </span> {{userData.company}} 
      </p>
      <p class="card-text">
        <span class="text-muted"> followers :- </span> {{userData.followers}} 
      </p>
      <p class="card-text">
        <span class="text-muted"> following :- </span> {{userData.following}} 
      </p>
      <p class="card-text">
        <span class="text-muted"> repository count :- </span>
        {{userData.public_repos }}
      </p>
      <p class="card-text">
        <small class="text-muted"
          >Last updated
          {{formatedDate}}
          ago</small
        >
      </p>
      <button
        type="button"
        class="btn btn-primary btn-block"
        @click="resetData"
      >
        Search Another User
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ['userData','resetData'],
  computed: {
      formatedDate: function(){
          return new Date(this.userData.updated_at).toDateString()
      }
  }
};
</script>

<style scoped>
.card {
  margin-top: 130px;
}
.background {
  height: 120px;
}

.profile-pic {
  margin-top: -100px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  z-index: 100;
  border: 5px solid #fff;
}

.card-text {
  color: #333;
}
</style>
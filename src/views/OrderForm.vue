<template>
  <div class="modal-form-show"    >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Enter your Email and phone number</h5>
          <button type="button" class="close" @click="clouseForm">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" @submit="checkForm" novalidate="true">
              <div v-if="errors.length">
                <strong>Please fix errors below:</strong>
                  <p v-for="(error,index) in errors" :key="index">{{ error }}</p>
              </div>
            <input type="email" class="form-control mb-3" placeholder="example@gmail.com" v-model="email">
            <input type="text" class="form-control mb-3" placeholder="+38 (066) 257 58 30" v-model="phone">
            <input
                type="submit"
                value="Submit"
                class="btn btn-info"
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data(){
    return{
      errors: [],
      phone: null,
      email: null,
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.phone) {
        this.errors.push('Enter your phone number.');
      }
      if (!this.email) {
        this.errors.push('Enter your Email address .');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Email is not correct.Please enter correct Email address.');
      }

      if (!this.errors.length) {
        return alert('TY!')
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    clouseForm(){
      this.$emit('clouseForm')
    }
  }
}
</script>

<style lang="scss">
  .modal-form-show{
    z-index: 22;
  }
</style>
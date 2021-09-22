<template>
  <div class="root">
    <!-- {{addGroup}} -->
    <form>
      <!-- Group Name -->
      <div
        class="form-group"
        :class="{ error: v$.addGroup.groupName.$errors.length }"
      >
        <input
          class="form-control"
          placeholder="Group Name"
          type="text"
          oninput="this.value = this.value.replace(/[^a-z ]/gi, '').replace(/(\..*?)\..*/g, '$1');"  
          v-model="v$.addGroup.groupName.$model"
        />
        <div class="pre-icon os-icon os-icon-fingerprint"></div>
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.addGroup.groupName.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Code -->
      <div class="form-group" :class="{ error: v$.addGroup.code.$errors.length }">
        <input
          class="form-control"
          placeholder="Code"
          type="text"
          v-model="v$.addGroup.code.$model"
          oninput="this.value = this.value.replace(/[^a-z 0-9]/gi, '').replace(/(\..*?)\..*/g, '$1');"  
        />
        <div class="pre-icon os-icon os-icon-fingerprint"></div>
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.addGroup.code.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Email -->
      <div class="form-group" :class="{ error: v$.form.email.$errors.length }">
        <input
          class="form-control"
          placeholder="E-mail"
          type="email"
          v-model="v$.form.email.$model"
        />
        <div class="pre-icon os-icon os-icon-user-male-circle"></div>
        <!-- error message -->
        <div
          class="input-errors"
          style="color: red"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <!-- number -->
      <div class="form-group" :class="{ error: v$.form.num.$errors.length }">
        <input
          class="form-control"
          placeholder="Number"
          type="text"
          oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
          v-model="v$.form.num.$model"
        />
        <div class="pre-icon os-icon os-icon-fingerprint"></div>
        <!-- error message -->
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.num.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="buttons-w">
        <button @click.prevent="submitForm" class="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  alpha,
  alphaNum,
  maxLength,
  numeric,
} from "@vuelidate/validators";
export default {
  
  props:{
   addGroup :Object, // to access  data from table component(parent)
  },

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      resultdata :'',
      form: {
        email: "",
        num: "",
      },
    };
  },

  validations() {
    return {
      form: {
       
        email: {
          required,
          email,
        },
        num: {
          required,
          numeric,
        },
      },
     addGroup :{
         groupName: {
          required,
          max: maxLength(10),

        },
        code: {
          required,
          alphaNum,
        },
      }
    };
  },

  methods: {
    submitForm() {
      // console.log(this.v$);
      const checkData = this.v$.$validate(); // checks all inputs
      if (!checkData) {// if ANY fail validation
        // alert("Form successfully submitted.");
        this.sendNewData()
      }
    },

    sendNewData(){
      this.resultdata = this.addGroup
      // console.log(this.resultdata)
      this.$emit("click" , this.resultdata );

      return this.resultdata
    }
  },
};
</script>












<style scoped>
.root {
  width: 312pt;
  margin: 10pt auto;
  background-color: #fff;
  padding: 30pt;
  border-radius: 20pt;
}
input {
  border: none;
  outline: none;
  border-bottom: 1pt solid #ddd;
  font-size: 1em;
  padding: 5pt 0;
  margin: 10pt 0 5pt 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10pt 20pt;
  margin-top: 10pt;
  border: none;
  color: white;
}
.error-msg {
  color: red;
}
</style>

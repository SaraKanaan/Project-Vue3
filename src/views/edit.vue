<template>
  <div>
    <formdata />
  </div>
</template>

<script
>
import { Options, Vue } from "vue-class-component";
import formdata from "@/components/formdata"
@Options({
 components :{
   formdata
 }
})
export default class edit extends Vue {
}
</script>


import { Options, Vue } from 'vue-class-component'
import sidebar from "@/components/sidebar.vue";
import navbar from "@/components/navbar.vue";
import tables from "@/components/tables.vue";
@Options({
  components: {
    sidebar,
    navbar,
    tables,
  },
})

export default class Home extends Vue {
}



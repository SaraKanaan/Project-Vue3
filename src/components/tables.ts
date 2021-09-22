import AppSecGroup from "@/interface/AppSecGroup";
import ApiService from "@/services/AppSecGroup.service";
import { Options, Vue } from "vue-class-component";
import formdata from "./formdata.vue" // child data
import moment from 'moment'

@Options({
    components: {
        formdata
    },
})
export default class tables extends Vue {
    formErorr = new Array<string>();
    show = false;
    alert = false;
    addGroup = new AppSecGroup();
    lists = new Array<AppSecGroup>();
    

    //function to format date 
    DateTime(value :any) {
        return moment(value).format('YYYY-MM-DD')
      }
    // to get all Data from APIs
    getData() {
        ApiService.getAllGroups().subscribe((res: any) => {
            this.lists = res.list;
            // console.log(res.list)
        });
    };
    created() {
        this.getData()
        // console.log(this.timeStr)
    };
    sendData() {
        ApiService.addAppGroup(this.addGroup).subscribe((res: any) => {
                this.$router.push({ name: "Home" });
                this.addGroup.groupName = '';
                this.addGroup.code = '';
                this.getData()
                this.alert = !this.alert
        })

    };
    openEdit(id: any) {
        this.show = !this.show
        const result = this.lists.find((group: any) => group.id == id);
        if (result)
            this.addGroup = result;
        // console.log(result)
    };
    editedata(VAL: AppSecGroup) {
        ApiService.updateAppGroup(VAL).subscribe((res: any) => {
            this.getData()
           // console.log(' Update done')
        });
    };
    deleteData(id: any) {
        ApiService.deleteAppGroup(id).subscribe((res: any) => {
            this.getData()
            this.lists = res.list;
            console.log('delete done')
        });
    }
}

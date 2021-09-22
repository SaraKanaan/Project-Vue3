import Api from "../helpers/api-base";
import APIs from '../AllAPIs/AppSecGroup';
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";


export default class ApiService  {

    public static getAllGroups(): Observable<any> {
        return from(
            Api.post(APIs.getAllAppSecurityGroups , {})
        )
        .pipe(map( (result: any) => { return result.data }))
    }


    public static addAppGroup(params: any): Observable<any>{
        return from(
            Api.post(APIs.addAppSecurityGroup , params)
        )
        .pipe(map( (result: any) => { return result.data }))


    }
    public static updateAppGroup(params:any):Observable<any>{
        return from(
            Api.post(APIs.updateAppSecurityGroup , params)
        )
        .pipe(map( (result: any) => { return result.data }))
    }
    public static deleteAppGroup(id:any):Observable<any>{
        return from(
            Api.post(APIs.deleteAppSecurityGroup , {id:id})
        )
        .pipe(map( (result: any) => { return result.data }))
    }
}




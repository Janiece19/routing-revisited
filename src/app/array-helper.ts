import { Department } from "./shared/form-model";

export class ArrayHelper{
    getById<T extends Department>(array:Array<T>,id){
        let duplicateItems:Array<T>
       if( (array)===undefined ||  (id)===undefined)
       throw new Error('No arguments passed');
        
  else if(id>0 && id%1==0){
      let selectedItem= array.find((i:T) => i.id== id);
      
      if (selectedItem) {
      return selectedItem;
      
      } else {
      
      throw new Error('id does not exist');
      
      }
    }
      
      }
}
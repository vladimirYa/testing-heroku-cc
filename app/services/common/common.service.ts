import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    bubbleSortPyProp(array:any[], prop){
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i][`${prop}`] > array[i + 1][`${prop}`]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }
    capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

}

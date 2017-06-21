import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    answer:any;
    transform(value:any,column:any):any{
        let val =  value;
        let col=  column;
        switch (col.filter){
            case "img":
                this.answer="<img class='store-image' src='"+require(`../../common/images/`+val[col.variable])+"'>";
                break;
            case "usd":
                this.answer="$"+val[col.variable]+".00";
                break;
            case "block":
                let el=document.createElement(col.parentElement);
                el.className += col.parentClasses;
                $(el).addClass(col.parentClasses);
                for(let i=0; i<col.elements.length; i++){
                    el.appendChild(createListOfItem(col.elements[i]));
                }
                this.answer=el.outerHTML;
                break;
            case "none":
                this.answer="<div class='button button_primary'>Request Card</div>";
                break;
            default:
                this.answer=val[col.variable];
                break;
        }
        function createListOfItem(elems){
            let childEl=document.createElement(elems.name);
            $(childEl).addClass(elems.classes);
            if(elems.name=="img"){
                let source=require(`../../common/images/`+val[elems.value]);
                $(childEl).attr("src",source)
            }
            else childEl.innerText=val[elems.value];
            return childEl;
        }
        return this.answer;
    }
}

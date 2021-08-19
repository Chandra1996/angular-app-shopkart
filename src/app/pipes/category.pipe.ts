import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any,searchTerm: any): any {
    return value.filter(function(search){
      return search.category.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1
    })
  }

}

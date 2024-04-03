export type SortSlice = {
    name: string,
   property: 'rating'|'-rating'|'price'|'-price'|'title'|'-title';
  }
  
  export interface filterSlicestate  {
    searchValue : string,
    categoryId: number,
    page: number,
    sort: SortSlice,
    }
    
  
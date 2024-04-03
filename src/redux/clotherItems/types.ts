export type clotherSliceItem = {
    sortBy: string,
    src: string,
    order: string,
    category: string,
    page: number,
  }
  export enum Status {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
  }
  export interface ClotherSliceState {
    items: clotherSliceItem[],
    status: Status,
  }
    
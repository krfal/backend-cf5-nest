export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly bulto: number;
    readonly description: string;
  }
  
  export class UpdateProductDto {
    readonly name?: string;
    readonly price?: number;
    readonly bulto?: number;
    readonly description?: string;
  }
  
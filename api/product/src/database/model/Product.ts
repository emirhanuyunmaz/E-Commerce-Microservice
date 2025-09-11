export class Product {
  constructor(
      public readonly name: string,
      public readonly description: string,
      public readonly banner: string,
      public readonly type: string,
      public readonly unit: string,
      public readonly available: string,
      public readonly suplier: string,
      public readonly price: number,
      public readonly stock: number,
      public readonly XS: boolean,
      public readonly S: boolean,
      public readonly M: boolean,
      public readonly L: boolean,
      public readonly XL: boolean,
      public readonly id?: number,

  ) {}
}

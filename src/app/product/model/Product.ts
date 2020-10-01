export class Product {
  name: string = "Product Name";
  imageSrc = "http://via.placeholder.com/350x350";
  imageAltText = "A 350x350 box";
  currentPrice: number = 19.99;
  oldPrice: number = 24.99;
  promotionalMessage: string = "Save 10% with AutoShip";

  public toString = (): string => {
    return `Product[name:${this.name}]`;
  };
}

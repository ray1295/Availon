// Describing what a single product should contain -> Giving the blueprint for the product.
export class Product {
    public name: string;
    public category: string;
    public description: string;
    public imagePath: string;
    public price: string;

    // Constructor -> Addded so we can instantiate it with the new keyword and pass the args to the constructor
    constructor(name: string, category: string, desc: string, imagePath: string, price: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.price = price;
        this.category = category;
    }
}
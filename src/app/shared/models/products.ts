export class Product {
    public name: string;
    public description: string;
    public imagePath: string;

    // Constructor -> Addded so we can instantiate it with the new keywrod and pass the args to the constructor
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
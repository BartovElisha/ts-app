// console.log("Hello word");

const message = 'Hello Word';
message.toLowerCase();

// Array
const prices: number[] = [1,2,3,4,5,6,7,8];
const prices1: Array<number> = [1,2,3,4,5,6,7,8];


// unian type
//string | number | boolean;
const prices2: Array<number | string | boolean> = [1,2,3,4,5,6,7,8,'hello',true];

// Functions
function getFavoriteNumber(): number {
    return 26;
}

// const a: string = getFavoriteNumber(); // Error
const a: number = getFavoriteNumber();

// Objects
type Point = {
    x: number;
    y?: number;
}

function printCord(pt: Point) {
    console.log(pt.x, pt.y);
    console.log({x: 100, y: 50});
}

printCord({ x: 100, y: 50});
printCord({ x: 200});

// Interface
interface Point2 {
    x: number;
    y?: number;
}

// additional types
type Gender = 'male' | 'female';

enum ProductStatus {
    OutOfStock = "Out of Stock",
    Stock = "Stock",
}

const product = ProductStatus.Stock;






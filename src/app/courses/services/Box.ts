export class Box
{
    constructor(private multiply: Multiply)
    {

    }
    Volume(w: number, h: number, d: number): string
    {
        let result = this.multiply.DoMultiply(w, h, d);
        
        if(result <= 1000)
        {
            return "SUCCESS";
        }
        return "FAILED";
    }
}

class Multiply
{
    DoMultiply(x: number, y: number, z: number): number
    {
        console.log("DoMultiply() of Multiply class called");
        return (x * y * z);
    }
}
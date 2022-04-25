function calculateAreaOfACircle(radius)
{
    this.radius = radius;
    const PI = 3.14159;

    this.area = function ()
    {
        return PI * this.radius * this.radius;
    };

}
var cir = new calculateAreaOfACircle(3);
console.log('Area =', cir.area().toFixed(2));

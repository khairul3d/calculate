function calculate(){
   const traiangleInt= document.getElementById('triangle-base');
   const traiangleBase= traiangleInt.value;
   const base=parseFloat(traiangleBase)
   console.log(base);

const triangleheaight= document.getElementById('triangle-heaight');
const traiangle= triangleheaight.value;
const heaight=parseFloat(traiangle);
console.log(heaight);
const area = 0.5 * base * heaight;
console.log('Area of the triangle is:', area);


const ractangleleArea= document.getElementById('triangle-area');
ractangleleArea.innerText=area;
}
// racangle 

function  ractanglele(){
    const ractangleleArea= document.getElementById('triangle-width');
    const ractangleBase= ractangleleArea.value;
    const width=parseFloat(ractangleBase)
    console.log(width);
 
 const ractangleheaight= document.getElementById('triangle-length');
 const raractangle= ractangleheaight.value;
 const length=parseFloat(raractangle);
 console.log(length);
 const area = width * length ;
 console.log('Area of the triangle is:', area);
 
 
 const ractangleArea= document.getElementById('ractangle-area');
 ractangleArea.innerText=area;
 }


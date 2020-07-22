let countReviews = 291;
let great = 130;
let good = 65;
let middle = 65;
let bad = 31;
const countRev = countReviews / 100;

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

// function recolor(rev) {
//     if (rev === 0) {
//         return this.color = "#FFFFFF"
//     }
// }
const data = [
    {   
        fill: bad / countRev,
        color:"#919191",
        //delete: recolor(this.fill)
    },
    {
        fill: good / countRev,
        color:"#6FCF97"
    },
    {
        fill: middle / countRev,
        color:"#BC9CFF"
    },
    {
        fill:great / countRev,
        color:"#FFBA9C"
    }]


let donut = document.querySelector(".donut");
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let textCount = document.createElementNS("http://www.w3.org/2000/svg", "text");
let text = document.createElementNS("http://www.w3.org/2000/svg", "text");

textValue = getNoun(countReviews,'голос', 'голоса', 'голосов')

textCount.setAttribute("class","donut__count-reviews")
textCount.setAttribute("x",40);
textCount.setAttribute("y",61);

textCount.innerHTML = countReviews;

text.setAttribute("class","donut__text")

text.setAttribute("y",78);

switch(textValue) {
    case 'голос':
        text.setAttribute("x",38);
        break;
    case 'голоса':
        text.setAttribute("x",35);
        break;
    case 'голосов':
        text.setAttribute("x",32);
        break;
}

text.innerHTML = textValue;

let filled = 0;

svg.setAttribute("width","100%");
svg.setAttribute("height","100%");
svg.setAttribute("viewBox","0 0 120 121");

donut.appendChild(svg);
svg.appendChild(textCount)
svg.appendChild(text)

data.forEach(function(o,i){

    (function recolor() {
        if (o.fill === 0) {
            o.color = "#FFFFFF"
        }
    })()

    let circle = document.createElementNS("http://www.w3.org/2000/svg","circle"),
	startAngle = -90,
	radius = 58,
	cx = 60,
    cy = 61,
    stroke,
	strokeWidth = 4,
	dashArray = 2*Math.PI*radius,
	dashOffset = dashArray - (dashArray * o.fill / 100),
	angle = (filled * 360 / 100) + startAngle;
    
    circle.setAttribute("r",radius);
	circle.setAttribute("cx",cx);
	circle.setAttribute("cy",cy);
	circle.setAttribute("fill","transparent");
	circle.setAttribute("stroke",o.color);
	circle.setAttribute("stroke-width",strokeWidth);
	circle.setAttribute("stroke-dasharray",dashArray);
    circle.setAttribute("stroke-dashoffset",dashOffset + 2);
    circle.setAttribute("transform","rotate("+(angle)+" "+cx+" "+cy+")");

    svg.appendChild(circle)

	filled+= o.fill;
})
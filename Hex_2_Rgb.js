function convert()
{
    var hexin = document.getElementById("hexin").value
    var rgbin = document.getElementById("rgbin")
// First
    var first = hexin.substring(0,2)
    var first1 = 0
    var firstdigit1 = 0
    var first2 = 0
    var red = 0

    if(first[0] == 'a' || first[0] == 'A')
        {
            first1 = 10
        }
        if(first[0] == 'b' || first[0] == 'B')
            {
                first1 = 11
            }
            if(first[0] == 'c' || first[0] == 'C')
                {
                    first1 = 12
                }
                if(first[0] == 'd' || first[0] == 'D')
                    {
                        first1 = 13
                    }
                    if(first[0] == 'e' || first[0] == 'E')
                        {
                            first1 = 14
                        }
                        if(first[0] == 'f' || first[0] == 'F')
                            {
                                first1 = 15
                            }

    if(first[1] == 'a' || first[1] == 'A')
        {
            first2 = 10
        }
        if(first[1] == 'b' || first[1] == 'B')
            {
                first2 = 11
            }
            if(first[1] == 'c' || first[1] == 'C')
                {
                    first2 = 12
                }
                if(first[1] == 'd' || first[1] == 'D')
                    {
                        first2 = 13
                    }
                    if(first[1] == 'e' || first[1] == 'E')
                        {
                            first2 = 14
                        }
                        if(first[1] == 'f' || first[1] == 'F')
                            {
                                first2 = 15
                            }


// to get thr ascii value of a string
    if(first.charCodeAt(0) >= 48 && first.charCodeAt(0) <= 57)
        {
            first1 = parseInt(first[0])  
        }
    if(first.charCodeAt(1) >= 48 && first.charCodeAt(1) <= 57)
        {
            first2 = parseInt(first[1])  
        }
        firstdigit1 = first1 * 16
        red = firstdigit1 +first2

// middle
var middle = hexin.substring(2,4)
    var middle1 = 0
    var middledigit1 = 0
    var middle2 = 0
    var green = 0

    if(middle[0] == 'a' || middle[0] == 'A')
        {
            middle1 = 10
        }
        if(middle[0] == 'b' || middle[0] == 'B')
            {
                middle1 = 11
            }
            if(middle[0] == 'c' || middle[0] == 'C')
                {
                    middle1 = 12
                }
                if(middle[0] == 'd' || middle[0] == 'D')
                    {
                        middle1 = 13
                    }
                    if(middle[0] == 'e' || middle[0] == 'E')
                        {
                            middle1 = 14
                        }
                        if(middle[0] == 'f' || middle[0] == 'F')
                            {
                                middle1 = 15
                            }

    if(middle[1] == 'a' || middle[1] == 'A')
        {
            middle2 = 10
        }
        if(middle[1] == 'b' || middle[1] == 'B')
            {
                middle2 = 11
            }
            if(middle[1] == 'c' || middle[1] == 'C')
                {
                    middle2 = 12
                }
                if(middle[1] == 'd' || middle[1] == 'D')
                    {
                        middle2 = 13
                    }
                    if(middle[1] == 'e' || middle[1] == 'E')
                        {
                            middle2 = 14
                        }
                        if(middle[1] == 'f' || middle[1] == 'F')
                            {
                                middle2 = 15
                            }


// to get thr ascii value of a string
    if(middle.charCodeAt(0) >= 48 && middle.charCodeAt(0) <= 57)
        {
            middle1 = parseInt(middle[0])  
        }
    if(middle.charCodeAt(1) >= 48 && middle.charCodeAt(1) <= 57)
        {
            middle2 = parseInt(middle[1])  
        }
        middledigit1 = middle1 * 16
        green = middledigit1 + middle2
    
// blue 
var last = hexin.substring(4,6)
    var last1 = 0
    var lastdigit1 = 0
    var last2 = 0
    var blue = 0

    if(last[0] == 'a' || last[0] == 'A')
        {
            last1 = 10
        }
        if(last[0] == 'b' || last[0] == 'B')
            {
                last1 = 11
            }
            if(last[0] == 'c' || last[0] == 'C')
                {
                    last1 = 12
                }
                if(last[0] == 'd' || last[0] == 'D')
                    {
                        last1 = 13
                    }
                    if(last[0] == 'e' || last[0] == 'E')
                        {
                            last1 = 14
                        }
                        if(last[0] == 'f' || last[0] == 'F')
                            {
                                last1 = 15
                            }

    if(last[1] == 'a' || last[1] == 'A')
    {
        last2 = 10
        }
        if(last[1] == 'b' || last[1] == 'B')
            {
                last2 = 11
            }
            if(last[1] == 'c' || last[1] == 'C')
                {
                    last2 = 12
                }
                if(last[1] == 'd' || last[1] == 'D')
                    {
                        last2 = 13
                    }
                    if(last[1] == 'e' || last[1] == 'E')
                        {
                           last2 = 14
                        }
                        if(last[1] == 'f' || last[1] == 'F')
                            {
                                last2 = 15
                            }


// to get thr ascii value of a string
    if(last.charCodeAt(0) >= 48 && last.charCodeAt(0) <= 57)
        {
            last1 = parseInt(last[0])  
        }
    if(last.charCodeAt(1) >= 48 && last.charCodeAt(1) <= 57)
        {
        last2 = parseInt(last[1])  
        }
        lastdigit1 = last1 * 16
        blue = lastdigit1 + last2

    // var color = document.getElementById("display")
    // document.getElementById("card").style.backgroundColor = "linear-gradient(45deg,#00cc0a 25%, #00cc0a 25%, #f331f3 25%, #f331f3 50%, #00cc0a 50%, #00cc0a 75%, #f331f3 75%, #f331f3 100%)"
    document.getElementById("displayer").style.backgroundColor = "#"+hexin
    rgbin.innerHTML = red +" , "+ green +" , "+ blue
}
// color mix
var red1 = 0
var green1 = 0
var blue1 = 0
var red2 = 0
var green2 = 0
var blue2 = 0


function Mixer()
{
    red1 = document.getElementById("red1").value
    green1 = document.getElementById("green1").value
    blue1 = document.getElementById("blue1").value
    blue2 = document.getElementById("blue2").value
    red2 = document.getElementById("red2").value
    green2 = document.getElementById("green2").value

    let red = Math.floor((parseInt(red1) + parseInt(red2))/2)
    let green =Math.floor((parseInt(green1) + parseInt(green2))/2)
    let blue = Math.floor((parseInt(blue1) + parseInt(blue2))/2)
    // console.log(Math.floor(red))
    // console.log(Math.floor(green))
    // console.log(Math.floor(blue))

    // for first 2 digit hex code
    let r1 =Math.floor(parseInt(red) / 16)
    let e1 = parseInt(red) % 16
    if(r1 > 9)
    {
        if(r1 == 10)
        {
            r1 = 'A';
        }
        if(r1 == 11)
        {
            r1 = 'B';
        }
        if(r1 == 12)
        {
            r1 = 'C';
        }
        if(r1 == 13)
        {
            r1 = 'D';
        }
        if(r1 == 14)
        {
            r1 = 'E';
        }
        if(r1 == 15)
        {
            r1 = 'F';
        }
    }
    if(e1 > 9)
        {
            if(e1 == 10)
            {
                e1 = 'A';
            }
            if(e1 == 11)
            {
                e1 = 'B';
            }
            if(e1 == 12)
            {
                e1 = 'C';
            }
            if(e1 == 13)
            {
                e1 = 'D';
            }
            if(e1 == 14)
            {
                e1 = 'E';
            }
            if(e1 == 15)
            {
                e1 = 'F';
            }
    }

    // for middle 2 digit hex code
    let g1 =Math.floor(parseInt(green) / 16)
    let n1 = parseInt(green) % 16
    if(g1 > 9)
    {
        if(g1 == 10)
        {
            g1 = 'A';
        }
        if(g1 == 11)
        {
            g1 = 'B';
        }
        if(g1 == 12)
        {
            g1 = 'C';
        }
        if(g1 == 13)
        {
            g1 = 'D';
        }
        if(g1 == 14)
        {
            g1 = 'E';
        }
        if(g1 == 15)
        {
            g1 = 'F';
        }
    }
    if(n1 > 9)
        {
            if(n1 == 10)
            {
                n1 = 'A';
            }
            if(n1 == 11)
            {
                n1 = 'B';
            }
            if(n1 == 12)
            {
                n1 = 'C';
            }
            if(n1 == 13)
            {
                n1 = 'D';
            }
            if(n1 == 14)
            {
                n1 = 'E';
            }
            if(n1 == 15)
            {
                n1 = 'F';
            }
    }

    // for last 2 digit hex code
    let b1 =Math.floor(parseInt(blue) / 16)
    let l1 = parseInt(blue) % 16
    if(b1 > 9)
    {
        if(b1 == 10)
        {
            b1 = 'A';
        }
        if(b1 == 11)
        {
            b1 = 'B';
        }
        if(b1 == 12)
        {
            b1 = 'C';
        }
        if(b1 == 13)
        {
            b1 = 'D';
        }
        if(b1 == 14)
        {
            b1 = 'E';
        }
        if(b1 == 15)
        {
            b1 = 'F';
        }
    }
    if(l1 > 9)
        {
            if(l1 == 10)
            {
                l1 = 'A';
            }
            if(l1 == 11)
            {
                l1 = 'B';
            }
            if(l1 == 12)
            {
                l1 = 'C';
            }
            if(l1 == 13)
            {
                l1 = 'D';
            }
            if(l1 == 14)
            {
                l1 = 'E';
            }
            if(l1 == 15)
            {
                l1 = 'F';
            }
    }
    let mixerColor = "#"+r1+e1+g1+n1+b1+l1
    document.getElementById("display3").style.backgroundColor = mixerColor
    document.getElementById("mix_code").innerHTML = "("+red+","+green+","+blue+")"
    document.getElementById("mix_Hex_code").innerHTML = "#"+r1+e1+g1+n1+b1+l1
}

function display1()
{
    red1 = document.getElementById("red1").value
    green1 = document.getElementById("green1").value
    blue1 = document.getElementById("blue1").value
    
    // for first 2 digit hex code
    let r1 =Math.floor(parseInt(red1) / 16)
    let e1 = parseInt(red1) % 16
    if(r1 > 9)
    {
        if(r1 == 10)
        {
            r1 = 'A';
        }
        if(r1 == 11)
        {
            r1 = 'B';
        }
        if(r1 == 12)
        {
            r1 = 'C';
        }
        if(r1 == 13)
        {
            r1 = 'D';
        }
        if(r1 == 14)
        {
            r1 = 'E';
        }
        if(r1 == 15)
        {
            r1 = 'F';
        }
    }
    if(e1 > 9)
        {
            if(e1 == 10)
            {
                e1 = 'A';
            }
            if(e1 == 11)
            {
                e1 = 'B';
            }
            if(e1 == 12)
            {
                e1 = 'C';
            }
            if(e1 == 13)
            {
                e1 = 'D';
            }
            if(e1 == 14)
            {
                e1 = 'E';
            }
            if(e1 == 15)
            {
                e1 = 'F';
            }
    }

    // for middle 2 digit hex code
    let g1 =Math.floor(parseInt(green1) / 16)
    let n1 = parseInt(green1) % 16
    if(g1 > 9)
    {
        if(g1 == 10)
        {
            g1 = 'A';
        }
        if(g1 == 11)
        {
            g1 = 'B';
        }
        if(g1 == 12)
        {
            g1 = 'C';
        }
        if(g1 == 13)
        {
            g1 = 'D';
        }
        if(g1 == 14)
        {
            g1 = 'E';
        }
        if(g1 == 15)
        {
            g1 = 'F';
        }
    }
    if(n1 > 9)
        {
            if(n1 == 10)
            {
                n1 = 'A';
            }
            if(n1 == 11)
            {
                n1 = 'B';
            }
            if(n1 == 12)
            {
                n1 = 'C';
            }
            if(n1 == 13)
            {
                n1 = 'D';
            }
            if(n1 == 14)
            {
                n1 = 'E';
            }
            if(n1 == 15)
            {
                n1 = 'F';
            }
    }

    // for last 2 digit hex code
    let b1 =Math.floor(parseInt(blue1) / 16)
    let l1 = parseInt(blue1) % 16
    if(b1 > 9)
    {
        if(b1 == 10)
        {
            b1 = 'A';
        }
        if(b1 == 11)
        {
            b1 = 'B';
        }
        if(b1 == 12)
        {
            b1 = 'C';
        }
        if(b1 == 13)
        {
            b1 = 'D';
        }
        if(b1 == 14)
        {
            b1 = 'E';
        }
        if(b1 == 15)
        {
            b1 = 'F';
        }
    }
    if(l1 > 9)
        {
            if(l1 == 10)
            {
                l1 = 'A';
            }
            if(l1 == 11)
            {
                l1 = 'B';
            }
            if(l1 == 12)
            {
                l1 = 'C';
            }
            if(l1 == 13)
            {
                l1 = 'D';
            }
            if(l1 == 14)
            {
                l1 = 'E';
            }
            if(l1 == 15)
            {
                l1 = 'F';
            }
    }
    let rgb1color = "#"+r1+e1+g1+n1+b1+l1
    // console.log(rgb1color)
    document.getElementById("display1").style.backgroundColor = rgb1color
}

function display2()
{
    blue2 = document.getElementById("blue2").value
    red2 = document.getElementById("red2").value
    green2 = document.getElementById("green2").value
    // for first 2 digit hex code
    let r2 =Math.floor(parseInt(red2) / 16)
    let e2 = parseInt(red2) % 16
    if(r2 > 9)
        {
    if(r2 == 10)
    {
        r2 = 'A';
    }
    if(r2 == 11)
    {
        r2 = 'B';
    }
    if(r2 == 12)
    {
        r2 = 'C';
    }
    if(r2 == 13)
    {
        r2 = 'D';
    }
    if(r2 == 14)
    {
        r2 = 'E';
    }
    if(r2 == 15)
    {
        r2 = 'F';
    }
}
if(e2 > 9)
    {
        if(e2 == 10)
        {
            e2 = 'A';
        }
        if(e2 == 11)
        {
            e2 = 'B';
        }
        if(e2 == 12)
        {
            e2 = 'C';
        }
        if(e2 == 13)
        {
            e2 = 'D';
        }
        if(e2 == 14)
        {
            e2 = 'E';
        }
        if(e2 == 15)
        {
            e2 = 'F';
        }
}

// for middle 2 digit hex code
let g2 =Math.floor(parseInt(green2) / 16)
let n2 = parseInt(green2) % 16
if(g2 > 9)
{
    if(g2 == 10)
    {
        g2 = 'A';
    }
    if(g2 == 11)
    {
        g2 = 'B';
    }
    if(g2 == 12)
    {
        g2 = 'C';
    }
    if(g2 == 13)
    {
        g2 = 'D';
    }
    if(g2 == 14)
    {
        g2 = 'E';
    }
    if(g2 == 15)
    {
        g2 = 'F';
    }
}
if(n2 > 9)
    {
        if(n2 == 10)
        {
            n2 = 'A';
        }
        if(n2 == 11)
        {
            n2 = 'B';
        }
        if(n2 == 12)
        {
            n2 = 'C';
        }
        if(n2 == 13)
        {
            n2 = 'D';
        }
        if(n2 == 14)
        {
            n2 = 'E';
        }
        if(n2 == 15)
        {
            n2 = 'F';
        }
}

// for last 2 digit hex code
let b2 =Math.floor(parseInt(blue2) / 16)
let l2 = parseInt(blue2) % 16
if(b2 > 9)
{
    if(b2 == 10)
    {
        b2 = 'A';
    }
    if(b2 == 11)
    {
        b2 = 'B';
    }
    if(b2 == 12)
    {
        b2 = 'C';
    }
    if(b2 == 13)
    {
        b2 = 'D';
    }
    if(b2 == 14)
    {
        b2 = 'E';
    }
    if(b2 == 15)
    {
        b2 = 'F';
    }
}
if(l2 > 9)
    {
        if(l2 == 10)
        {
            l2 = 'A';
        }
        if(l2 == 11)
        {
            l2 = 'B';
        }
        if(l2 == 12)
        {
            l2 = 'C';
        }
        if(l2 == 13)
        {
            l2 = 'D';
        }
        if(l2 == 14)
        {
            l2 = 'E';
        }
        if(l2 == 15)
        {
            l2 = 'F';
        }
}
let rgb2color = "#"+r2+e2+g2+n2+b2+l2
// console.log(rgb2color)
    document.getElementById("display2").style.backgroundColor = rgb2color
}


// color picker

const pick = document.getElementById("pick");
const pickCode = document.getElementById("pick_code");


const picker = async() => 
{
    const eyeDropper = new EyeDropper();

    const {sRGBHex} = await eyeDropper.open();

    pickCode.innerHTML = sRGBHex;
    pickCode.style.color = sRGBHex;
}
pick.addEventListener('click',picker);
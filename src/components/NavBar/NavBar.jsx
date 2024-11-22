import { useEffect, useRef, useState } from "react";
import { LinkStyle } from "../../styledComponents/styles";
import { NavBarStyle } from "../../styledComponents/styles"
import { ButtonMenu } from "../Buttons/ButtonMenu";

const Nav = NavBarStyle();
export const Link = LinkStyle({color: 'white', hoverColor: '#ccc'});

var range = 2;
const pixels = 280;
var totalPixels = pixels;
var times = () => totalPixels/range;
var totalTime = 50/times(); // para fazer o movimento em 50ms ;

function getScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
  }
  
  

export const NavBar = ({children}) => {
    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(0);
    const [counter, setCounter] = useState(0);
    const refButton = useRef(null);
    useEffect(()=>{
        var { width } = getScreenSize();
        if(width < 600){
            totalPixels = width;
        }else totalPixels = pixels;
        console.log(width);
        if(show && (counter < times())){
            setTimeout(() => {
                setWidth(w => w+range);
                setCounter(counter+1);  
            }, totalTime);
        }else if(!show && (counter>0)){
            setTimeout(() => {
                setWidth(w => w-range);
                setCounter(counter-1);
            }, totalTime);
        }
    }, [show, counter]);

    useEffect(()=>{
        console.log(width)
    }, [width]);
    return <>
        
            <Nav style={{width: `${width}px`}}>
                {console.log(children)}
                {show && 
                    children.map((each, index) => {
                        return <div key={index}  onClick={()=>{setShow(!show)}} >{each}</div>
                    })
                }
            </Nav>
        
        <ButtonMenu onClick={()=>{
            setShow(!show);
        }}/>
    
    </> 
}
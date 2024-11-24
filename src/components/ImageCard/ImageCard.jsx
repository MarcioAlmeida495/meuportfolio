import { useState } from "react";
import { ImageCardStyle, ModalStyledComponent } from "../../styledComponents/styles";

var Image = ImageCardStyle({width: '170px', height: '200px'});
var Modal = ModalStyledComponent; 

export const ImageCard = ({width = '', height = '', src = ''}) => {
    
    const [showModal, setShowModal] = useState(false);

    return <>
        {showModal ? 
            <Modal style={{alignItems: 'center'}}> 
                <Image 
                    onClick={()=>{
                        setShowModal(!showModal);
                    }}
                    style={{width: '70%', height: '70%'}}
                    src={src} 
                /> 
            </Modal>
            :
            <Image 
                onClick={()=>{
                    setShowModal(!showModal);
                }}
                style={{width: width, height: height, cursor: 'zoom-in'}} src={src} 
            /> 
        }
        
    
    </> 
    
}
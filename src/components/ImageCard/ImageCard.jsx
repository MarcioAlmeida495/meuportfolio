import { useState } from "react";
import { ImageCardStyle, ModalStyledComponent } from "../../styledComponents/styles";

var Image = ImageCardStyle({width: '170px', height: '200px'});
var Modal = ModalStyledComponent; 

export const ImageCard = ({width = '', height = '', src = ''}) => {
    
    const [showModal, setShowModal] = useState(false);

    return <>
        {showModal ? 
            <Modal> 
                <Image 
                    onClick={()=>{
                        setShowModal(!showModal);
                    }}
                    style={{width: '100%', height: '100%'}}
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
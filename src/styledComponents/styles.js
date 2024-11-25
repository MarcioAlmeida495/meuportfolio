// import styled from 'styled-components';
import styled from 'styled-components';
const radius = `border-radius: 0px; box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2); border: 1px solid rgba(255,255,255, 0.07 );`

const marginNavBar = 15;
export const NavBarStyle = () => styled.nav`
position: absolute;
top: 0px;
height: 100vh;
// margin: ${marginNavBar}px;
display: flex;
flex-direction: column;
// justify-content: flex-start;
padding: 30px 0px;
top: 0px;
justify-content: flex-start;
display: flex;
width: 200px;
// width: calc(100% - ${marginNavBar*2}px);
float: left;
align-items: center;   /* Alinha itens verticalmente */
background-color: rgba(0,0,0, 1); /* Cor de fundo */
color: #fff;           /* Cor do texto */
box-sizing: border-box;
font-size: 25px;
${radius}
border:none;
border-right:  1px solid rgba(255,255,255, 0.07 );

    
`

export const LinkStyle = ({color = 'white', hoverColor = 'ccc', element = 'a', scaleRange = '1.00'}) => 
{
    return styled[element]`
        bos-sizing: border-box;
        
        all: unset; /* Remove todos os estilos padrões */
        background: none; /* Remove a cor de fundo */
        border: none; /* Remove a borda */
        padding: 10px; /* Remove o preenchimento */
        margin: 0; /* Remove a margem */
        font: inherit; /* Herda a fonte do elemento pai */
        color: inherit; /* Herda a cor do texto */
        font-size: 16px;
        text-align: inherit; /* Herda o alinhamento de texto */
        text-decoration: none; /* Remove qualquer sublinhado */
        color: ${color};
        display: block;
        text-decoration: none; /* Remove a sublinhado padrão */
        transition: transform color 0.3s ease; /* Transição suave para o hover */
        border: none;
        cursor: pointer;

        &:hover {
            color: ${hoverColor}; /* Cor no hover */
            transform: scale(${scaleRange});
        }
        @media (max-width: 899px){
            font-size: 14px;
        }
`;


}
const DefaultSize = '100px';

export const ImageCardStyle = ({width = DefaultSize, height = DefaultSize, cursor = 'pointer'}) => styled.img`
    width: ${width};
    height: ${height};
    margin: auto;
    box-sizing: border-box;
    border: 5px solid rgba(255,255,255, 0.1);
    transition: transform ease 20ms;

    &:hover{
        // transform: scale(1.01);
        cursor: ${cursor};
    }
`

export const DivInCard = ({ height = '', width = '30%', float = 'right', addingStyles = '' }) => styled.div`
padding: 20px;
width: calc(${width} - ${marginNavBar * 2}px);
height: calc(${height} - ${marginNavBar * 2}px);
justify-items: center;
margin: ${marginNavBar}px;
box-sizing: border-box;
background-color: black;
border: 1px rgba(255, 255, 255, 0.1) solid;
float: ${float};
overflow: auto;

${addingStyles}
${radius}

@media (max-width: 899px) {
    width: 100%;
    margin: 10px 0px;
    height: auto;
}
`;

export const DivCard = ({ height = '', width = '30%', float = 'right', addingStyles = '' }) => styled.div`
    padding: 20px;
    width: calc(${width} - ${marginNavBar * 2}px);
    height: calc(${height} - ${marginNavBar * 2}px);
    justify-items: center;
    margin: ${marginNavBar}px;
    box-sizing: border-box;
    background-color: black;
    border: 1px rgba(255, 255, 255, 0.1) solid;
    float: ${float};
    overflow: auto;

    ${addingStyles}
    ${radius}
    
    @media (max-width: 899px) {
        width: calc(100% - ${marginNavBar * 2}px);
        height: auto;
    }
`;


export const ButtonStyle = () => LinkStyle({color: 'white', hoverColor: 'eee', element: 'button'});


export const BodyCardStyle = () => styled.div`
  margin: auto;
  display: column;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0,0,0, 0);
  color: #ccc;
//   ${radius}
`;
export const BodyStyle = styled.div`
margin: auto;    
padding: 10px 0px;
    width: 1200px;
    height: 100vh;
    box-sizing: border-box;

    @media (max-width: 899px) {
        width: 100%;
        margin: 0px;
        padding: 10px 0px;
    }
`
export const ModalStyledComponent = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
  

/* Estilo para o conteúdo do modal */
  & img {
  box-sizing: border-box;
  background-color: #fff;
  width: 60%;
  height: 60%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover{
    cursor: zoom-out;
  }
}
` 
export const DivAllHeight = () => styled.div`
height: 100%;
display: inline-block; /* Faz a largura se ajustar ao conteúdo */
float: left;
overflow: hidden; /* Evita que a largura aumente com margens negativas ou elementos extras */

@media (max-width: 899px) {
    height: auto;
    width: 100%;
}
`;

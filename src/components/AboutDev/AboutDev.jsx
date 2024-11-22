import { DivCard, ImageCardStyle } from "../../styledComponents/styles";

const ImageCard = ImageCardStyle({height: '180px', width: '150px'});
const DivLeft = DivCard({width: '300px', float:'left'});

export const AboutDev = ({refFather}) => {
    return <div ref={refFather}>
        <DivLeft>
            <ImageCard src="img.jpg" />
            <h3>Marcio Almeida</h3>
            <h6>Entusiasta em Programação</h6>
            <h6>Principal Linguagem: Javascript</h6>
        </DivLeft>
    </div>
}
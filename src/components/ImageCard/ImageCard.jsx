import { ImageCardStyle } from "../../styledComponents/styles";

var Image = ImageCardStyle({width: '170px', height: '200px'});

export const ImageCard = ({width = '', height = '', src = ''}) => {
    // const [width, setWidth] = useState(width);

    return <Image style={{width: width, height: height}} src={src} />
}
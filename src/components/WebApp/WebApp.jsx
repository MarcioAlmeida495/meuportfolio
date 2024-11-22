import {ImageCard} from '../ImageCard/ImageCard';
export const WebApp = ({url = [''], }) => {
    return <>
        {url.map((each, index) => {
            console.log(each)
            return <ImageCard key={index} width='100%' src={each}/>
        })}
    </>
}
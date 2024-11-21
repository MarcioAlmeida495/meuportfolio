import {ImageCard} from '../ImageCard/ImageCard';
export const WebApp = ({url = [''], }) => {
    return <>
        {url.map(each => {
            console.log(each)
            return <ImageCard width='100%' height='300px' src={each}/>
        })}
    </>
}
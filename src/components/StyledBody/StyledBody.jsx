import { BodyStyle } from "../../styledComponents/styles";

const Body = BodyStyle();

export const StyledBody = ({children}) => {
    return <Body>
        {children}
    </Body>
}
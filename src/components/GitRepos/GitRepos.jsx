import { useEffect, useState } from "react";
import { dataFetch } from "../../functions";
import { LinkStyle } from "../../styledComponents/styles";
import { LoadingIcon } from "../LoadingIcon/LoadingIcon";
// import { DivCard } from "../../styledComponents/DivCard";

const userName = 'MarcioAlmeida495';
const URL =  `https://api.github.com/users/${userName}/repos`;

const Link = LinkStyle({color : 'white', hoverColor : '#aaa', scaleRange: '1.0'});

export const GitRepos = () => {
    const [repos, setRepos] = useState([]);
    
    useEffect(()=>{
        setTimeout(() => {
            dataFetch(URL).then(r=> setRepos(r));
            
        }, 1000);
    },[])

    useEffect(()=>{

    },[repos])

    return <div style={{width: '100%', justifyItems: 'center'}}>
        <h2>Meus Repositórios no GitHub</h2>
        {repos.length === 0 && <LoadingIcon />}
        {repos.map((each, index) => {
            console.log(each);
            return <Link target="_blank" key={index} href={each.html_url}>{each.html_url}</Link>
        })}
    </div>
}
// import logo from './logo.svg';
import { useState } from 'react';
import { GitRepos } from '../components/GitRepos/GitRepos';
import { BodyCardStyle, DivCard } from '../styledComponents/styles';
import { BodyStyle } from '../styledComponents/styles';
import { Link } from '../components/NavBar/NavBar';
import { NavBar } from '../components/NavBar/NavBar';
import { AboutDev } from '../components/AboutDev/AboutDev';
import { Contact } from '../components/Contact/Contact';
import { WebApp } from '../components/WebApp/WebApp';

const showGitRepos = 'gitRepos';
const showContact = 'contactComponent';
const showWebAppVenda = 'App para Gerenciar Contas';
const showAbout = 'aboutMe';

const Body = BodyStyle;
const Button = Link; // mesmo estilo de Link, que vem da NavBar 
const BodyCard = BodyCardStyle({});
const DivRight = DivCard({width: '600px', height: '', float:'left'});

export const Home = () => {
  const [showComponent, setShowComponent] = useState(0);
  return (
    <div style={{backgroundImage: 'coding.jpg'}}>
      <Body className='BODY' >
            <NavBar className='NAVBAR'>
              <Button onClick={()=>{
                  setShowComponent(showAbout);
                }}>
                  Sobre
                </Button> 
                <Button  onClick={()=>{
                    setShowComponent(showGitRepos);
                    }}>
                    Repositórios no Github
                </Button>
                <Button onClick={()=>{
                  setShowComponent(showWebAppVenda);
                }} >
                  App para Gerenciar Contas
                </Button>
                <Button onClick={()=>{
                  setShowComponent(showContact);
                }}>
                  Contact
                </Button>
            </NavBar>
        <BodyCard className='BODYCARD' >
                <AboutDev className='ABOUTDEV' />
                <DivRight className='DIVRIGHT'>
                    {showComponent === showAbout && <>
                      <h2>about me </h2>
                    </>}
                    {showComponent === showGitRepos && <GitRepos />}
                    {showComponent === showContact && <Contact /> }
                    {showComponent === showWebAppVenda && <>
                      <h2>{showWebAppVenda}</h2>
                      <br/>
                      <p>
                        Segue o Link para o projeto hospedado no Render.com
                      </p>
                      <Link href='https://vendaappxxx-1.onrender.com/' target="_blank" >https://vendaappxxx-1.onrender.com/</Link>
                      <WebApp url={['webappvenda1.png', 'webappvenda2.png']}/>
                      <p>App criado para ajudar no gerenciamento de contas de meu Comércio.</p>
                      <p>
                        Coloquei ele no ar no render mesmo somente para demonstrar um pouco de meu conhecimento,
                        no render não consigo manter os dados salvos, logo, uso em minha própria máquina.
                      </p>
                      <p>
                        Esse App está atualmente sendo substituido pois está sendo necessário um aplicativo para 
                        gerenciar itens também, confira esse App nesse link - 
                      </p>
                    </>
                    }
                </DivRight>
            
        </BodyCard>
      </Body>
    </div>
  );
}



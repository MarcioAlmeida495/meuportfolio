// import logo from './logo.svg';
import { GitRepos } from '../components/GitRepos/GitRepos';
import { BodyCardStyle, DivCard, DivAllHeight, DivInCard } from '../styledComponents/styles';
import { BodyStyle } from '../styledComponents/styles';
import { Link } from '../components/NavBar/NavBar';
import { NavBar } from '../components/NavBar/NavBar';
import { AboutDev } from '../components/AboutDev/AboutDev';
import { Contact } from '../components/Contact/Contact';
import { WebApp } from '../components/WebApp/WebApp';
import { useEffect, useRef } from 'react';

const showWebAppVenda = 'App para Gerenciar Contas';
const DivVh = DivAllHeight();
const Body = BodyStyle;
const Button = Link; // mesmo estilo de Link, que vem da NavBar 
const BodyCard = BodyCardStyle({});
const DivInCardRight = DivInCard({width: '550px', height: '100%', float:'left', addingStyles: '@media (max-width: 899px) { width: 100%; margin: 10px 0px;}'});
const DivCardRight = DivCard({width: '630px', height: '90vh', float: 'left', addingStyles: 'overflow: show; background-color: rgba(0,0,0,0);'});
// eslint-disable-next-line
const Content = 
[
  {
    text: 'Sobre',

  },
  {}
]
export const Home = () => {
  const refAboutMe = useRef(null); 
  const refGitRepos = useRef(null);
  const refWebApp = useRef(null);
  const refContact = useRef(null);
  const refAppStorage = useRef(null);

  useEffect(()=>{
    console.log(refAboutMe);
  }, [])

 

  const handleScroll = (targetRef) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth", // Faz o movimento suave
        block: "start", // Alinha ao início do elemento
      });
    }
  };

  return (
    <div style={{backgroundImage: 'coding.jpg'}}>
      <Body className='BODY' >
            <NavBar className='NAVBAR'>
              <Button onClick={()=>{
                handleScroll(refAboutMe);
              }}>
                  Sobre
                </Button> 
                <Button onClick={()=>{
                  handleScroll(refGitRepos);
              }} >
                    Repositórios no Github
                </Button>
                <Button onClick={()=>{
                handleScroll(refWebApp);
              }}>
                  App para Gerenciar Contas
                </Button>
                <Button onClick={()=>{
                handleScroll(refAppStorage);
              }}>
                  App Controle de Estoque
                </Button>
                <Button onClick={()=>{
                handleScroll(refContact);
              }}>
                  Contact
                </Button>
            </NavBar>
        <BodyCard className='BODYCARD' >
          <DivVh>
            <AboutDev className='ABOUTDEV' />
          </DivVh>
          <DivCardRight style={{padding: '0px', border: '0px'}}>
            {/* aboutMe */}
            <DivInCardRight ref={refAboutMe} className='DivInCardRight'> 
                  <h2>about me </h2>
            </DivInCardRight>
            {/* GitRepos */}
            <DivInCardRight ref={refGitRepos} className=''>
              <GitRepos />
            </DivInCardRight>
            {/* WebAppVenda */}
            <DivInCardRight ref={refWebApp} className='DivInCardRight'><>
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
            </DivInCardRight> 
            <DivInCardRight ref={refAppStorage} style={{justifyContent: 'center', justifyItems: 'center', height: '100%'}} >
              <h2>
              Projeto de Controle de Estoques 
              </h2>
            </DivInCardRight>     
            <DivInCardRight ref={refContact} >
              <Contact />
            </DivInCardRight>
          </DivCardRight>
        </BodyCard>
      </Body>
    </div>
  );
}



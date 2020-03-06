import React, { Component } from 'react';
import './style.css';
import CardInfor from '../../components/CardInfor/CardInfor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class QuemSomos extends Component {
  state = {
    feed: [],
  };

//   async componentDidMount() {
//     this.registerToSocket();
//     const response = await api.get('posts');
//     this.setState({ feed: response.data });
//   }

//   registerToSocket = () => {
//     const socket = io('http://localhost:3000');
//     socket.on('post', newPost => {
//       this.setState({ feed: [newPost, ...this.state.feed] });
//     });

//     socket.on('like', likedPost => {
//       this.setState({
//         feed: this.state.feed.map(post => (post._id === likedPost._id ? likedPost : post)),
//       });
//     });
//   };

//   handleLike = id => {
//     api.post(`posts/${id}/like`);
//   };

  render() {
    return (
        
            <div className=" sobre">
              <Row>
                <Col md={3}>
                  <Row>
                     <CardInfor/>
                  </Row>
                  <hr/>
                  <Row>
                      <CardInfor/>
                  </Row>
                </Col>
                <Col md={8}>
                  <Row>
            <div className=" mb-3 cardSobre"> 
              <h4>
               Quem Somos
              </h4>
              <p>
              O INTRA-Instituto Tributário de Ensino a Distância é uma empresa do GRUPO INTRA DE ENSINO E PESQUISA A DISTÂNCIA LTDA ME. Atuamos no mercado desde 2004 promovendo a realização de cursos livres a distância, para que os profissionais e os estudantes estejam cada vez mais, aprimorando seus conhecimentos, melhorando o seu desempenho funcional e ascendendo profissionalmente dentro da empresa ou da organização onde trabalham ou prestem serviços.
              </p>
            </div>
            </Row>
            <Row>
            <div className=" mb-3 cardSobre"> 
            <h4>
            Nossos Números
            </h4>
            <p>
            O GRUPO INTRA possui hoje mais de 301 mil usuários cadastrados, mais de 615 mil inscrições em cursos e uma média de 1.432 acessos por dia. Diante desta realidade, estamos nos consolidando em uma das maiores instituições de educação à distância do Brasil.
            </p>
            </div>
            </Row>
            <Row>
            <div className=" mb-3 cardSobre"> 
            <h4>
            Veja o que diz o presidente da ABED
            </h4>
            <p>
            Assista a entrevista feita exclusivamente para o Grupo Intra com o presidente da ABED( Associação Brasileira de Educação a Distância) Fredric Michael Litto, onde ele deixa claro a importância de cursos de atualização.
            </p>
            </div>
            </Row>
            <Row>
            <div className=" mb-3 cardSobre"> 
            <h4>
            Autenticidade do Certificado
            </h4>
            <p>
            Os cursos livres do INTRA-Instituto Tributário de Ensino a Distância, são válidos em todo território nacional e amparados pela lei de diretrizes e bases da educação. Sua autenticidade pode ser validada pela digitação do número do registro no site https://www.intra-ead.com.br/. Os certificados são expedidos na conformidade do Dec. 5.154/2004. e independem de autorização dos órgãos de educação, MEC e/ou Capes para serem oferecidos
            </p>
            </div>
            </Row>
            <Row>
            <div className=" mb-3 cardSobre"> 
            <h4>
            Tutoria / Material Didático
            </h4>
            <p>
            Possuímos hoje um quadro de parceiros composto de professores graduados, especialistas, mestres e doutores que contribuem para educação complementar fornecendo material didático elaborado dentro dos padrões do INTRA em conformidade com os conceitos pedagógicos aplicados na educação a distância, tendo como foco principal o aprendizado e a atualização.
            </p>
            </div>
            </Row>
            <Row>
            <div className=" mb-3 cardSobre"> 
            <h4>
            Estudam conosco
            </h4>
            <p>
           Algumas imagens
            </p>
            </div>
            </Row>
            </Col>
            </Row>
            </div>
        
    );
  }
}

export default QuemSomos;
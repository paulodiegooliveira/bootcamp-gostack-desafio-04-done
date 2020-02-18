import React, { Component } from 'react';
import { FaFacebookMessenger, FaAd } from 'react-icons/fa';

import ReactHtmlParser from 'react-html-parser';
import { Container } from '../../components/Container';
import { MainHeader, Post, Header, Comment, Section } from './styles';

export default class Main extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://avatars2.githubusercontent.com/u/6083080?s=460&v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Mirian Montezi',
              avatar:
                'https://avatars2.githubusercontent.com/u/15017102?s=460&v=4',
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar:
            'https://i.pinimg.com/originals/53/89/27/538927af3f9dea26fb5e61b35b2e52dc.jpg',
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza<br><br><br>Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar:
                'https://demos.creative-tim.com/paper-kit-2/assets/img/faces/kaci-baum-2.jpg',
            },
            content:
              ' Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar:
                'https://piaui.folha.uol.com.br/lupa/wp-content/uploads/2019/11/Especial-Consciencia-Negra-Thumb-Site.png',
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <MainHeader>
          <Container>
            <Header>
              <picture>
                <a title="Home" href="#">
                  Facebook
                </a>
              </picture>

              <nav>
                <a title="Home" href="#">
                  Meu perfil
                </a>
              </nav>
            </Header>
          </Container>
        </MainHeader>

        <Container>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Section>
                  <header>
                    <img src={post.author.avatar} alt={post.author.name} />
                    <div>
                      <span>
                        <b>{post.author.name}</b>
                      </span>
                      <small>{post.date}</small>
                    </div>
                  </header>
                  <article>
                    <p>{ReactHtmlParser(post.content)}</p>
                  </article>
                </Section>

                <Post>
                  {post.comments.map(comment => (
                    <li key={comment.id}>
                      <Comment>
                        <header>
                          <img
                            src={comment.author.avatar}
                            alt={comment.author.name}
                          />
                        </header>

                        <article>
                          <p>
                            <b>{comment.author.name}</b>
                            {comment.content}
                          </p>
                        </article>
                      </Comment>
                    </li>
                  ))}
                </Post>
              </li>
            ))}
          </ul>
        </Container>
      </>
    );
  }
}

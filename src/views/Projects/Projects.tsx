import React from 'react'
import Container from '../../components/Container/Container'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Wrapper } from '../../style/global'
import * as S from './style'
import { ICardData } from './typings'
import cloverly from '../../assets/img/projects/cloverly.jpg'
import zavkomEngineering from '../../assets/img/projects/zavkomEngineering.jpg'
import kovmangal from '../../assets/img/projects/kovmangal.jpg'

const Projects: React.FC = () => {
  const cardsData: ICardData[] = [
    {
      title: 'Cloverly',
      description: 'API platform to help neutralize carbon emissions',
      tags: ['html', 'css', 'js'],
      imgUrl: cloverly,
      link: 'https://dispersioned.github.io/web-cloverly/',
    },
    {
      title: 'Zavkom Engineering',
      description: 'Company information site',
      tags: ['html', 'scss', 'js', 'gulp'],
      imgUrl: zavkomEngineering,
      link: 'https://dispersioned.github.io/web-zavkom-engineering/',
    },
    {
      title: 'Kovmangal',
      description: 'Forged chargrill store',
      tags: ['html', 'scss', 'js', 'gulp'],
      imgUrl: kovmangal,
      link: 'https://dispersioned.github.io/web-kovmangal/',
    },
  ]

  return (
    <Wrapper>
      <Header />
      <Container>
        <S.Body>
          {cardsData.map((card) => (
            <S.Card key={card.link}>
              <S.Info>
                <h2>{card.title}</h2>
                <S.Description>{card.description}</S.Description>
                <S.Tags>{card.tags.join(' ')}</S.Tags>
                <S.CardLink href={card.link}>View page</S.CardLink>
              </S.Info>
              <S.CardImg>
                <img src={card.imgUrl} alt="" />
              </S.CardImg>
            </S.Card>
          ))}
        </S.Body>
      </Container>
      <Footer />
    </Wrapper>
  )
}
export default Projects

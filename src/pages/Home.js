import styled from 'styled-components'
import SearchBar from '../components/SearchBar'
import device from '../style/theme'
import Wrapper from '../components/Wrapper'

const Home = () => {
  return (
    <HomeWrapper>
      <Title>지하철 화장실</Title>
      <SearchBar />
    </HomeWrapper>
  )
}

const HomeWrapper = styled(Wrapper)`
  flex-direction: column;
  box-sizing: border-box;
  height: calc(var(--vh, 1vh) * 100);

  @media ${device.laptop} {
    height: 80vh;
  }
`
const Title = styled.div`
  width: 100%;
  font-size: 36px;
  text-align: center;
`

export default Home;
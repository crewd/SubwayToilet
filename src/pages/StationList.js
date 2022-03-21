import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import SelectBox from '../components/SelectBox';

const StationList = () => {

  const regionOption = [
    { value: 'seoul', name: '수도권' },
    { value: 'busan', name: '부산' }
  ]

  return (
    <ListWrapper>
      <InnerBox>
        <RegionSelectDiv>
          <RegionSelectUl>
            <li>수도권</li>
            <li>부산</li>
            <li>대구</li>
            <li>대전</li>
            <li>광주</li>
          </RegionSelectUl>
        </RegionSelectDiv>
      </InnerBox>
    </ListWrapper>
  )
}

const ListWrapper = styled(Wrapper)`
  margin-top: 150px;
`

const InnerBox = styled.div`
  width: 50%;
`

const RegionSelectDiv = styled.div`
  display: flex;
  justify-content: center;
  list-style:none;
`

const RegionSelectUl = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  >li{
    font-weight: bold;
    cursor: pointer;
    padding: 15px 10px;
    position: relative;
    ::before{
      content: "";
      height: 3px;
      background-color: #aaa;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  &:active::before,&:hover::before {
    width: 100%;
  }
  }
`

export default StationList;
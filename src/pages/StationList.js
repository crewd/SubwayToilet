import styled, { css } from 'styled-components';
import { createRef, useEffect, useRef, useState } from 'react';
import Wrapper from '../components/Wrapper';
import AccordionMenu from '../components/AccordionMenu'
import axios from 'axios';
import { uniqBy } from 'loadsh';

const StationList = () => {

  const line = [
    { value: 1, name: '1호선' },
    { value: 1, name: '2호선' },
    { value: 1, name: '3호선' },
    { value: 1, name: '4호선' },
    { value: 1, name: '5호선' },
    { value: 1, name: '6호선' },
    { value: 1, name: '7호선' },
  ]

  const [regionList, setRegionList] = useState();
  const [lineList, setLineList] = useState([]);
  const [countIndex, setCountIndex] = useState(0);
  const [regionState, setRegionState] = useState();
  const [lineFilter, setLineFilter] = useState();

  const onClickUnderLine = (i) => {
    return setCountIndex(i);
  }

  const onClickSetRegionState = (region) => {
    setRegionState(region);
  }

  const regionApiCall = async () => {
    const region = await axios.get('http://ec2-54-180-2-124.ap-northeast-2.compute.amazonaws.com:8000/regions');
    setRegionList(region.data);
  }

  const lineApiCall = async () => {
    const line = await axios.get('http://ec2-54-180-2-124.ap-northeast-2.compute.amazonaws.com:8000/subway-lines');
    setLineList(line.data);
  }

  useEffect(() => {
    setCountIndex(0)
  }, [])


  useEffect(() => {
    setRegionState('수도권')
  }, [])

  useEffect(() => {
    regionApiCall()
  }, [])

  useEffect(() => {
    lineApiCall()
  }, [regionState])

  useEffect(() => {
    setLineFilter(
      lineList.filter(subway => (subway.region.regionName.includes(regionState)))
    )
  }, [lineList])

  return (
    <ListWrapper>
      <InnerBox>
        <SelectDiv>
          <SelectUl>
            {regionList && regionList.map((region, index) => (
              <SelectLi
                key={region.regionCode}
                onClick={() => (
                  onClickUnderLine(index),
                  onClickSetRegionState(region.regionName)
                )}
                className={countIndex === index && 'underline'}
              >
                {region.regionName}
              </SelectLi>
            ))}
          </SelectUl>
        </SelectDiv>
        <br />
        <SelectDiv>
          <SelectUl>
            {lineList && uniqBy(lineFilter, 'lineName').map((line) => {
              if (line.region.regionName === regionState) {
                return <SelectLi key={line.id}>{line.lineName}</SelectLi>
              }
            })}
          </SelectUl>
        </SelectDiv>
        <ContentContainer>
          <AccordionMenu />
        </ContentContainer>
      </InnerBox>
    </ListWrapper >
  )
}

const ListWrapper = styled(Wrapper)`
  margin-top: 150px;
`

const ContentContainer = styled(Wrapper)`
    margin-top: 50px;

`

const InnerBox = styled.div`
  width: 50%;
`

const SelectDiv = styled.div`
  display: flex;
  justify-content: center;
  list-style:none;
`

const SelectUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 70%;
  flex-wrap: wrap;
`

const SelectLi = styled.li`
  font-weight: bold;
  cursor: pointer;
  padding: 15px 10px;
  position: relative;

  ::before{
      content: "";
      height: 5px;
      width: 0;
      background-color: #aaa;
      border-radius: 10px;
      transition: 0.3s;
      position: absolute;
      bottom: 0;
      left: 0;
    }

  &.underline {
    ::before{
      width: 100%;
    }
  }
`

export default StationList;
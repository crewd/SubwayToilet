import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import device from '../style/theme';
import axios from 'axios';
import subwayList from '../assets/subwayList.json';

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState("");
  // const subwaySearchFilter = subwayList.subwayList_Code.filter(subwayStation => (subwayStation.STIN_NM.includes(searchResult)));
  const subwaySearchURL = 'http://apis.data.go.kr/1613000/SubwayInfoService/getKwrdFndSubwaySttnList';
  const serviceKey = '?' + encodeURIComponent('serviceKey') + '=K7ipjTxs8Z85Gk56RmMz2v99E3vIOE5zOBLrrqlO7%2FhLIvY5Mz9GoL%2FVunwaGcy8j%2FxsXuJsWDkaGw0w%2F0cjpw%3D%3D'

  const searchOnChange = (e) => {
    setSearchResult(e.target.value);
    axios
      .get(subwaySearchURL + serviceKey + '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json') + '&' + encodeURIComponent('subwayStationName') + '=' + encodeURIComponent('서울역'))
      // 응답(성공)
      .then(function (response) {
        console.log(response.body)
      })
      // 응답(실패)
      .catch(function (error) {
        console.log(error)
      })
      // 응답(항상 실행)
      .then(function () {
        // ...
      })
  }

  return (
    <SearchWrapper>
      <SearchForm>
        <SearchInput placeholder="지하철 역을 검색해주세요" onChange={searchOnChange} />
        <SearchButton>
          <BsSearch size={21} />
        </SearchButton>
        {/* {searchResult &&
          subwaySearchFilter.length > 0 &&
          <AutoCompletForm>
            {subwaySearchFilter.map((ss, i) => i < 5 && <p key={i}>{ss.STIN_NM + " " + ss.LN_NM}</p>)}
          </AutoCompletForm>}
        {subwaySearchFilter.length === 0 && <AutoCompletForm><p>검색 결과가 없습니다!</p></AutoCompletForm>} */}
      </SearchForm>
    </SearchWrapper >
  )
};

const SearchWrapper = styled.div`
  width: 100%;
  padding-top: 48px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const SearchForm = styled.form`
  width: 90%;
  position: relative;
  height: 48px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .3);
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.laptop} {
    width: 40%;
  }

  @media ${device.desktop} {
    width: 30%;
  }
`

const SearchInput = styled.input.attrs({ type: "text" })`
  width: 80%;
  border: none;
  height: 100%;
  padding: 0 15px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background-color: inherit;
  border: none;
  height: 100%;
`

const AutoCompletForm = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  position: absolute;
  top: 100%;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .3);
  font-size: 16px;
  max-height: 216px;
  >p {
    padding: 10px 15px;
    box-sizing: border-box;
  }
`

export default SearchBar;
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import device from '../style/theme';
import axios from 'axios';
import { debounce } from 'lodash';


const SearchBar = () => {

  const [searchInput, setSearchInput] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [searchResultList, setSearchResultList] = useState('');
  // const subwaySearchFilter = subwayList.subwayList_Code.filter(subwayStation => (subwayStation.STIN_NM.includes(searchResult)));
  // const serviceKey = `?${encodeURIComponent('serviceKey')}=K7ipjTxs8Z85Gk56RmMz2v99E3vIOE5zOBLrrqlO7%2FhLIvY5Mz9GoL%2FVunwaGcy8j%2FxsXuJsWDkaGw0w%2F0cjpw%3D%3D`
  // const subwayAPIUrl = `/data/1613000/SubwayInfoService/getKwrdFndSubwaySttnList${serviceKey}&${encodeURIComponent('_type')}=${encodeURIComponent('json')}&${encodeURIComponent('subwayStationName')}=`
  const subwayApiUrl = 'http://ec2-54-180-2-124.ap-northeast-2.compute.amazonaws.com:8000/stations/search?query[name]=';

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  }

  const callSubwayListAPI = async (value) => {
    const subwayData = await axios.get(subwayApiUrl + encodeURIComponent(value));
    const subwayList = subwayData.data;
    setSearchResult(subwayList)
  }

  useEffect(() => {
    const searchDebounce = setTimeout(() => {
      if (!searchInput) {
        setSearchValue('');
      }
      setSearchValue(searchInput);
    }, 200);

    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchInput])

  useEffect(() => {
    if (searchValue) {
      return callSubwayListAPI(searchValue);
    }
    return setSearchResult('')
  }, [searchValue])

  return (
    <SearchWrapper>
      <SearchForm>
        <SearchInput placeholder="지하철 역을 검색해주세요" onChange={searchOnChange} value={searchInput} />
        <SearchButton>
          <BsSearch size={21} />
        </SearchButton>
        {searchValue &&
          <AutoCompletForm>
            {searchResult && searchResult.length > 0 ? searchResult.map((result, i) => {
              if (i < 5) {
                return <p key={i}>{result.stationName} {result.lineName}</p>
              }
            }) : <p>검색어를 확인해 주세요</p>}
          </AutoCompletForm>
        }
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
  min-height: 66px;
  max-height: 216px;
  >p {
    padding: 10px 15px;
    box-sizing: border-box;
    cursor: pointer;
  }
  >p:hover {
    background-color: #EDEDED;
  }
`

export default SearchBar;
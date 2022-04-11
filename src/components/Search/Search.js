/**
* @Component: App
* @Description: App will search words typed in the search input and fetch the matched words from the api data list.
* and hightlight the searched term in the word.
**/

// IMPORT React hooks
import { useEffect, useState } from 'react';

// IMPORT CSS.
import './search.css';

// API URL
const API_URL = "https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words";

const List = ({wordList, search}) => {

  /**
  * @function: handleHightLightWord
  * @params: word
  * @Description: hightlights the words based on the search term match.
  **/
  const handleHightLightWord = (word) => {
    const reg = new RegExp(search, 'ig');
    const ubp = '###&&&'; // unique break point.
    const newWord = word.replace(reg, `${ubp}${search}${ubp}`).split(ubp);
    return newWord.map((chars, index) => {
      if(chars === search) {
        return <span key={index} className="hightlightText">{chars}</span>
      } else {
        return <span key={index}>{chars}</span>
      }
    });
  }

  return (
    <ul className="listCont">
      {wordList.map((word) => {
        return <li key={word}>{handleHightLightWord(word)}</li>
      })}
    </ul>
  )
}

const App = () => {

  //Store the search terms in search variable
  const [search, setSearch] = useState('');
  //Store the word list based in search in wordlist array.
  const [wordList, setWordList] = useState([]);

  /**
  * @function: handleWordsList
  * @params: words feteched from server
  * @Description: split the word by new line char (\n). loop through words array to find the match and store in an array.
  **/
  const handleWordsList = (words) => {
    const wordsArray = words.split('\n');
    const freshList = [];
    for (let word of wordsArray) {
        if(word.includes(search)) {
          freshList.push(word)
        }
    }
    setWordList(freshList);
  }

  /**
  * @function: handleFetchDisc
  * @Description: fetching the data from the server
  **/
  const handleFetchDisc = () => {
    fetch(API_URL, {
      method: 'GET'
    })
    .then(response => response.text())
    .then(data => {
      handleWordsList(data);
    });
  }

  /**
  * @function: useEffect (react hook)
  * @Description: checks if the search length is equalto to greater than 3 then makes the api call. resets the wordList array
  * if the search term is less than 3 chars.
  **/
  useEffect(() => {
    if(search.length >=3) {
      handleFetchDisc();
    } else if(wordList.length > 0) {
      setWordList([])
    }
  }, [search]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="container-fluid appContainer">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1>Vineet Mishra</h1>
          <input type="text" className="form-control" placeholder="search" onChange={onChangeSearch}/>
          <List wordList={wordList} search={search} />
        </div>
      </div>
    </div>
  )
}

export default App;

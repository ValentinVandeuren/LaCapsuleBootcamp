import React,{useEffect, useState} from 'react';
import { List, Avatar} from 'antd';
import Nav from './Nav';
import {Link} from 'react-router-dom';

function ScreenSource() {
  let [sourceList, setSourceList] = useState([]);

  useEffect(() => {
    async function loadData() {
      const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=fr&country=fr');
      const response = await rawResponse.json();

      const sourceListFromAPI = response.sources.map((source,i) => {
        return {name: source.name, desc: source.description, id:source.id}
      })
      setSourceList(sourceListFromAPI)
    }
    loadData();
  }, []);

  const onFrenshFlagClick = async () => {
    const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=fr&country=fr');
    const response = await rawResponse.json();

    const sourceListFromAPI = response.sources.map((source,i) => {
      return {name: source.name, desc: source.description, id:source.id}
    })
    setSourceList(sourceListFromAPI)
  }

  const onEnglishFlagClick = async () => {
    const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=en&country=us');
    const response = await rawResponse.json();

    const sourceListFromAPI = response.sources.map((source,i) => {
      return {name: source.name, desc: source.description, id:source.id}
    })
    setSourceList(sourceListFromAPI)
  }

  const onBelgiumFlagClick = async () => {
    const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=fr&country=be');
    const response = await rawResponse.json();

    const sourceListFromAPI = response.sources.map((source,i) => {
      return {name: source.name, desc: source.description, id:source.id}
    })
    setSourceList(sourceListFromAPI)
  }

  const onRussiaFlagClick = async () => {
    const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=ru&country=ru');
    const response = await rawResponse.json();

    const sourceListFromAPI = response.sources.map((source,i) => {
      return {name: source.name, desc: source.description, id:source.id}
    })
    setSourceList(sourceListFromAPI)
  }

  const onNetherlandsFlagClick = async () => {
    const rawResponse = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=a552719accf345168560f723245acbac&language=nl&country=nl');
    const response = await rawResponse.json();

    const sourceListFromAPI = response.sources.map((source,i) => {
      return {name: source.name, desc: source.description, id:source.id}
    })
    setSourceList(sourceListFromAPI)
  }

  return (
    <div>
        <Nav/>
       
       <div className="Banner">
         <button className='iconFlag' onClick={() => onFrenshFlagClick()}>
           <img className='imageFlag' src="./images/frenshFlag.png" alt="" />
         </button>
         <button className='iconFlag' onClick={() => onEnglishFlagClick()}>
          <img className='imageFlag' src="./images/englishFlag.png" alt="" />
         </button>
         <button className='iconFlag' onClick={() => onBelgiumFlagClick()}>
          <img className='imageFlag' src="./images/belgiumFlag.png" alt="" />
         </button>
         <button className='iconFlag' onClick={() => onRussiaFlagClick()}>
          <img className='imageFlag' src="./images/russiaFlag.png" alt="" />
         </button>
         <button className='iconFlag' onClick={() => onNetherlandsFlagClick()}>
          <img className='imageFlag' src="./images/netherlandsFlag.png" alt="" />
         </button>
       </div>

       <div className="HomeThemes">
          
              <List
                  itemLayout="horizontal"
                  dataSource={sourceList}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        // title={<a href='/screenarticlesbysource/:id'>{item.name}</a>}
                        title={ <Link to={`/screenarticlesbysource/${item.id}`}>{item.name}</Link> }
                        description={item.desc}
                      />
                    </List.Item>
                  )}
                />


          </div>
                 
      </div>
  );
}

export default ScreenSource;

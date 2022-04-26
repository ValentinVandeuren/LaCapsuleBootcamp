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

  return (
    <div>
        <Nav/>
       
       <div className="Banner"/>

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

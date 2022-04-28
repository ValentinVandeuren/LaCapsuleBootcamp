import React, { useEffect, useState } from 'react';
import { Card, Icon, Modal} from 'antd';
import Nav from './Nav';
import { useParams } from "react-router-dom";
import {connect} from 'react-redux';

const { Meta } = Card;

function ScreenArticlesBySource(props) {

  let { id } = useParams();
  let [articleList, setArticleList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let[articleTitle, setArticleTitle] = useState("");
  let[articleContent, setArticleContent] = useState("");

  useEffect(() => {
    async function articlesData() {
      const articleResponse = await fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=a552719accf345168560f723245acbac`);
      const articleJSON = await articleResponse.json();

      setArticleList(articleJSON.articles)
    }
    articlesData();
  }, []);

  const showModal = (title, content) => {
    setIsModalVisible(true);
    setArticleTitle(title);
    setArticleContent(content);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
              {articleList.map((article,i) => (
                <div key={i} style={{display:'flex',justifyContent:'center'}}>

                  <Card
                    style={{ 
                    width: 300, 
                    margin:'15px', 
                    display:'flex',
                    flexDirection: 'column',
                    justifyContent:'space-between'}}
                    cover={
                    <img
                        alt="example"
                        src={article.urlToImage}
                    />
                    }
                    actions={[
                      <Icon type="read" key="ellipsis2" onClick={() => showModal(article.title, article.content)} />,
                      <Icon type="like" key="ellipsis" onClick={() => props.onLikeClick(article)}/>
                    ]}
                    >

                    <Meta
                      title={article.title}
                      description={article.description}
                    />

                  </Card>


                </div>
              ))}
            </div> 
            <Modal title={articleTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>{articleContent}</p>
            </Modal>
      </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onLikeClick: function(article) {
        dispatch( {type: 'like', article: article} )
    }
  }
}

export default connect(null, mapDispatchToProps)(ScreenArticlesBySource);

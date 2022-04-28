import React from 'react';
import { Card, Icon} from 'antd';
import {connect} from 'react-redux';

import Nav from './Nav'

const { Meta } = Card;

function ScreenMyArticles(props) {

  return (
    <div>
         
            <Nav/>

            <div className="Banner"/>

            <div className="Card">
              {props.myArticles.map((article,i) => (

                    <div key={i} style={{display:'flex',justifyContent:'center'}}>
                      <Card
                        style={{  
                          width: 300, 
                          margin:'15px', 
                          display:'flex',
                          flexDirection: 'column',
                          justifyContent:'space-between' }}
                        cover={
                        <img
                            alt="example"
                            src={article.urlToImage}
                        />
                        
                        }
                        
                        actions={[
                          <Icon type="read" key="ellipsis2" />,
                          <Icon type="delete" key="ellipsis" onClick={() => props.onDeleteClick(article)} />
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
      </div>
  );
}

function mapStateToProps(state) {
  return { myArticles: state.wishlist }
}

function mapDispatchToPropsDelete(dispatch) {
  return {
    onDeleteClick: function(article) {
      dispatch( {type: 'delete', article: article} )
    }
  }
}
export default connect(mapStateToProps,mapDispatchToPropsDelete, null)(ScreenMyArticles);
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import routes from '../Routes/index';

class DetailsPage extends Component {
state = {
  pageType: 'notes',
};

componentDidMount(){
  switch(this.props.match.path) {
    case routes.note:
      this.setState({pageType: 'notes' })
      break;
    case routes.twitter:
      this.setState({pageType: 'twitters' })
      break;
    case routes.article:
      this.setState({pageType: 'articles' })
      break;
  }
}

  render (){
    const {match} = this.props
    return(
      <DetailsTemplate pageType={this.state.pageType} >
      {/* {`is twitter :   ${match.path === routes.twitter}`} */}
      {this.state.pageType}
     </DetailsTemplate>
    )
  }

}
// const page = match.path.slice(0,match.path)

export default DetailsPage;

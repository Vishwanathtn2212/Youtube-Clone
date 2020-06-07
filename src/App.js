import _ from 'lodash';
import React, {Component} from 'react';
import './App.css';
import Search from './components/Search'
import Video from './components/Video'
import Content from './components/Content'
const API_KEY = 'AIzaSyCT5YNj0WpEUrt_4K8b3GZ6NoBZTOImXMA';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo: null,
      selectedVideos:[]
    };

    this.videoSearch('Virat');
  }

  videoSearch(term){
    const path=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&key=${API_KEY}`
    fetch(path,{method:'GET'})
    .then(response=>response.json())
    .then(result => {
      console.log('success:',result);
      this.setState({
        selectedVideos:result.items,
        selectedVideo:result.items[0]
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  

  render(){
    const videoSearch = _.debounce(term => {
    this.videoSearch(term);
    }, 500);
    return (
      <div className="App">
        <Search onSearchTermChange={videoSearch}/>
        <Video video={this.state.selectedVideo}/>
        <div className="ContentContainer">
          {this.state.selectedVideos.map((Video,index) => {
            return <Content key={index}
            video={Video}
            //passing onVideoSelect method as props to child component i.e Content.js
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
          })}
        </div>
        
        
      </div>
    );
  } 
}

export default App;

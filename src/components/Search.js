import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    
    
    render(){
        return (
                <nav className="topnav">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="searchDiv">
                        <div>
                            <input type="text" 
                            id="searchbox"
                            placeholder="Search...."
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)} 
                            />
                            {/* <button id="Button" ><img id="icon" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-02-512.png" alt=""/></button> */}
                        </div>
                    </div>
                </nav>
        )
    }
    
}

export default Search 
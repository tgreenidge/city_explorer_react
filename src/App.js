import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </div>
    )
  }
}

class Search extends Component {
  render() {
    return (
      <div>
        <input/>
        <button>Search</button>
      </div>
    )   
  }
}

class Map extends Component {
  render() {
    return (
      <div className="map">
      <img src="https://via.placeholder.com/300"/>
      </div>
    )
  }
}

class Result extends Component {
  render() {
    return (
      <div>
        <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci. Sit amet tellus cras adipiscing enim eu. Viverra vitae congue eu consequat ac. Ornare arcu odio ut sem nulla. Placerat in egestas erat imperdiet sed. Egestas diam in arcu cursus euismod quis viverra nibh cras. Viverra vitae congue eu consequat. Fusce ut placerat orci nulla pellentesque dignissim enim sit. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Vel quam elementum pulvinar etiam non. Consectetur adipiscing elit pellentesque habitant morbi tristique.</section>
        <section>Tristique senectus et netus et malesuada fames ac. Vivamus at augue eget arcu. Justo donec enim diam vulputate. Praesent semper feugiat nibh sed pulvinar proin. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sollicitudin nibh sit amet commodo nulla facilisi. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Lacinia at quis risus sed vulputate odio ut enim. Integer enim neque volutpat ac tincidunt vitae. Feugiat nibh sed pulvinar proin gravida. Elementum sagittis vitae et leo duis. Adipiscing tristique risus nec feugiat. Arcu felis bibendum ut tristique et egestas. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Tincidunt arcu non sodales neque sodales. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Erat nam at lectus urna duis. Augue interdum velit euismod in.</section>
        <section>Blandit cursus risus at ultrices mi tempus. At erat pellentesque adipiscing commodo elit. Elit pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis rhoncus. Nunc sed id semper risus in hendrerit gravida rutrum. Auctor elit sed vulputate mi. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi non arcu risus quis varius quam quisque id diam. Pellentesque habitant morbi tristique senectus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ut ornare lectus sit amet est placerat in egestas erat. Risus pretium quam vulputate dignissim suspendisse in est ante in. Non enim praesent elementum facilisis leo. Odio tempor orci dapibus ultrices in iaculis. Gravida rutrum quisque non tellus orci ac.</section>
        <section>Elementum nibh tellus molestie nunc non blandit massa enim. Ultricies mi quis hendrerit dolor magna eget. Vivamus arcu felis bibendum ut tristique et egestas quis. Elementum pulvinar etiam non quam lacus. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Urna molestie at elementum eu facilisis. Amet aliquam id diam maecenas ultricies mi eget. Laoreet sit amet cursus sit amet dictum sit amet justo. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Lectus proin nibh nisl condimentum id venenatis a condimentum. Urna neque viverra justo nec ultrices dui. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Auctor urna nunc id cursus metus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.</section>
        <section>Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Felis eget velit aliquet sagittis id consectetur. Bibendum enim facilisis gravida neque. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Ut lectus arcu bibendum at varius vel pharetra vel. Integer feugiat scelerisque varius morbi. Sit amet facilisis magna etiam tempor. Id interdum velit laoreet id donec. Elementum pulvinar etiam non quam lacus suspendisse. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Metus dictum at tempor commodo ullamcorper a lacus. Lacus viverra vitae congue eu consequat ac felis. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit. Elementum nibh tellus molestie nunc non blandit massa. Enim tortor at auctor urna nunc id cursus metus aliquam. Quam vulputate dignissim suspendisse in est ante. Odio facilisis mauris sit amet. At elementum eu facilisis sed odio morbi quis commodo.</section>
      </div>
    )
  }
}


class Main extends Component {
  render() {
    return(
      <React.Fragment>
        <Search />
        <Map />
        <Result />
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <Header/>
        <Main />
      </React.Fragment> 
    )
  }
}

export default App;

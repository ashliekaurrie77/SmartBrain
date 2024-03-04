import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg className='particles' color="#FFFFFF" num={80} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
  <FaceRecognition />*/}
    </div>
  );
}

export default App;

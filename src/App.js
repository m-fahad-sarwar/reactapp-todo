import Header from './components/header';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './components/button';
import Reason from './components/reasons';
import Services from './components/sevices-card';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid" id='Home'>
        <div className="row">
          <div className="col-12 col-md-4">
            <h1 className='fw-bold m-0 m-md-5'>Building things is our mission. Design by Fahad 7749</h1>
          </div>
          <div className='col-12 col-md-4 text-center text-white bg-primary position-md-relative' id='feature'>
            <h3 className='m-3'>Feature Projects</h3>
            <p>The national university of agriculture.</p>
            <Button text='Back' />
            <Button text='Next' />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h2 className="text-center my-5 fw-bold">Our Reputation</h2>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <div className='border p-5'>

              <Reason text="Nullam senectus porttitor in eget. Eget rutrum leo interdum." reason="Best Team" src='Vector' />
            </div>
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <div className='border p-5'>

              <Reason text="Cursus semper tellus volutpat aliquet lacus. " reason='Best Services' src='Vector' />
            </div>
          </div>
          <div className="col-12 col-md-4 my-4 my-md-0">
            <div className='border p-5'>

              <Reason text="Ultricies at ipsum nunc, tristique nam lectus." reason="Best Design" source='Icon' />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5" id='about'>
        <div className="row">
          <div id='About' className='d-none d-md-block'>
            <div className='col-12 col-md-4 text-center text-white bg-primary' id='About-data'>
              <h3 className='m-3 d-none d-md-block'>About</h3>
              <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                facilis sunt repellendus perferendis molestiae expedita error, voluptate magni l
                audantium cumque laboriosam est, tenetur nulla quas quam optio esse exercitationem ad?</p>
              <Button text='More in our history' />

            </div>
          </div>
          <div className='col-12 col-md-4 text-center text-white bg-primary d-block d-md-none'>
              <h3 className='m-3 d-none d-md-block'>About</h3>
              <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                facilis sunt repellendus perferendis molestiae expedita error, voluptate magni l
                audantium cumque laboriosam est, tenetur nulla quas quam optio esse exercitationem ad?</p>
              <Button text='More in our history' />

            </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4"><Services text='Services' src={a}/></div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

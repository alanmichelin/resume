import './App.css';
import git from './components/github.png';
import phone from './components/phone.png';
import mail from './components/mail.png';
import location from './components/location.png';
import linkedin from './components/linkedin.png';
import React from 'react';

function App() {
    function circle(howmany, notpainted){
      var howMany=[]
        for(var i =0;i<howmany;i++){
        howMany = [...howMany, (<i className="far fa-circle paint" key={i}></i>)]
        }
        for(var j =0;j<notpainted;j++){
          howMany = [...howMany, (<i className="far fa-circle" key={j+'a'}></i>)]
          }

       return howMany
       
      }
    function showText (params,pos){
      console.log(pos)
      var element = document.querySelector(params).style
      if(element.display === 'none'){
      element.backgroundColor='#457b9d'
      element.display ='block'
      element.width='20%'
      element.height='6%'
      element.border='1px solid black'
      element.textAlign='center'
      element.left = pos.pageX+20 + 'px'
      element.top = pos.pageY + 'px'
      // element.transform= `translate(${pos.clientX}px, ${pos.clientX}px)`
    }
    else{
      element.display ='none'
    }
    }
    

  return (
    
<div className="App">
  <div className="container">
    <div className="row" >
      <div className="col-2" style={{backgroundColor:'#457b9d', borderTop:'2px solid black', borderLeft:'2px solid black', borderBottom:'2px solid black'}}>
        <div className="icons" style={{margin:'15%'}}>
          <p style={{ color: 'whitesmoke', textAlign:'left', fontSize:'12px'}}>Click any of these icons to get more info:</p>
          <img src={git} alt="github" width='96px' className="src" style={{marginTop:'5%'}} onClick={()=> window.open("https://github.com/alanmichelin", "_blank")}
          />
          <p className='sidebarText'>Github</p>
          <br/>
          <img src={phone} alt="phone" width='64px'className="src"style={{marginTop:'50%'}} onClick={(e)=> showText('.givephone' ,e)}/>
          <p className='sidebarText'>Phone number</p>
          <div className = 'givephone' style={{display:'none', position:'absolute'}}>
          <h4 style={{fontSize:'36px'}}>+54 9 11 6196-9356</h4>
          </div>
          <br/>
          <img src={mail} alt="mail" width='64px'className="src"style={{marginTop:'50%'}} onClick={(e)=> showText('.givemail' ,e)}/>
          <p className='sidebarText'>Mail</p>
          <div className = 'givemail' style={{display:'none', position:'absolute'}}>
          <h4 style={{fontSize:'31px'}}>alangmichelin@gmail.com</h4>
          </div>
          <br/>
          <img src={location} alt="location" width='64px'className="src"style={{marginTop:'50%'}}onClick={(e)=> showText('.givemaps' ,e)}/>
          <p className='sidebarText'>Location</p>
            <div className = 'givemaps' style={{display:'none', position:'absolute'}}>
            <iframe title='pasodelrey' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52521.25581883824!2d-58.78450258756216!3d-34.640090745070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc959a52b6af31%3A0x850339768e3dc0b3!2sPaso%20del%20Rey%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1617077227612!5m2!1ses!2sar" width="600" height="450" loading="lazy"/>
            </div>
            <br/>
            <img src={linkedin} alt="linkedin" width='96px' className="src" style={{marginTop:'50%'}} onClick={()=> window.open("https://www.linkedin.com/in/alan-michelin/", "_blank")}
          />
          <p className='sidebarText'>LinkedIn</p>
          </div>
          </div>
        
        <div className="col-7" style={{ textAlign:'left', borderTop:'2px solid black', borderRight:'2px solid black', borderBottom:'2px solid black'}}>

     
            






            
        <h1 style={{textAlign:'center', marginTop:'5%' }}>Alan Michelin</h1>
        <h2 style={{paddingTop: "5%", paddingBottom: "2%", paddingLeft:"3%"}}>Profile:</h2>
        <p style={{paddingLeft:'3%'}}>Looking for a job that allows me to grow in the IT field and be
          able to apply all my knowledge in it, while I can continue
          learning and studying.
          Self-taught programmer and web development currently
          studying for System Analyst degree.</p>
          <h2 style={{paddingTop: "5%", paddingBottom: "2%", paddingLeft:"3%"}}>Education:</h2>
          <p style={{paddingLeft:'3%'}}> <strong> SYSTEM ANALYST.</strong> (Started in 2021) <br/>
          At  <a href="https://www.ort.edu.ar/carreras-terciarias/analista-sistemas-almagro">ORT University</a>. 
          </p>
          <h2 style={{paddingTop: "5%", paddingBottom: "2%", paddingLeft:"3%"}}>Languages:</h2>
          <table style={{width: "100%"}}>
          <tbody>
            <tr>
              <td style={{paddingLeft:'5%', width:"28%"}}>English:</td>
              <td>{circle(3,2)} (Upper-intermediate)</td>
            </tr>
            <tr>
              <td style={{paddingLeft:'5%'}}>Spanish:</td>
              <td>{circle(5,0)} (Native)</td>
            </tr>
            <tr>
              <td style={{paddingLeft:'5%'}}>Portuguese:</td>
              <td>{circle(1,4)} (Basic)</td>
            </tr>
            </tbody>
            </table>
            <h2 style={{paddingTop: "5%", paddingBottom: "5%", paddingLeft:"3%"}}>Programming skills:</h2>
            <table style={{width:"100%"}}>
            <tbody>
            <tr >
              <td style={{ paddingLeft:'5%'}}><h4>Languages:</h4></td>
              <td></td>
              <td style={{paddingLeft:'5%'}}><h4>Frameworks/Tools:</h4></td>
            </tr>
            <tr >
              <td style={{ paddingLeft:'5%'}}> HTML:</td>
              <td> {circle(4,1)}</td>
              <td style={{ paddingLeft:'5%'}}>React:</td>
              <td>{circle(3,2)}</td>
            </tr>
            <tr>
              <td style={{ paddingLeft:'5%'}}>CSS: </td>
              <td>{circle(3,2)}</td>
              <td style={{ paddingLeft:'5%'}}>GIT: </td>
              <td>{circle(3,2)}</td>
            </tr>
            
            <tr>
              <td style={{ paddingLeft:'5%'}}> JavaScript: </td>
              <td>{circle(4,1)}</td>
              <td style={{ paddingLeft:'5%'}}>NodeJS: </td>
              <td>{circle(1,4)}</td>
            </tr>
            <tr>
            
            <td style={{ paddingLeft:'5%'}}>JAVA: </td>
              <td>{circle(2,3)}</td>
              <td style={{ paddingLeft:'5%'}}>Bootstrap: </td>
              <td>{circle(3,2)}</td>
            </tr>
              <tr>

              </tr>
              </tbody>
          </table>
          <h2 style={{paddingTop: "5%", paddingBottom: "2%", paddingLeft:"3%"}}>Other skills:</h2>
          <table style={{width:"100%"}}>
          <tbody>
          
          <tr>
            <td style={{ paddingLeft:'5%'}}>Software, hardware and network knowledge</td>
            <td>{circle(5,0)}</td>
          </tr>
          <tr>
            <td style={{ paddingLeft:'5%'}}>Network knowledge</td>
            <td>{circle(3,2)}</td>
          </tr>
          <tr>
            <td style={{ paddingLeft:'5%'}}>Office package knowledge</td>
            <td>{circle(4,1)}</td>
          </tr>
          <tr>
          <td style={{ paddingLeft:'5%'}}>Communication and teamwork</td>
          <td>{circle(5,0)}</td>
          </tr>
          <tr>
          <td style={{ paddingLeft:'5%'}}>Will and desire to learn</td>
          <td>{circle(5,0)}</td>
          </tr>
          </tbody>
          </table>
          <br/>
        </div>
    </div>
  </div>
</div>
  );
}

export default App;

import React from 'react'
import About_header from '../about/About_header'

export default class Contact extends React.Component {
  render() {
    return (
      <>
      <About_header data={{p1:"Contact Us",p2:"Homepage >",p3:"Contact Us"}}/>
      <div className="container py-5">
          <div className="row bg-light">
              <div className="col-lg-6 py-3  col-md-6 col-sm-12 col-12">
                  <h1>Contact Info</h1>
                  <p>You can always reach us via following contact details. We will give our best to reach you as possible. </p>
                  <p className='mt-4'><b>Phone:</b> +1800 326 3264</p>
                  <p> <b> Email: </b> info@traininginstitute.gov.co.uk</p>
                  <p><b>Website: </b>http://www.traininginstitute.gov.co.uk</p>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-12 col-12">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.302555782515!2d74.3387647144828!3d31.515849154520094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190560c748c687%3A0xebb8f6a21f4a5e0b!2sVvork%20Cloud%20Technologies!5e0!3m2!1sen!2s!4v1649845199555!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.302555782515!2d74.3387647144828!3d31.515849154520094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190560c748c687%3A0xebb8f6a21f4a5e0b!2sVvork%20Cloud%20Technologies!5e0!3m2!1sen!2s!4v1649845199555!5m2!1sen!2s" style={{border:0, width:"100%", height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
      </div>
      <div className="container-fluid bg-light">
      <div className="container">
          <div className="row ">
              <div className="col-12 text-center mb-5">
                  <h1> <span style={
                      {color:"orange"}
                  }>Send Us </span>A Message </h1>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6  py-5 d-flex flex-column justify-content-between">
                      <input className='py-2 w-100 px-4' placeholder='Your Name' type="text" name="" id="" />
                      <input className='py-2 mt-4 w-100 px-4' placeholder='Your Email'type="text" name="" id="" />
                      <input  className='py-2 mt-4 w-100 px-4' placeholder='Your subject' type="text" name="" id="" />
                  </div>
                  <div className="col-lg-6">
                      <input placeholder='Message' className=' mt-5 px-4  w-100 own_input pb-5 py-5' type="text" name="" id="" />
                  </div>
              </div>
          </div>
      </div>
      </div>
      <div className="container text-end mb-5">
      <button className=' px-4 py-2 bg-warning' style={{border:"none"}}>send</button>
      </div>
      </>
    )
  }
}

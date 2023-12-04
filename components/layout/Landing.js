import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ServiceDetail from '../servicedetails';
import BlogDetail from '../BlogDetail';
import ema from '../../img/ema.png';
import john from '../../img/john.png';
import watson from '../../img/watson.png';
import '../../App.css';
import axios from 'axios';
import  { useState } from 'react';
import Footer from './footer'; 


const Landing = ({isDoctorAuthenticated, isUserAuthenticated}) => {
  const [userQuery, setUserQuery] = useState('Hi');
  const [chatbotResponse, setChatbotResponse] = useState('Hi! How are you?');const handleUserQuery = async () => {
      try {
        const response = await axios.post('http://localhost:5001/api/predict', { userQuery });
        console.log(response.data)
        setChatbotResponse(response.data.response);
      } catch (error) {
        console.error('Error fetching chatbot response:', error);
      }
    };
    
    if(isDoctorAuthenticated){
        return <Redirect to="/dashboard" />
     }// else if(isUserAuthenticated) {
    //     return <Redirect to="/appointment" />
    // }

   const serviceData = [
        {
          name: 'Individual Therapy',
          // img: individualTherapyImg,
          desc: 'Tailored one-on-one sessions with a licensed therapist to address personal challenges, promote self-discovery, and enhance overall well-being.',
        },
        {
          name: 'Group Counseling',
          // img: groupCounselingImg,
          desc: 'Supportive group counseling sessions designed to foster community, share experiences, and provide a collaborative environment for individuals facing similar challenges.',
        },
        {
          name: 'Mindfulness Meditation',
          // img: mindfulnessMeditationImg,
          desc: 'Guided mindfulness and meditation practices to cultivate inner peace, reduce stress, and enhance emotional resilience for individuals seeking mental clarity.',
        },
      ];
      const blogData = [
        {
          title: 'The Benefits of Mindfulness Meditation in Daily Life',
          description: 'Incorporating mindfulness meditation into your daily routine can enhance mental well-being by reducing stress, improving focus, and fostering a greater sense of emotional balance and resilience. This practice cultivates a deeper connection with oneself.',
          author: 'Dr. Minful',
          authorImg: ema,
          date: '23 April 2023'
        },
        {
          title: 'Navigating Personal Growth through Group Counseling',
          description: 'Join us on a journey of self-discovery through group counseling. Discover the transformative power of shared experiences, mutual support, and the sense of community in fostering personal growth and emotional resilience.',
          author: 'Dr. Compassion',
          authorImg: watson,
          date: '24 March 2020'
        },
        {
          title: 'Unlocking Inner Healing: Individual Therapy Insights',
          description: 'Delve into the world of individual therapy and its profound impact on unlocking inner healing. Gain insights into how personalized counseling sessions can address specific challenges, promote self-awareness, and facilitate personal growth.',
          author: 'Dr. Insightful',
          authorImg: john,
          date: '25 March 2023'
        },
      ];
    
      
  
    return (
        <Fragment>
            <div style={{ height: "600px", width: "100%" }} className="d-flex align-items-center justify-content-center">
                <div className="col-md-4 col-sm-6 col-12 mb-4 mx-md-5 mx-3">
                    <h1>Your New Smile <br />Starts From Here</h1>
                    <p className="text-primary">Welcome To Our THERAPY HOME !!</p>
                    <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded">GET STARTED</Link>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <img src={require("../../img/landing1.png")} height={500} width={1000} className="img-fluid rounded" alt="" />
                </div>
            </div>
            <div className="container mt-5">
    <h2 className="text-center mb-4">Welcome to Our Therapy Services</h2>
    
    <p className="text-center lead text-primary">At our centre, we are dedicated to providing compassionate and effective therapy services to help you achieve mental well-being. Our team of experienced therapists is committed to supporting you on your journey to personal growth and healing.</p>

    <div className="row mt-5">
      <div className="col-md-4 mb-4">
        <h3 className="text-center">Comprehensive Services</h3>
        <p className="text-center">We offer a wide range of therapy services to address various mental health concerns. Whether you're dealing with stress, anxiety, depression, or other challenges, our therapists are here to help.</p>
      </div>

      <div className="col-md-4 mb-4">
        <h3 className="text-center">Qualified Therapists</h3>
        <p className="text-center">Our team consists of licensed and experienced therapists who are passionate about guiding individuals towards emotional well-being. You can trust in the expertise and professionalism of our therapists.</p>
      </div>

      <div className="col-md-4 mb-4">
        <h3 className="text-center">Personalized Approach</h3>
        <p className="text-center">We understand that every individual is unique. Our therapists tailor their approach to meet your specific needs, ensuring that you receive personalized and effective therapy to promote positive change in your life.</p>
      </div>
    </div>
  </div>
  <section className="services-container mt-5" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
            
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
                

            </div>
            <div className="d-flex justify-content-center mt-5">
                    <img src={require("../../img/landing2.png")} height={500} width={500} className="img-fluid rounded" alt="" />
                </div>
        </section>
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck">
                    <div className="mt-5 d-flex justify-content-center">
                        <div className="row w-80">
                            {
                                blogData.map(blog => <BlogDetail key={blog.title} blog={blog}></BlogDetail>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="chatbot-container">
            <h1>Therapist AI</h1>
              <div className="input-container">
                <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask me anything..."
              />
              <button onClick={handleUserQuery}>Interact</button>
              </div>
            <div className="response-container">
              <strong>Chatbot's Response:</strong>
              <div className="chatbot-response-box">{chatbotResponse}</div>
            </div>
          </div>
        </Fragment>
        
    );
};
Landing.propTypes = {
    isDoctorAuthenticated: PropTypes.bool.isRequired,
    isUserAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
    isUserAuthenticated: state.authUser.isUserAuthenticated
});

export default connect(mapStateToProps)(Landing);

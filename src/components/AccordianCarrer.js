import React, { useState } from 'react';

import AccData from '../sources/accordian.json';
import styled from 'styled-components';
import "./style/AccordianCarrer.css"
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Button from '@mui/material/Button'; // Assuming you're using Material-UI
import PopupBody from '../components/PopupBody'; // Make sure to define this component
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

console.log(AccData);

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;

`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;

  p {
    font-size: 2rem;
  }
`;

const AccordianCarrer = () => {
  const [clicked, setClicked] = useState(null);
  const [anchor, setAnchor] = useState(null); // Moved outside the toggle function

  // Define handleClick outside the toggle function
  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor); // Define 'open' here
  const id = open ? 'simple-popper' : undefined; // Define 'id' here

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [capVal, setCapVal] = useState(null)
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., send data to a server.
    console.log(formData);
  };
  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {AccData.map((item, index) => (
            <div key={index}>
              <Wrap onClick={() => toggle(index)}>
                <div className='accordian-name'>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {/* popup */}
                <div>
                    <Button aria-describedby={id} type="button" onClick={handleClick}>
                    Apply now
                    </Button>
                    <BasePopup id={id} open={open} anchor={anchor}>
                    <PopupBody>          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
            <div className='label-sec'>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder='Name'
                            />
                            </div>
                            <div className='label-sec'>
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="tel" // Use type "tel" for phone numbers
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder='Phone number'
                            />
                            </div>
                            
                            <div className='label-sec'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder='emailaddress@email.com'
                            />
                            </div>
                            <div className='label-sec'>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder='Massage'
                            />
                            </div>
                           
              <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
              {/* ... form fields ... */}
              <button type="submit" className='btn-sec'>Send Email</button>
            </form>
          </div></PopupBody>
                    </BasePopup>
                 </div>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </div>
          ))}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default AccordianCarrer;
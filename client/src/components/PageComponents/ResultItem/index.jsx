import React from 'react';
import SectionTitle from '../SectionTitle';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';


const horizontalLayout = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const verticalLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 500px;
`;

export default function ResultItem({label, img, text, location})
{
  return(
    <div style={{marginBottom: '10px',marginLeft: '100px',display: 'flex', borderBottom: '1px solid', flexDirection: 'row', alignItems: 'center'}}>
      <div>
      <img style = {{width: '250px', height:'200px'}} src={img}/>
    </div>
    <div style={{marginLeft: '50px'}}>
      <div style = {{display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '500px'}} >
        <div style={{marginBottom: '10px'}}>
      <SectionTitle label={label} />
      <div style={{font: 'Helvetica', fontSize: '14px', color: '#5D5D5D'}}>
        in {location}
      </div>
      <StarRatingComponent
            editing={false}
            value={3}
            starColor={'yellow'}
            name="rate1"
            starCount={5}
          />
    </div>
      <body style={{font: 'Helvetica', fontSize: '14px', color: '#5D5D5D'}} > {text} </body>
    </div>
  </div>
</div>
  )
};

ResultItem.propTypes = {
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Div = styled.div`
  font-size: 28px;
  color: #5D5D5D;
  font-family: Helvetica;
  margin-bottom: 10;
  width: 100%;
`;

export default function SectionTitle({label})
{
  return(

    <Div> {label} </Div>
  );
};

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

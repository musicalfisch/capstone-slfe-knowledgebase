import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Legend = styled.legend`
  display: inline-flex;
  font-size: 40px;
  margin-bottom: 15px;
  border-bottom: 1px solid #000;
  width: 100%;

  ::before {
    display: inline;
    margin-right: 0.75rem;
  }
`;

export default function SectionTitle({label})
{
  return(
    <Legend> {label} </Legend>
  );
};

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

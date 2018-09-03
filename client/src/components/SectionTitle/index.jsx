import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Legend = styled.legend`
  display: inline-flex;
  font-size: 40px;
  padding: 2em 0em 2em;
  background-color: #212121;
  color: #fff;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif

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

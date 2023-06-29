import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Companies = () => {
  const brands = ['apple', 'google', 'meta', 'microsoft', 'nvidia', 'amd', 'xiaomi', 'sony'];
  const nthChildren = [1, 4, 5, 8];

  const [searchQuery, setSearchQuery] = useState('');

  const reorderedBrands = [...brands].sort((a, b) => {
    const aMatch = a.toLowerCase().includes(searchQuery.toLowerCase());
    const bMatch = b.toLowerCase().includes(searchQuery.toLowerCase());

    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });

  return (
    <Section>
      <div className="bg-headlineBg flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-white text-lg p-5 md:p-10">Check tech companies&apos; financial performance for the past 5 years...</h1>
        <SearchBar
          className="p-5 m-5 rounded-md md:h-fit"
          type="text"
          placeholder="Find company..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Ul nthChildren={nthChildren} className="grid grid-cols-2 w-full h-screen">
        {reorderedBrands.map((brand) => (
          <Button key={brand} url={brand} iconName="bar-chart-outline">{brand}</Button>
        ))}
      </Ul>
    </Section>
  );
};

export default Companies;

const Section = styled.section`

`;

const Ul = styled.ul`
  ${({ nthChildren }) => {
    let css = '';
    nthChildren.forEach((num) => {
      css += `
        & > *:nth-child(${num}) {
          background-color: #3f62a5;
        }
      `;
    });
    return css;
  }}
`;

const SearchBar = styled.input`
`;

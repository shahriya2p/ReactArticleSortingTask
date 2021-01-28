import SetUpTests from './setupTests' 
import Content from './main/content';
import Article from './main/article'
import { shallow } from 'enzyme';
import React from 'react';


describe("List Test Case", () => {
  it("renders content component", () => {
    shallow(<Content />);
  });

  it("renders article component", () => {
    shallow(<Article/>);
  })
});


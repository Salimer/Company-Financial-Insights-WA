import React from 'react';
  const index = 0;

  const { container } = render(<ISitem parameter={parameter} index={index} />);
  expect(container.firstChild).toMatchSnapshot();
});

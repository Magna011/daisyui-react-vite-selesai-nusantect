import React, { useState } from 'react';

const LoremSubmodul2 = () => {
  const longLoremText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec quam elit. Fusce vel libero sit amet ante aliquet mattis. Aliquam eget dui eu dolor pellentesque scelerisque non ut dui. Proin non metus id purus semper cursus. Sed et nisi ac augue tincidunt vehicula a et metus. Nulla facilisi. Duis et felis id elit consequat posuere.
  `;

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="LoremSubmodul1">
      <p>{showMore ? longLoremText : longLoremText.substring(0, 200)}
      {longLoremText.length > 200 && (
        <button onClick={toggleShowMore}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      )}</p>
    </div>
  );
};

export default LoremSubmodul2;

import React, { useRef, useEffect } from 'react';
import './style.css';

const App = () => {
  const element1Ref = useRef(null);
  const element2Ref = useRef(null);
  console.log(process.env.REACT_APP_NAME);

  useEffect(() => {
    if (element1Ref.current && element2Ref.current) {
      const rect1 = element1Ref.current.getBoundingClientRect();
      const rect2 = element2Ref.current.getBoundingClientRect();
      const top = rect2.top - rect1.bottom;
      const left = rect2.left - rect1.right;
      console.log('Top:', top, 'Left:', left);
      console.log('1top', rect1.top, '2top', rect2.top);
      console.log('1left', rect1.left, '2left', rect2.left);
      console.log('1right', rect1.right, '2right', rect2.right);
    }
  }, []);

  return (
    <>
      <div
        ref={element1Ref}
        style={{
          position: 'relative',
          height: '60px',
          border: '3px solid',
          margin: '10px',
        }}
      ></div>
      <div
        // ref={element2Ref}
        style={{
          position: 'relative',
          height: '60px',
          outline: '3px solid',
          margin: '10px',
        }}
      >
        <div
          ref={element2Ref}
          style={{
            right: 0,
            position: 'absolute',
            outline: '3px solid',
            height: '60px',
            width: '60px',
          }}
        ></div>
      </div>
    </>
  );
};

export default App;

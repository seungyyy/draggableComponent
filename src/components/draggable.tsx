import React, { useState } from 'react';
import styled from 'styled-components';


export const Draggable = () => {
  const [drag, setDrag] = useState({
    eventClientX: 0,
    eventClientY: 0,
  });

  const handleDragStart = (e: any) => {
    e.currentTarget.style.opacity = '0.2';
    setDrag({
      eventClientX: e.clientX,
      eventClientY: e.clientY,
    });
  };

  const handleDragEnd = (e: any) => {
    e.currentTarget.style.opacity = '1';
    setDrag({
      eventClientX: e.clientX,
      eventClientY: e.clientY,
    });
    e.target.style.left = `${
      e.target.offsetLeft + e.clientX - drag.eventClientX
    }px`;
    e.target.style.top = `${
      e.target.offsetTop + e.clientY - drag.eventClientY
    }px`;
  };

  const handleDrag = (e: any) => {
    e.currentTarget.style.opacity = '0.2';
    setDrag({
      eventClientX: e.clientX,
      eventClientY: e.clientY,
    });
    e.target.style.left = `${
      e.target.offsetLeft + e.clientX - drag.eventClientX
    }px`;
    e.target.style.top = `${
      e.target.offsetTop + e.clientY - drag.eventClientY
    }px`;
  };
  const handleDragOver = (e: any) => {
    console.log('asdsa')
  }

  //console.log(drag)

  return (
    <Container>
      <article>
        <h2>Draggable</h2>
        <DragContant
          draggable
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
        >
          hee
        </DragContant>
      </article>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  article {
    width: 80%;
    max-width: 600px;
    height: 700px;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`; 

const DragContant = styled.div`
  width: 150px;
  height: 150px;
  position: fixed;
  background-color: #ddd;
`;
import { url } from 'inspector';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { isBoxedPrimitive } from 'util/types';


export const Draggable = () => {
  const [drag, setDrag] = useState({
    eventClientX: 0,
    eventClientY: 0,
    initClientX: 0,
    initClientY: 0,
  });
  const [container, setContainer] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const box = containerRef.current.getBoundingClientRect();
    setContainer({
      top: box.top,
      left: box.left,
      bottom: box.top + box.height,
      right: box.left + box.width,
    });
  }, [containerRef]);

  const handleDragStart = (e: any) => {
    setDrag({
      initClientX: e.target.offsetLeft,
      initClientY: e.target.offsetTop,
      eventClientX: e.clientX,
      eventClientY: e.clientY,
    });
  };

  const handleDragEnd = (e: any) => {
    if (container.left < e.clientX && e.clientX < container.right && container.top < e.clientY && e.clientY < container.bottom) {
      setDrag({
        ...drag,
        eventClientX: e.clientX,
        eventClientY: e.clientY,
      });
      e.target.style.left = `${e.target.offsetLeft + e.clientX - drag.eventClientX
        }px`;
      e.target.style.top = `${e.target.offsetTop + e.clientY - drag.eventClientY
        }px`;
    } else { 
      e.preventDefault();
      e.stopPropagation();
      e.target.style.left = `${drag.initClientX}px`;
      e.target.style.top = `${drag.initClientY}px`;
    }
  };

  const handleDrag = (e: any) => {
    setDrag({
      ...drag,
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

  return (
    <Container>
      <article ref={containerRef}>
        <h2>Draggable</h2>
        <Box
          draggable
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onMouseOver={(e: any) => {
            e.preventDefault();
            e.currentTarget.style.cursor = 'grab';
          }}
        >
          Box
        </Box>
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
    position: relative;
    width: 80%;
    max-width: 600px;
    height: 700px;
    padding: 2rem;
    box-sizing: border-box;
    text-align: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`; 

const Box = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 150px;
  left: 30px;
  background-color: #ddd;
`;
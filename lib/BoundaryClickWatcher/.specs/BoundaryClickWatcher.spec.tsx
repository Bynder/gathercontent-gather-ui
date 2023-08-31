import {
    describe,
    expect,
    it,
    vi
  } from 'vitest';
  
  import React from 'react';
  
  import { fireEvent, render, screen } from '@testing-library/react';
  
import BoundaryClickWatcher from '..';

  
  describe('BoundaryClickWatcher', () => {
    const insideSpy = vi.fn();
    const outsideSpy = vi.fn();
    const mouseEnterSpy = vi.fn();
    const mouseLeaveSpy = vi.fn();

    it('can tell you when the element has been clicked and clicked away from', () => {
      render(
        <>
          <BoundaryClickWatcher insideClickHandler={insideSpy} outsideClickHandler={outsideSpy}>
            <div>Hello! im inside!</div>
          </BoundaryClickWatcher>
          <div>Goodbye! im outside!</div>
        </>
        
      );

      expect(insideSpy).not.toHaveBeenCalled();
      expect(outsideSpy).not.toHaveBeenCalled();

      fireEvent.click(screen.getByText('Hello! im inside!'));

      expect(insideSpy).toHaveBeenCalledTimes(1);
      expect(outsideSpy).not.toHaveBeenCalled();

      fireEvent.click(screen.getByText('Goodbye! im outside!'));
      expect(insideSpy).toHaveBeenCalledTimes(1);
      expect(outsideSpy).toHaveBeenCalledTimes(1);
    });

    it('can tell you when the element has been hovered and unhovered', () => {
      render(
        <>
          <BoundaryClickWatcher onMouseEnter={mouseEnterSpy} onMouseLeave={mouseLeaveSpy}>
            <div>Hello! im inside!</div>
          </BoundaryClickWatcher>
          <div>Goodbye! im outside!</div>
        </>
        
      );

      expect(mouseEnterSpy).not.toHaveBeenCalled();
      expect(mouseLeaveSpy).not.toHaveBeenCalled();

      fireEvent.mouseEnter(screen.getByText('Hello! im inside!'));

      expect(mouseEnterSpy).toHaveBeenCalledTimes(1);
      expect(mouseLeaveSpy).not.toHaveBeenCalled();

      fireEvent.mouseLeave(screen.getByText('Hello! im inside!'));
      expect(mouseEnterSpy).toHaveBeenCalledTimes(1);
      expect(mouseLeaveSpy).toHaveBeenCalledTimes(1);
    });
   
    
  });
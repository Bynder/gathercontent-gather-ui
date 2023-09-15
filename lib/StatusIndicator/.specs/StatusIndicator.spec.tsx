import {
    describe,
    expect,
    it,
  } from 'vitest';
  
  import React from 'react';
  
  import { render, screen } from '@testing-library/react';
  
  import StatusIndicator from '..';

  const classList = ['status-indicator--completed', 'status-indicator--collapsed', 'status-indicator--bordered', 'status-indicator--small', 'status-indicator--medium', 'status-indicator--soft-label', 'status-indicator--read-only', 'status-indicator--row']
  
  describe('StatusIndicator', () => {
    it('adds the modifer classes', () => {
      const { rerender } = render(
        <StatusIndicator data-testid="status-indicator" />
      );

      let statusIndicator = screen.getByTestId('status-indicator');

      classList.map(modifierClass => {
        expect(statusIndicator.classList.contains(modifierClass)).toBe(false);
      });

      rerender(
        <StatusIndicator
            data-testid="status-indicator"
          completed
          collapsed
          bordered
          small
          medium
          softLabel
          readOnly
          row
        />
      );
      statusIndicator = screen.getByTestId('status-indicator');

      classList.map(modifierClass => {
        expect(statusIndicator.classList.contains(modifierClass)).toBeTruthy();
      });
    });
  });
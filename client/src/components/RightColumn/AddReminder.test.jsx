import React from 'react';
import { render, screen } from '@testing-library/react';
import AddReminder from './AddReminder';
import { expect, describe, it } from "vitest";


describe('AddReminder', () => {
    it('renders the submit button', () => {
      render(<AddReminder />);
      const submitButton = screen.getAllByText('Add');
      expect(submitButton).toBeDefined();
    });
  
    // it('renders cancel button', () => {
    //   render(<AddReminder />);
    //   const cancelButton = screen.getAllByAltText('Cancel');
    //   expect(cancelButton).toBeDefined();
    // });
  
    // it('renders note area', () => {
    //   render(<AddReminder />);
    //   const noteArea = screen.getAllByText('');
    //   expect(noteArea).toBeDefined();
    // });
  });
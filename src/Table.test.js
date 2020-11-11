import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const setup = () => <Table title="Table Title"/>;

describe('Table', () => {
  it('renders without crashing', () => {
    render(setup());
  });

  it("render title", () => {
		render(setup());
		expect(screen.getByText("Table Title")).toBeInTheDocument();
	});
	
	it("have a checkbox in the component", () => {
		render(setup());
		expect(screen.getByRole("checkbox")).toBeInTheDocument();
	});

	it("have a textbox in the component", () => {
		render(setup());
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("have a table in the component", () => {
		render(setup());
		expect(screen.getByRole("table")).toBeInTheDocument();
	});

});
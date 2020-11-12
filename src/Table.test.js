import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';

const productsData = [
  {category: 'Luxury', price: '$49.99', stocked: false, name: 'Football'},
];

const setUp = () => <Table title="Table Title" size="large" tableHead={["Quality", "Quantity"]} products={productsData}/>;

describe('Table', () => {
  it('renders without crashing', () => {
    render(setUp());
  });

	// Title
	it("render title content", () => {
		render(setUp());
		expect(screen.getByRole('heading', { name: 'Table Title' })).toBeInTheDocument();;
	});

	// Checkbox
	it("have a checkbox in the component", () => {
		render(setUp());
		expect(screen.getByRole("checkbox")).toBeInTheDocument();
	});

	it("have a correct checkbox label", () => {
		render(setUp());
		expect(screen.getByLabelText("Only show products in stock")).toBeInTheDocument();
	});

	it("applies size class when provided", () => {
		render(setUp());
		const checkBoxContainer = screen.getByRole("checkbox").closest("span");
		expect(checkBoxContainer?.getAttribute("class")).toContain("large");
	});

	it("initial checkbox state", () => {
		render(setUp());
		expect(screen.getByRole("checkbox")).toHaveProperty("checked", false);
  });

	// Input
	it("have a textbox in the component", () => {
		render(setUp());
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("have a correct placeholder in the input field", () => {
		render(setUp());
		expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
	});

	it("initial input content", () => {
		render(setUp());
		expect(screen.getByDisplayValue('')).toBeInTheDocument();
	})

	// Table
	it("have a table in the component", () => {
		render(setUp());
		expect(screen.getByRole("table")).toBeInTheDocument();
	});

	it("applies new headings when provided", () => {
		render(setUp());
		expect(screen.getByText("Quality")).toBeInTheDocument();
	});

	it("applies new products when provided", () => {
		render(setUp());
		expect(screen.getByText("Luxury")).toBeInTheDocument();
	});

	// CheckBox functionality
	it("change the content when ckeckbox is clicked and not clicked", () => {
		render(setUp());

		expect(screen.getByText(/Football/)).toBeInTheDocument();
		
		fireEvent.click(screen.getByRole('checkbox'));
		expect(screen.queryByText(/Football/)).toBeNull();

		fireEvent.click(screen.getByRole('checkbox'));
		expect(screen.getByText(/Football/)).toBeInTheDocument();
	});

	// Search field functionality
	it("change the content when ckeckbox is clicked and not clicked", () => {
		render(setUp());

		expect(screen.getByText(/Football/)).toBeInTheDocument();
		
		fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
		expect(screen.queryByText(/Football/)).toBeNull();

		fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Football' },
    });
		expect(screen.getByText(/Football/)).toBeInTheDocument();
	});


});
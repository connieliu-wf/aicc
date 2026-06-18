import React, { useState } from 'react';
import { 
  Table, 
  TableHeader, 
  TableRow, 
  TableCell, 
  ColumnDef,
  SortState
} from '@/components/spring-ui/table';
import { Badge } from '@/components/spring-ui/badge';
import { InfoIcon } from '@/icons/InfoIcon';
import { CheckCircleIcon } from '@/icons/CheckCircleIcon';
import { WarningCircleIcon } from '@/icons/WarningCircleIcon';

// Sample data for tables
const userData = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Sam Williams', email: 'sam@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Taylor Smith', email: 'taylor@example.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'Jordan Brown', email: 'jordan@example.com', role: 'User', status: 'Pending' },
  { id: 5, name: 'Morgan Davis', email: 'morgan@example.com', role: 'Viewer', status: 'Active' },
];

// Product data with numbers for showing numeric sorting
const productData = [
  { id: 101, name: 'Laptop Pro', stock: 45, price: 1299, category: 'Electronics' },
  { id: 102, name: 'Desk Chair', stock: 12, price: 249, category: 'Furniture' },
  { id: 103, name: 'Wireless Mouse', stock: 78, price: 39, category: 'Accessories' },
  { id: 104, name: 'Monitor 27"', stock: 32, price: 349, category: 'Electronics' },
  { id: 105, name: 'Keyboard', stock: 53, price: 89, category: 'Accessories' },
];

export function TableExample() {
  // State for basic table
  const [basicSort, setBasicSort] = useState<SortState>({
    column: 'name',
    direction: 'asc'
  });

  // State for advanced table
  const [advancedSort, setAdvancedSort] = useState<SortState>({
    column: 'price',
    direction: 'desc'
  });

  // Function to get badge variant based on status
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Inactive':
      default:
        return 'default';
    }
  };

  // Basic columns
  const basicColumns: ColumnDef[] = [
    { id: 'name', header: 'Name', sortable: true },
    { 
      id: 'email', 
      header: 'Email',
      renderCell: (value) => (
        <TableCell color="secondary">
          {value}
        </TableCell>
      )
    },
    { 
      id: 'role', 
      header: 'Role', 
      sortable: true,
      renderCell: (value) => (
        <TableCell color="secondary">
          {value}
        </TableCell>
      )
    },
    { 
      id: 'status', 
      header: 'Status', 
      sortable: true,
      renderCell: (value) => (
        <Badge 
          variant={getStatusBadgeVariant(value)} 
          size="compact"
        >
          {value}
        </Badge>
      )
    },
  ];

  // Advanced columns with custom rendering
  const advancedColumns: ColumnDef[] = [
    { 
      id: 'name', 
      header: 'Product',
      sortable: true,
      width: '30%'
    },
    { 
      id: 'stock', 
      header: 'Stock',
      sortable: true,
      width: '15%',
      renderCell: (value) => (
        <TableCell color="secondary">
          {value} units
        </TableCell>
      )
    },
    { 
      id: 'price', 
      header: 'Price',
      sortable: true,
      width: '15%',
      renderCell: (value) => (
        <TableCell color="secondary">
          ${value}
        </TableCell>
      )
    },
    { 
      id: 'category', 
      header: 'Category',
      sortable: true,
      width: '20%',
      renderCell: (value) => (
        <TableCell color="secondary">
          {value}
        </TableCell>
      )
    },
    {
      id: 'status',
      header: 'Status',
      width: '20%',
      renderCell: (_, rowData) => (
        <div className="flex items-center space-x-1">
          <TableCell color={rowData.stock < 20 ? 'orange' : 'green'}>
            {rowData.stock < 20 ? 'Low Stock' : 'In Stock'}
          </TableCell>
        </div>
      )
    }
  ];

  // Custom CSS for zebra striping (added to style tag)
  const zebraStripeStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  };

  // Sort function for our sample data
  const sortData = (data: any[], sortState: SortState) => {
    if (!sortState.direction) return [...data];
    
    return [...data].sort((a, b) => {
      if (a[sortState.column] < b[sortState.column]) {
        return sortState.direction === 'asc' ? -1 : 1;
      }
      if (a[sortState.column] > b[sortState.column]) {
        return sortState.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Sort the data based on current sort state
  const sortedUserData = sortData(userData, basicSort);
  const sortedProductData = sortData(productData, advancedSort);

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-medium mb-2">Table</h2>
      <p className="mb-4 text-sm text-[var(--text-secondary)]">Flexible table component for displaying structured data</p>
      
      <div className="p-8 bg-[var(--bg-primary)] border border-[var(--border-default)] rounded-lg space-y-12">
        {/* Basic Table */}
        <div>
          <h3 className="text-md font-medium mb-4">Basic Table</h3>
          <Table>
            <TableHeader 
              columns={basicColumns} 
              sortState={basicSort} 
              onSortChange={setBasicSort} 
            />
            {sortedUserData.map((row, index) => (
              <TableRow 
                key={row.id} 
                columns={basicColumns} 
                data={row} 
              />
            ))}
          </Table>
        </div>

        {/* Table with Zebra Stripes */}
        <div>
          <h3 className="text-md font-medium mb-4">Table with Zebra Stripes</h3>
          <Table zebraStripes>
            <TableHeader 
              columns={basicColumns} 
              sortState={basicSort} 
              onSortChange={setBasicSort} 
            />
            {sortedUserData.map((row, index) => (
              <TableRow 
                key={row.id} 
                columns={basicColumns} 
                data={row} 
                isOdd={index % 2 === 1}
                zebraStripes
                className={index % 2 === 1 ? "custom-zebra-row" : ""}
                style={index % 2 === 1 ? zebraStripeStyle : undefined}
              />
            ))}
          </Table>
        </div>

        {/* Table with Vertical Dividers */}
        <div>
          <h3 className="text-md font-medium mb-4">Table with Vertical Dividers</h3>
          <Table>
            <TableHeader 
              columns={basicColumns} 
              sortState={basicSort} 
              onSortChange={setBasicSort}
              verticalDividers
            />
            {sortedUserData.map((row, index) => (
              <TableRow 
                key={row.id} 
                columns={basicColumns} 
                data={row}
                verticalDividers
              />
            ))}
          </Table>
        </div>

        {/* Advanced Table with Custom Rendering */}
        <div>
          <h3 className="text-md font-medium mb-4">Advanced Table</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">With custom cell rendering, colored text, and both vertical dividers and zebra stripes</p>
          <Table zebraStripes>
            <TableHeader 
              columns={advancedColumns} 
              sortState={advancedSort} 
              onSortChange={setAdvancedSort}
              verticalDividers
            />
            {sortedProductData.map((row, index) => (
              <TableRow 
                key={row.id} 
                columns={advancedColumns} 
                data={row}
                isOdd={index % 2 === 1}
                zebraStripes
                verticalDividers
                style={index % 2 === 1 ? zebraStripeStyle : undefined}
              />
            ))}
          </Table>
        </div>
      </div>
    </section>
  );
} 
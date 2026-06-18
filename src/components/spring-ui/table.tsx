import * as React from "react"
import { cn } from "@/lib/utils"
import { Row } from "./row"
import { ChevronSmallUpIcon } from "@/icons/ChevronSmallUpIcon"
import { ChevronSmallDownIcon } from "@/icons/ChevronSmallDownIcon"

// Table sorting state
export type SortDirection = "asc" | "desc" | null;
export interface SortState {
  column: string;
  direction: SortDirection;
}

// Table component props
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show vertical dividers between columns */
  verticalDividers?: boolean;
  /** Enable zebra striping for alternating rows */
  zebraStripes?: boolean;
  /** Remove outer border and rounded corners */
  noBorder?: boolean;
  /** Children components (TableHeader, TableRow, etc.) */
  children: React.ReactNode;
}

// Column definition for table headers and data alignment
export interface ColumnDef {
  /** Unique column identifier */
  id: string;
  /** Header text */
  header: string;
  /** Column width (e.g., '100px', '20%', etc.) */
  width?: string;
  /** Whether the column is sortable */
  sortable?: boolean;
  /** Optional custom header render function */
  renderHeader?: (column: ColumnDef) => React.ReactNode;
  /** Optional custom cell render function */
  renderCell?: (value: any, rowData: any) => React.ReactNode;
}

const Table = React.forwardRef<HTMLDivElement, TableProps>(
  ({ className, verticalDividers = false, zebraStripes = false, noBorder = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "w-full overflow-hidden",
          !noBorder && "border border-[var(--border-default)] rounded-md",
          className
        )}
        ref={ref}
        {...props}
      >
        <div 
          className={cn(
            "w-full",
            zebraStripes && "divide-y divide-[var(--border-default)]"
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
Table.displayName = "Table"

// TableHeader component props
export interface TableHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Column definitions */
  columns: ColumnDef[];
  /** Current sort state */
  sortState?: SortState;
  /** Callback for sort change */
  onSortChange?: (sortState: SortState) => void;
  /** Show vertical dividers between columns */
  verticalDividers?: boolean;
}

const TableHeader = React.forwardRef<HTMLDivElement, TableHeaderProps>(
  ({ className, columns, sortState, onSortChange, verticalDividers = false, ...props }, ref) => {
    const handleSortClick = (columnId: string) => {
      if (!onSortChange) return;
      
      // Toggle sort direction or set to asc if not the current sort column
      if (sortState?.column === columnId) {
        const nextDirection = sortState.direction === "asc" ? "desc" : 
                            sortState.direction === "desc" ? null : "asc";
        onSortChange({ column: columnId, direction: nextDirection });
      } else {
        onSortChange({ column: columnId, direction: "asc" });
      }
    };

    return (
      <div
        className={cn(
          "flex w-full body-text-bold border-b border-[var(--border-default)] min-h-8",
          className
        )}
        ref={ref}
        {...props}
      >
        {columns.map((column, index) => (
          <div
            key={column.id}
            className={cn(
              "py-2 px-3 flex items-center bg-[var(--bg-secondary)]",
              column.sortable && "cursor-pointer select-none",
              column.width ? "" : "flex-1",
              verticalDividers && index < columns.length - 1 && "border-r border-r-[var(--border-default)]"
            )}
            style={{ width: column.width }}
            onClick={column.sortable ? () => handleSortClick(column.id) : undefined}
          >
            {column.renderHeader ? (
              column.renderHeader(column)
            ) : (
              <div className="flex items-center space-x-1">
                <span>{column.header}</span>
                {column.sortable && sortState?.column === column.id && sortState.direction && (
                  <span className="ml-1 text-[var(--text-secondary)]">
                    {sortState.direction === "asc" ? (
                      <ChevronSmallUpIcon size={14} />
                    ) : (
                      <ChevronSmallDownIcon size={14} />
                    )}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
)
TableHeader.displayName = "TableHeader"

// TableRow component props
export interface TableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Data for this row */
  data?: any;
  /** Column definitions */
  columns: ColumnDef[];
  /** Whether this is an odd-indexed row (for zebra striping) */
  isOdd?: boolean;
  /** Whether to show zebra stripes */
  zebraStripes?: boolean;
  /** Show vertical dividers between cells */
  verticalDividers?: boolean;
}

const TableRow = React.forwardRef<HTMLDivElement, TableRowProps>(
  ({ className, data, columns, isOdd = false, zebraStripes = false, verticalDividers = false, style, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full border-b border-[var(--border-default)] last:border-b-0 min-h-8",
          zebraStripes && isOdd && "bg-[var(--bg-raised)]",
          className
        )}
        ref={ref}
        style={style}
        {...props}
      >
        {columns.map((column, index) => (
          <div
            key={column.id}
            className={cn(
              "py-2 px-3 flex items-center",
              column.width ? "" : "flex-1",
              verticalDividers && index < columns.length - 1 && "border-r border-r-[var(--border-default)]"
            )}
            style={{ width: column.width }}
          >
            {column.renderCell ? column.renderCell(data?.[column.id], data) : data?.[column.id]}
          </div>
        ))}
      </div>
    )
  }
)
TableRow.displayName = "TableRow"

// TableCell component for custom cell rendering
export interface TableCellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color variant for text */
  color?: "default" | "secondary" | "green" | "orange" | "blue";
}

const TableCell = React.forwardRef<HTMLDivElement, TableCellProps>(
  ({ className, color = "default", children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "truncate",
          color === "green" && "text-[var(--text-green)]",
          color === "orange" && "text-[var(--text-orange)]",
          color === "blue" && "text-[var(--text-blue)]",
          color === "secondary" && "text-[var(--text-secondary)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TableCell.displayName = "TableCell"

export { Table, TableHeader, TableRow, TableCell } 
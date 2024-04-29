import React from 'react'
import TableComponent from '../components/shared/TableComponent'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '../components/ui/checkbox'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../components/ui/button'

type Props = {}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    email: "ken99@yahoo.com",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    email: "Abe45@gmail.com",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    email: "Monserrat44@gmail.com",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    email: "Silas22@gmail.com",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    email: "carmella@hotmail.com",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    email: "carmella@hotmail.com",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    email: "carmella@hotmail.com",
  },
]

const columns: ColumnDef<any>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "invoice",
    header: "Invoice",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <span className='flex items-center'>
          Total Amount
          <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} />
        </span>
      )
    },
    cell: ({ row }) => <div>{row.getValue("totalAmount")}</div>,
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
]

const Dashboard = (props: Props) => {
  return (
    <>
      <TableComponent columns={columns} data={invoices} />
    </>

  )
}

export default Dashboard
import React from 'react';
import { useTable } from 'react-table';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>

  )
}

export function DocTable({data}) {
  const columns = React.useMemo(
    () =>[
          {
            Header: 'Title',
            Cell: e => <a className="DocLink" href={e.row.original.link}> {e.row.original.title} </a>
          },
        ],
    []
  )
  return (
    <div className='DocTable'>
      <Table columns={columns} data={data} />
    </div>
  )
}

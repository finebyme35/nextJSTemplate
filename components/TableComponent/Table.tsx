import React, { useMemo, useState } from "react";
import {
  Column,
  useGlobalFilter,
  useTable,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "tabler-icons-react";
import GlobalFilter from "./TableGlobalFilter";
import { Button, PageButton } from "./TableButton";
import { SortDownIcon, SortIcon, SortUpIcon } from "./TableSortIcons";

interface IProps {
  columns: Column<{}>[];
  data: any;
}

function Table({ columns, data }: IProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">
            Tablo Başlık
          </h1>
        </div>
        <div className="mt-4">
          <div className="sm:flex gap-x-2">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column, idx) =>
                column.Filter ? (
                  <div key={idx}>
                    {column.render("Filter")}
                  </div>
                ) : null
              )
            )}
          </div>
          <div className="mt-2 flex flex-col">
            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
                  <table
                    {...getTableProps()}
                    className="min-w-full divide-y divide-gray-200 relative"
                  >
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                          {headerGroup.headers.map((column, indexses) => (
                            <th
                            scope="col"
                            className=" sticky top-0  group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            key={indexses}
                          >
                            <div className="flex items-center justify-between">
                              {column.render('Header')}
                              {/* Add a sort direction indicator */}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                    : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                  : (
                                    <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                  )}
                              </span>
                            </div>
                          </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      {...getTableBodyProps()}
                      className="bg-white divide-y divide-gray-200"
                    >
                      <>
                        {page.map((row, i) => {
                          // replace row with page
                          prepareRow(row);
                          return (
                            <tr {...row.getRowProps()} key={i}>
                              {row.cells.map((cell, indexs) => {
                                return (
                                  <td
                                  {...cell.getCellProps()}
                                  className="px-6 py-4 whitespace-nowrap"
                                  role="cell"
                                  key={indexs}
                                >
                                  {cell.column.Cell?.valueOf() === "defaultRenderer" ? (
                                    <div className="text-sm text-gray-500">{cell.render("Cell")}</div>
                                  ) : (
                                    cell.render("Cell")
                                  )}
                                </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
              <Button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </Button>
              <Button onClick={() => nextPage()} disabled={!canNextPage}>
                Next
              </Button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="flex gap-x-2 items-center align-middle">
                <span className="text-sm text-gray-700">
                  Sayfa{" "}
                  <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
                  <span className="font-medium">{pageOptions.length}</span>
                </span>
                <label>
                  <span className="sr-only">Sayfa Başına</span>
                  <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={state.pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[5, 10, 20].map((pageSize, indx) => (
                      <option key={indx} value={pageSize}>
                        Göster {pageSize}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <nav
                  className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <PageButton
                    className="rounded-l-md"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    <span className="sr-only">First</span>
                    <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                  <PageButton
                    className="rounded-r-md"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    <span className="sr-only">Last</span>
                    <ChevronsRight className="h-5 w-5" aria-hidden="true" />
                  </PageButton>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Table;

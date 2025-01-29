import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { User, UserPlus, Search, Filter } from 'lucide-react';
import { Button } from '../../components/Button';
import { supabase } from '../../lib/supabase';

interface UserData {
  id: string;
  email: string;
  created_at: string;
  last_sign_in: string;
  status: 'active' | 'inactive' | 'suspended';
  role: string;
}

const columnHelper = createColumnHelper<UserData>();

const columns = [
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => (
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-gray-400" />
        {info.getValue()}
      </div>
    ),
  }),
  columnHelper.accessor('created_at', {
    header: 'Joined',
    cell: info => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor('last_sign_in', {
    header: 'Last Active',
    cell: info => info.getValue() ? new Date(info.getValue()).toLocaleDateString() : 'Never',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        info.getValue() === 'active' ? 'bg-green-100 text-green-800' :
        info.getValue() === 'inactive' ? 'bg-gray-100 text-gray-800' :
        'bg-red-100 text-red-800'
      }`}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: info => (
      <span className="text-sm text-gray-600">
        {info.getValue()}
      </span>
    ),
  }),
];

export function Users() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users', searchQuery],
    queryFn: async () => {
      let query = supabase
        .from('users')
        .select('*');
        
      if (searchQuery) {
        query = query.ilike('email', `%${searchQuery}%`);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as UserData[];
    },
  });

  const table = useReactTable({
    data: users,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        <Button className="flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add User
        </Button>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
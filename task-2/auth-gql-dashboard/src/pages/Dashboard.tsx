import { Table } from "../components/ui/Table";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-600">
        Phase 0 placeholder. Data fetching + auth guard comes after API verification.
      </p>

      <div className="mt-6">
        <Table>
          <thead>
            <tr>
              {["Name", "Email", "Role", "Actions"].map((h) => (
                <th
                  key={h}
                  className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-left font-medium text-slate-700"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-slate-200 px-3 py-3 text-slate-500" colSpan={4}>
                Waiting for Phase 1 schema discovery to render real rows.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

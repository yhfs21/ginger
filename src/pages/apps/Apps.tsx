import { Outlet } from "react-router-dom";

export function Apps() {
  return (
    <div>
      <h2>Apps</h2>
      <a href="/apps/visualife">Visualife</a>

      <Outlet />
    </div>
  )
}

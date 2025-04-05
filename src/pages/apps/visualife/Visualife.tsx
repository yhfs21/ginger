import { Outlet } from "react-router-dom";

export function Visualife() {
  return (
    <div>
      <h3>Visualife</h3>
      <a href="/apps/visualife/privacy-policy">プライバシーポリシー</a>
      <br />
      <a href="/apps/visualife/terms-of-service">利用規約</a>
      <br />
      <Outlet />
    </div>
  )
}

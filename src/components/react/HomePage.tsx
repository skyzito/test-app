import { applyVueInReact } from "veaury";
import UserTableVue from "../vue/UserTable";

const UserTable = applyVueInReact(UserTableVue as any);

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Home Page</h2>
      <p>This table below is rendered by a Vue 3 component inside React:</p>
      <UserTable />
    </div>
  );
} 
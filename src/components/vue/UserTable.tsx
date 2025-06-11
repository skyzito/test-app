/** @jsxImportSource vue */
import { defineComponent, ref, computed } from 'vue';
import '../../styles/UserTable.css';
import UserAccordion from './UserAccordion';

const usersData = [
  { name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', phone: '555-1234' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', phone: '555-2345' },
  { name: 'Carol White', email: 'carol@example.com', role: 'User', phone: '555-3456' },
  { name: 'David Brown', email: 'david@example.com', role: 'Manager', phone: '555-4567' },
  { name: 'Eve Black', email: 'eve@example.com', role: 'User', phone: '555-5678' },
  { name: 'Frank Green', email: 'frank@example.com', role: 'Admin', phone: '555-6789' },
  { name: 'Grace Lee', email: 'grace@example.com', role: 'User', phone: '555-7890' },
  { name: 'Henry King', email: 'henry@example.com', role: 'User', phone: '555-8901' },
  { name: 'Ivy Scott', email: 'ivy@example.com', role: 'Manager', phone: '555-9012' },
  { name: 'Jack Turner', email: 'jack@example.com', role: 'User', phone: '555-0123' },
  { name: 'Karen Young', email: 'karen@example.com', role: 'User', phone: '555-1122' },
  { name: 'Leo Walker', email: 'leo@example.com', role: 'Admin', phone: '555-2233' },
  { name: 'Mona Hall', email: 'mona@example.com', role: 'User', phone: '555-3344' },
  { name: 'Nina Adams', email: 'nina@example.com', role: 'User', phone: '555-4455' },
  { name: 'Oscar Perez', email: 'oscar@example.com', role: 'Manager', phone: '555-5566' },
];

function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 700;
}

export default defineComponent({
  name: 'UserTable',
  setup() {
    const users = ref(usersData);
    const page = ref(1);
    const perPage = 5;
    const totalPages = computed(() => Math.ceil(users.value.length / perPage));
    const paginatedUsers = computed(() => {
      const start = (page.value - 1) * perPage;
      return users.value.slice(start, start + perPage);
    });
    const openIndexes = ref<number[]>([]);
    const mobile = ref(isMobile());
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        mobile.value = isMobile();
      });
    }
    function toggleAccordion(idx: number) {
      if (openIndexes.value.includes(idx)) {
        openIndexes.value = openIndexes.value.filter(i => i !== idx);
      } else {
        openIndexes.value.push(idx);
      }
    }
    return () => (
      <div class="user-table-container" id="main-content" role="main">
        {mobile.value ? (
          <div class="user-accordion-list">
            {paginatedUsers.value.map((user, idx) => {
              const globalIdx = (page.value - 1) * perPage + idx;
              const open = openIndexes.value.includes(globalIdx);
              return (
                <UserAccordion
                  user={user}
                  open={open}
                  onToggle={() => toggleAccordion(globalIdx)}
                  key={user.email}
                />
              );
            })}
          </div>
        ) : (
          <table class="user-table" aria-label="User list">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.value.map(user => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div class="pagination">
          <button disabled={page.value === 1} aria-label="Previous page" onClick={() => page.value--}>Prev</button>
          <span>Page {page.value} of {totalPages.value}</span>
          <button disabled={page.value === totalPages.value} aria-label="Next page" onClick={() => page.value++}>Next</button>
        </div>
      </div>
    );
  },
}); 
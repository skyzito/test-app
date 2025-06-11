/** @jsxImportSource vue */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserAccordion',
  props: {
    user: { type: Object, required: true },
    open: { type: Boolean, required: true },
    onToggle: { type: Function, required: true },
  },
  setup(props) {
    const detailsId = `details-${props.user.email.replace(/[^a-zA-Z0-9]/g, '')}`;
    return () => (
      <div class={`user-accordion-item${props.open ? ' open' : ''}`} key={props.user.email}>
        <button
          class="user-accordion-title"
          aria-expanded={props.open}
          aria-controls={detailsId}
          onClick={props.onToggle}
          type="button"
        >
          <span>{props.user.name}</span>
          <span class={`arrow${props.open ? ' open' : ''}`}>▼</span>
        </button>
        {props.open && (
          <div class="user-accordion-details" id={detailsId}>
            <div><b>Email:</b> {props.user.email}</div>
            <div><b>Role:</b> {props.user.role}</div>
            <div><b>Phone:</b> {props.user.phone}</div>
          </div>
        )}
      </div>
    );
  },
}); 
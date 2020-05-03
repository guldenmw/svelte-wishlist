import { writable } from 'svelte/store';

const handleSideDrawer = () => {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    toggle: () => update(visible => !visible),
    set: (value) => set(value),
    close: () => set(false)
  };
}

export const isSideDrawerOpen = handleSideDrawer();

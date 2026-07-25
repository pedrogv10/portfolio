export type SelectedWorkItem = {
  id: string;
  name: string;
  niche: string;
  stack: string[];
  href: string;
  thumbnail: string;
  /** When true (or when the array is empty), Selected Work is not rendered. */
  placeholder?: boolean;
};

/**
 * Fill real entries (omit `placeholder`, or set it to false) to publish the section.
 * Scaffold kept below as placeholders so the shape is ready.
 */
export const selectedWork: SelectedWorkItem[] = [
  {
    id: "todo-1",
    placeholder: true,
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-1.svg",
  },
  {
    id: "todo-2",
    placeholder: true,
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-2.svg",
  },
  {
    id: "todo-3",
    placeholder: true,
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-3.svg",
  },
  {
    id: "todo-4",
    placeholder: true,
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-4.svg",
  },
];

export function getPublishedSelectedWork(): SelectedWorkItem[] {
  return selectedWork.filter((item) => !item.placeholder);
}

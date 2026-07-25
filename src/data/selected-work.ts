export type SelectedWorkItem = {
  id: string;
  /** TODO: replace with real client/project name */
  name: string;
  /** TODO: replace with real niche */
  niche: string;
  stack: string[];
  /** TODO: replace with real external URL */
  href: string;
  /** TODO: replace with real thumbnail path under /public */
  thumbnail: string;
};

/** Placeholder entries — fill before publishing Selected Work. */
export const selectedWork: SelectedWorkItem[] = [
  {
    id: "todo-1",
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-1.svg",
  },
  {
    id: "todo-2",
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-2.svg",
  },
  {
    id: "todo-3",
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-3.svg",
  },
  {
    id: "todo-4",
    name: "TODO — Client / project name",
    niche: "TODO — Niche",
    stack: ["TODO"],
    href: "https://example.com/TODO",
    thumbnail: "/projects/selected/todo-4.svg",
  },
];

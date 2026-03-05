/**
 * Portfolio section order and labels.
 * Single source of truth for nav and scroll spy.
 */
export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work-experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export interface Publication {
  title: string;
  authors: string;
  year: number | string;
  venue: string;
  // unpublished reports have no link
  link?: string | null;
  abstract?: string | null;
  featured: boolean;
}

export interface PublicationsType {
  authorName: string;
  items: Publication[];
}

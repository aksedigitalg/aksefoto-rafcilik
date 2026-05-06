/**
 * Supabase database types.
 *
 * BASLAGIC ICIN MANUEL: supabase/migrations/20260506190001_initial_schema.sql
 * dosyasini birebir yansitir. Sema degisiklikleri sonrasi:
 *   npx supabase gen types typescript --project-id <id> --schema public > lib/supabase/types.gen.ts
 * komutu ile otomatik tip uretebilir, sonra bu dosyayi guncelleyebilirsiniz.
 *
 * NOT: Insert tipleri INTERFACE olarak tanimli (intersection yerine) cunku TS
 * Omit & Partial<Pick> kombinasyonu bazi durumlarda 'never' dondurup Supabase
 * generic type lookup'larini bozuyor.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type DistrictSlug = "gebze" | "darica" | "cayirova" | "dilovasi";

export interface Database {
  public: {
    Tables: {
      services: {
        Row: ServiceRow;
        Insert: ServiceInsert;
        Update: Partial<ServiceInsert>;
        Relationships: [];
      };
      service_packages: {
        Row: ServicePackageRow;
        Insert: ServicePackageInsert;
        Update: Partial<ServicePackageInsert>;
        Relationships: [];
      };
      service_faqs: {
        Row: ServiceFaqRow;
        Insert: ServiceFaqInsert;
        Update: Partial<ServiceFaqInsert>;
        Relationships: [];
      };
      neighborhoods: {
        Row: NeighborhoodRow;
        Insert: NeighborhoodInsert;
        Update: Partial<NeighborhoodInsert>;
        Relationships: [];
      };
      photoshoot_locations: {
        Row: PhotoshootLocationRow;
        Insert: PhotoshootLocationInsert;
        Update: Partial<PhotoshootLocationInsert>;
        Relationships: [];
      };
      industrial_zones: {
        Row: IndustrialZoneRow;
        Insert: IndustrialZoneInsert;
        Update: Partial<IndustrialZoneInsert>;
        Relationships: [];
      };
      industrial_zone_faqs: {
        Row: IndustrialZoneFaqRow;
        Insert: IndustrialZoneFaqInsert;
        Update: Partial<IndustrialZoneFaqInsert>;
        Relationships: [];
      };
      blog_posts: {
        Row: BlogPostRow;
        Insert: BlogPostInsert;
        Update: Partial<BlogPostInsert>;
        Relationships: [];
      };
      blog_post_faqs: {
        Row: BlogPostFaqRow;
        Insert: BlogPostFaqInsert;
        Update: Partial<BlogPostFaqInsert>;
        Relationships: [];
      };
      testimonials: {
        Row: TestimonialRow;
        Insert: TestimonialInsert;
        Update: Partial<TestimonialInsert>;
        Relationships: [];
      };
      gallery_categories: {
        Row: GalleryCategoryRow;
        Insert: GalleryCategoryInsert;
        Update: Partial<GalleryCategoryInsert>;
        Relationships: [];
      };
      gallery_items: {
        Row: GalleryItemRow;
        Insert: GalleryItemInsert;
        Update: Partial<GalleryItemInsert>;
        Relationships: [];
      };
      admin_profiles: {
        Row: AdminProfileRow;
        Insert: AdminProfileInsert;
        Update: Partial<AdminProfileInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export interface ServiceRow {
  slug: string;
  name: string;
  category: string;
  primary_keyword: string;
  secondary_keywords: string[];
  short_description: string;
  long_description: string;
  features: string[];
  related_services: string[];
  gallery_category: string;
  icon: string | null;
  meta_title: string | null;
  meta_description: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
export interface ServiceInsert {
  slug: string;
  name: string;
  category: string;
  primary_keyword: string;
  secondary_keywords?: string[];
  short_description: string;
  long_description: string;
  features?: string[];
  related_services?: string[];
  gallery_category: string;
  icon?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  sort_order?: number;
  is_published?: boolean;
}

export interface ServicePackageRow {
  id: string;
  service_slug: string;
  name: string;
  price_range: string;
  description: string | null;
  includes: string[];
  popular: boolean;
  sort_order: number;
  created_at: string;
}
export interface ServicePackageInsert {
  id?: string;
  service_slug: string;
  name: string;
  price_range: string;
  description?: string | null;
  includes?: string[];
  popular?: boolean;
  sort_order?: number;
}

export interface ServiceFaqRow {
  id: string;
  service_slug: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
}
export interface ServiceFaqInsert {
  id?: string;
  service_slug: string;
  question: string;
  answer: string;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// NEIGHBORHOODS
// ---------------------------------------------------------------------------
export interface NeighborhoodRow {
  slug: string;
  name: string;
  district: DistrictSlug;
  postal_code: string | null;
  population: number | null;
  description: string;
  landmarks: string[];
  nearby_neighborhoods: string[];
  popular_services: string[];
  meta_title: string | null;
  meta_description: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
export interface NeighborhoodInsert {
  slug: string;
  name: string;
  district: DistrictSlug;
  postal_code?: string | null;
  population?: number | null;
  description: string;
  landmarks?: string[];
  nearby_neighborhoods?: string[];
  popular_services?: string[];
  meta_title?: string | null;
  meta_description?: string | null;
  sort_order?: number;
  is_published?: boolean;
}

export interface PhotoshootLocationRow {
  id: string;
  neighborhood_slug: string;
  name: string;
  description: string;
  best_time_of_day: string | null;
  latitude: number | null;
  longitude: number | null;
  sort_order: number;
  created_at: string;
}
export interface PhotoshootLocationInsert {
  id?: string;
  neighborhood_slug: string;
  name: string;
  description: string;
  best_time_of_day?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// INDUSTRIAL ZONES
// ---------------------------------------------------------------------------
export interface IndustrialZoneRow {
  slug: string;
  name: string;
  full_name: string;
  district: DistrictSlug;
  description: string;
  services_offered: string[];
  notable_tenants_hint: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
export interface IndustrialZoneInsert {
  slug: string;
  name: string;
  full_name: string;
  district: DistrictSlug;
  description: string;
  services_offered?: string[];
  notable_tenants_hint?: string | null;
  sort_order?: number;
  is_published?: boolean;
}

export interface IndustrialZoneFaqRow {
  id: string;
  zone_slug: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
}
export interface IndustrialZoneFaqInsert {
  id?: string;
  zone_slug: string;
  question: string;
  answer: string;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// BLOG
// ---------------------------------------------------------------------------
export interface BlogPostRow {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  published_at: string;
  updated_at: string;
  cover_image: string;
  reading_time: number;
  related_services: string[];
  related_districts: string[];
  is_published: boolean;
  created_at: string;
}
export interface BlogPostInsert {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author?: string;
  published_at: string;
  cover_image: string;
  reading_time?: number;
  related_services?: string[];
  related_districts?: string[];
  is_published?: boolean;
}

export interface BlogPostFaqRow {
  id: string;
  post_slug: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
}
export interface BlogPostFaqInsert {
  id?: string;
  post_slug: string;
  question: string;
  answer: string;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
export interface TestimonialRow {
  id: string;
  name: string;
  service: string;
  service_slug: string | null;
  district: DistrictSlug | null;
  neighborhood: string | null;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
  avatar: string | null;
  approved: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}
export interface TestimonialInsert {
  id?: string;
  name: string;
  service: string;
  service_slug?: string | null;
  district?: DistrictSlug | null;
  neighborhood?: string | null;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
  avatar?: string | null;
  approved?: boolean;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// GALLERY
// ---------------------------------------------------------------------------
export interface GalleryCategoryRow {
  slug: string;
  name: string;
  description: string | null;
  hero_image: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}
export interface GalleryCategoryInsert {
  slug: string;
  name: string;
  description?: string | null;
  hero_image?: string | null;
  sort_order?: number;
  is_published?: boolean;
}

export interface GalleryItemRow {
  id: string;
  category_slug: string;
  src: string;
  alt: string;
  title: string | null;
  width: number;
  height: number;
  blur_data_url: string | null;
  sort_order: number;
  created_at: string;
}
export interface GalleryItemInsert {
  id?: string;
  category_slug: string;
  src: string;
  alt: string;
  title?: string | null;
  width?: number;
  height?: number;
  blur_data_url?: string | null;
  sort_order?: number;
}

// ---------------------------------------------------------------------------
// ADMIN
// ---------------------------------------------------------------------------
export interface AdminProfileRow {
  user_id: string;
  full_name: string | null;
  role: "admin" | "editor" | "viewer";
  created_at: string;
  updated_at: string;
}
export interface AdminProfileInsert {
  user_id: string;
  full_name?: string | null;
  role?: "admin" | "editor" | "viewer";
}

// Hand-written for the five user-owned tables; regenerate with
// `supabase gen types typescript --remote=<project-ref>` once a PAT is available.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ThemePreference = "light" | "dark" | "system";
export type ProgressContentType = "lesson" | "reading" | "quiz" | "case";
export type RoundContentType = "quiz" | "case";

export type Database = {
  public: {
    Tables: {
      user_achievements: {
        Row: {
          user_id: string;
          achievement_id: string;
          unlocked_at: string;
          seen_at: string | null;
        };
        Insert: {
          user_id: string;
          achievement_id: string;
          unlocked_at?: string;
          seen_at?: string | null;
        };
        Update: {
          user_id?: string;
          achievement_id?: string;
          unlocked_at?: string;
          seen_at?: string | null;
        };
        Relationships: [];
      };
      user_preferences: {
        Row: {
          user_id: string;
          theme: ThemePreference;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          theme?: ThemePreference;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          theme?: ThemePreference;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_progress: {
        Row: {
          user_id: string;
          content_type: ProgressContentType;
          content_key: string;
          completed_at: string;
        };
        Insert: {
          user_id: string;
          content_type: ProgressContentType;
          content_key: string;
          completed_at?: string;
        };
        Update: {
          user_id?: string;
          content_type?: ProgressContentType;
          content_key?: string;
          completed_at?: string;
        };
        Relationships: [];
      };
      user_study_days: {
        Row: {
          user_id: string;
          day: string;
        };
        Insert: {
          user_id: string;
          day: string;
        };
        Update: {
          user_id?: string;
          day?: string;
        };
        Relationships: [];
      };
      user_notes: {
        Row: {
          id: string;
          user_id: string;
          text: string;
          source_title: string | null;
          source_href: string | null;
          anchor_block: number | null;
          anchor_line: number | null;
          anchor_hash: string | null;
          anchor_quote: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          text: string;
          source_title?: string | null;
          source_href?: string | null;
          anchor_block?: number | null;
          anchor_line?: number | null;
          anchor_hash?: string | null;
          anchor_quote?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          text?: string;
          source_title?: string | null;
          source_href?: string | null;
          anchor_block?: number | null;
          anchor_line?: number | null;
          anchor_hash?: string | null;
          anchor_quote?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_quiz_results: {
        Row: {
          id: string;
          user_id: string;
          content_type: RoundContentType;
          content_key: string;
          correct: number;
          total: number;
          stars: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          content_type: RoundContentType;
          content_key: string;
          correct: number;
          total: number;
          stars: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          content_type?: RoundContentType;
          content_key?: string;
          correct?: number;
          total?: number;
          stars?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

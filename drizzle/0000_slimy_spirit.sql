CREATE SCHEMA "my_schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."user_role" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "my_schema"."user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"role_id" integer,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);

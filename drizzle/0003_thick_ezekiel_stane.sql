CREATE TABLE IF NOT EXISTS "UserProfiles" (
	"Kinde_ID" text PRIMARY KEY NOT NULL,
	"First_Name" text,
	"Last_Name" text,
	"Email" text,
	"Course_Major" text,
	"Interests" text[],
	"Profile_Photo_URL" text,
	"bookmarked_notes" text[]
);

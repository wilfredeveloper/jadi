import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  bookmarkedNotes: text("bookmarked_notes").array(),
});

export const UserProfiles = pgTable("UserProfiles", {
  kindeID: text("Kinde_ID").primaryKey(),
  firstName: text("First_Name"),
  lastName: text("Last_Name"),
  email: text("Email"),
  coursemajor: text("Course_Major"),
  interests: text("Interests").array(),
  profilePhotoURL: text("Profile_Photo_URL"),
  bookmarkedNotes: text("Bookmarked_Notes").array(),
});

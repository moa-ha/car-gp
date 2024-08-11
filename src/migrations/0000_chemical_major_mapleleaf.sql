CREATE TABLE `consumables` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`replaced` text,
	`due` text,
	`km` integer,
	`user` text NOT NULL,
	FOREIGN KEY (`user`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `maintenance` (
	`user` text PRIMARY KEY NOT NULL,
	`wof` text,
	`wofDue` text,
	`rego` text,
	`regoDue` text,
	`averageKm` integer,
	FOREIGN KEY (`user`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);

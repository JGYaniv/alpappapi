CREATE TABLE "public"."Reader" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  address VARCHAR(255)
);

CREATE TABLE "public"."Book" (
  isbn VARCHAR(15) PRIMARY KEY NOT NULL,
  title VARCHAR(255),
  author VARCHAR(255)
);

CREATE TABLE "public"."Checkout" (
  id SERIAL PRIMARY KEY NOT NULL,
  isbn VARCHAR(15) NOT NULL,
  "readerId" INTEGER NOT NULL,
  "startDate" TIMESTAMP NOT NULL DEFAULT now(),
  "returnDate" TIMESTAMP,
  FOREIGN KEY (isbn) REFERENCES "public"."Book",
  FOREIGN KEY ("readerId") REFERENCES "public"."Reader"
);
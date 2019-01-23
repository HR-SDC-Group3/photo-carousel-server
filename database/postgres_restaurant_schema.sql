
CREATE TABLE restaurants (
 ID integer NOT NULL PRIMARY KEY,
 name text NOT NULL,
 phototags jsonb NOT NULL
);

\COPY restaurants FROM './generated_data/seed_data17.csv' DELIMITERS '|' CSV QUOTE '''';

//try without escaping quotes
\COPY restaurants FROM './generated_data/seed_data1.csv' DELIMITERS '|' CSV QUOTE '''';

CREATE TABLE test (
 ID integer NOT NULL PRIMARY KEY,
 name text NOT NULL,
 phototags jsonb NOT NULL
);

\COPY test FROM './generated_data/seed_data17.csv' DELIMITERS '|' CSV QUOTE '''';

CREATE TABLE restaurants_perf (
 ID integer NOT NULL PRIMARY KEY,
 name text NOT NULL,
 phototags json NOT NULL
);

\COPY restaurants_perf FROM './postgres_data/postgres_data1.csv' DELIMITERS '|' CSV;
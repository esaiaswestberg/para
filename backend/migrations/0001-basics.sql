-- Create Budget Group Table
CREATE TABLE `budget_group` (
  `id` INTEGER PRIMARY KEY,
  `name` TEXT
);

-- Create Budget Table
CREATE TABLE `budget` (
  `id` INTEGER PRIMARY KEY,
  `name` TEXT,
--
  `budget_group_id` INTEGER,
  FOREIGN KEY (`budget_group_id`) REFERENCES `budget_group`(`id`)
);

-- Create Transaction Table
CREATE TABLE `transaction` (
  `id` INTEGER PRIMARY KEY,
  `type` INTEGER,
  `amount` INTEGER,
  `shop` TEXT,
  `date` TEXT,
--
  `budget_id` INTEGER,
  FOREIGN KEY (`budget_id`) REFERENCES `budget`(`id`)
);
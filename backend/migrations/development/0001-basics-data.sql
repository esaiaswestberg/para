-- Insert data into budget_group table
INSERT INTO budget_group (name) VALUES
('Förbrukningsvaror'),
('Fasta kostnader'),
('Övrigt'),
('Engångsutgifter'),
('Nöje');

-- Insert data into budget table
INSERT INTO budget (name, budget_group_id) VALUES
('Mat', 1),
('Förbrukningsvaror', 1),
--
('Hyra', 2),
('Hemförsäkring', 2),
('Bredband', 2),
('Lånsparande', 2),
('Mobilabonnemang', 2),
('Dibz', 2),
--
('Kollekt', 3),
('Övrigt', 3),
--
('Bussbiljetter', 4),
('Presenter', 4),
('Piano', 4),
('Websupport', 4),
('Cronelius.se', 4),
('Low-Stack.tech', 4),
('Westbergs.se', 4),
('EloquentiaStudios.com', 4),
('Körkort', 4),
('Övrigt', 4),
--
('Tillsammans', 5),
('Esaias', 5),
('Filippa', 5);

-- Insert data into transaction table
INSERT INTO "transaction" (type, amount, shop, date, budget_id) VALUES
(1, 50, 'ICA Supermarket Falköping', '2024-01-10', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-10', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-12', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-12', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-12', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-15', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-15', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-17', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-18', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-18', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-18', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-18', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-22', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-23', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-24', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-25', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-26', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-27', 1),
(1, 50, 'ICA Supermarket Falköping', '2024-01-28', 1),
(1, 100, 'ICA Supermarket Falköping', '2024-01-29', 1),
(1, 48758, 'ICA Supermarket Falköping', '2024-01-30', 1),
--
(1, 1000, 'ICA Supermarket Falköping', '2024-01-10', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-11', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-12', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-13', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-14', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-15', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-16', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-17', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-18', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-19', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-20', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-21', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-22', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-23', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-24', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-25', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-26', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-27', 2),
(1, 1000, 'ICA Supermarket Falköping', '2024-01-28', 2);
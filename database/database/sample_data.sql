INSERT INTO Users (name, email, password) VALUES
('Aditya', 'adi@gmail.com', '123'),
('Rahul', 'rahul@gmail.com', '123');

INSERT INTO Categories (name, user_id) VALUES
('Study', 1),
('Work', 1),
('Personal', 2);

INSERT INTO Tasks (user_id, category_id, title, status, priority, deadline) VALUES
(1, 1, 'Complete DB project', 'Pending', 'High', '2026-04-20 18:00:00'),
(1, 2, 'Prepare presentation', 'In Progress', 'Medium', '2026-04-18 10:00:00'),
(2, 3, 'Gym workout', 'Pending', 'Low', '2026-04-15 07:00:00');

INSERT INTO Reminders (task_id, reminder_time) VALUES
(1, '2026-04-20 17:00:00'),
(2, '2026-04-18 09:00:00');

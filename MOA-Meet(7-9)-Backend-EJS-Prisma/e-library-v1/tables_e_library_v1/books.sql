/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `publisher` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `publishedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `books_userId_fkey` (`userId`),
  CONSTRAINT `books_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `books` (`id`, `userId`, `name`, `description`, `price`, `publisher`, `publishedAt`, `updatedAt`) VALUES
(5, 1, 'Gwendolyn Rich', 'Quis temporibus maio', 1690, 'In anim tempore max', '2023-08-29 23:17:43.153', '2023-08-29 23:17:43.153');
INSERT INTO `books` (`id`, `userId`, `name`, `description`, `price`, `publisher`, `publishedAt`, `updatedAt`) VALUES
(8, 1, 'Kamal Guthrie', 'Et elit dolor delen', 4440, 'Eu quo amet numquam', '2023-08-30 10:21:25.163', '2023-08-30 10:21:25.163');
INSERT INTO `books` (`id`, `userId`, `name`, `description`, `price`, `publisher`, `publishedAt`, `updatedAt`) VALUES
(9, 2, 'Hujan Tanda Tanya', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem doloribus pariatur inventore ipsum velit?', 55000, 'Meidtama Digital', '2023-08-30 14:07:54.930', '2023-08-30 14:50:04.874');
INSERT INTO `books` (`id`, `userId`, `name`, `description`, `price`, `publisher`, `publishedAt`, `updatedAt`) VALUES
(10, 2, 'Sendiri dalam kegelapan', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem doloribus pariatur inventore ipsum velit?', 35000, 'Axias Inc.', '2023-08-30 14:22:04.468', '2023-08-30 14:31:55.669'),
(11, 2, 'Kisah Kamu dan Aku', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem doloribus pariatur inventore ipsum velit?', 55000, 'Puber Inc.', '2023-08-30 14:22:28.735', '2023-08-30 14:25:43.844'),
(12, 2, 'Musim Semi Sakura di Jepang', 'Loorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem doloribus pariatur inventore ipsum velit?', 65000, 'Tokyo Inc', '2023-08-30 14:54:16.293', '2023-08-30 14:54:32.535'),
(15, 4, 'Bumi Misterius.', 'Loerem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem doloribus pariatur inventore ipsum velit?', 75000, 'Intisari Inc.', '2023-08-30 15:09:13.775', '2023-08-30 15:09:42.493');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
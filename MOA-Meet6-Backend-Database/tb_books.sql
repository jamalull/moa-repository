/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `tb_books` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `published_at` date DEFAULT NULL,
  `publisher` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `id_2` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `tb_books` (`id`, `name`, `author`, `description`, `price`, `published_at`, `publisher`) VALUES
(1, 'Hujan Tanda Tanya', 'M.Benjamin S', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 25000, NULL, 'Sinar Digital Asia');
INSERT INTO `tb_books` (`id`, `name`, `author`, `description`, `price`, `published_at`, `publisher`) VALUES
(2, 'Gunung Misteri', 'Bojan Hadi', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 55000, NULL, 'Syntaxia Inc');
INSERT INTO `tb_books` (`id`, `name`, `author`, `description`, `price`, `published_at`, `publisher`) VALUES
(3, 'Hidup Sendirian', 'Prabu Hamed', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 45000, NULL, 'Sorvelia Inc');
INSERT INTO `tb_books` (`id`, `name`, `author`, `description`, `price`, `published_at`, `publisher`) VALUES
(4, 'Bertahan Dalam Kegelapan', 'Sarah Perve', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 35000, NULL, 'Hamusha Inc'),
(5, 'Dibalik Awan Putih', 'Sojan H', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 25000, NULL, 'Bobo Inc'),
(6, 'Dunia Hitam dan Putih', 'Pricila S', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates optio reprehenderit porro, quis dolore perferendis autem nihil ab quibusdam!', 65000, NULL, 'Kivaxia Inc'),
(7, 'Lucian Mccall', 'Praesentium laudanti', 'Maxime voluptatem ad', 638, NULL, 'Aliqua Perferendis '),
(8, 'Tamara Buckner', 'Doloribus duis omnis', 'Voluptate magni et a', 604, NULL, 'Velit delectus temp'),
(9, 'Astra Middleton', 'Beatae soluta dignis', 'Ullamco magna aut vo', 6, '2023-08-26', 'Impedit officia dic');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
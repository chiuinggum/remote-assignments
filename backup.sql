-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: database-1.c7fz0dbnsepn.ap-southeast-2.rds.amazonaws.com    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_email_constraint` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'User1','user1@appworks.com','Test_123','0000-00-00 00:00:00'),(2,'User2','user2@appworks.com','Test_123','0000-00-00 00:00:00'),(3,'User3','user3@appworks.com','Test_123','2023-10-06 20:56:01'),(4,'User4','user4@appworks.com','Test_123','2023-10-06 13:34:16'),(5,'User5','user5@appworks.com','Test_123','2023-10-06 13:34:58'),(6,'User6','user6@appworks.com','Test_123','2023-10-06 13:37:26'),(7,'User7','user7@appworks.com','Test_123','2023-10-06 13:43:18'),(8,'User8','user8@appworks.com','Test_123','2023-10-06 13:46:51'),(10,'User9','user9@appworks.com','Test_123','2023-10-07 01:48:10'),(11,'User10','user10@appworks.com','Test_123','2023-10-07 01:52:49'),(12,'User12','user12@appworks.com','Test_123','2023-10-07 02:01:34'),(13,'User13','user13@appworks.com','Test_123','2023-10-07 02:03:15'),(15,'User14','user14@appworks.com','Test_123','2023-10-07 02:14:12'),(16,'User16','user16@appworks.com','Test_123','2023-10-07 03:09:27'),(18,'User17','user17@appworks.com','Test_123','2023-10-07 03:10:59'),(19,'User18','user18@appworks.com','Test_123','2023-10-07 03:13:56'),(20,'User19','user19@appworks.com','Test_123','2023-10-07 03:18:56'),(21,'User21','user21@appworks.com','Test_123','2023-10-07 03:53:48'),(22,'User22','user22@appworks.com','Test_123','2023-10-07 04:39:21'),(23,'User23','user23@appworks.com','Test_123','2023-10-07 05:20:54'),(24,'User24','user24@appworks.com','Test_123','2023-10-07 05:29:13');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-07 16:29:50

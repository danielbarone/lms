-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	8.0.21

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

--
-- Table structure for table `tbl_author`
--

DROP TABLE IF EXISTS `tbl_author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_author` (
  `authorId` int NOT NULL AUTO_INCREMENT,
  `authorName` varchar(45) NOT NULL,
  PRIMARY KEY (`authorId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_author`
--

LOCK TABLES `tbl_author` WRITE;
/*!40000 ALTER TABLE `tbl_author` DISABLE KEYS */;
INSERT INTO `tbl_author` VALUES (1,'Christopher Hitchens'),(2,'Sam Harris'),(3,'Richard Dawkins'),(4,'Tandie O\'Moylane'),(5,'Kermit Valentin'),(6,'Shoshanna Hamson'),(7,'Robinetta Venart'),(8,'Giuditta Welldrake'),(9,'Killian Vaadeland'),(10,'Darius Hallihan'),(11,'Yetty Adam'),(12,'Arthur McCurt'),(13,'Greta Gawn'),(14,'Lindy Charrisson'),(15,'Wally Plewman'),(16,'Hillard Force'),(17,'Granthem Jouanet'),(18,'Lyman Gingell'),(19,'Gilberta Nuccii'),(20,'Thurstan Gurnell'),(21,'Blithe Wabe'),(22,'Lorri Schreiner'),(23,'Arny Buscombe'),(25,'Merpel Christianson'),(26,'TestAAuth VBook'),(27,'TestAAuth VBook 2'),(28,'TestAAuth VBook 3'),(29,'TestAAuth VBook 4'),(30,'TestAAuth VBook 5'),(31,'TestAAuth VBook 7'),(32,'TestAAuth VBook 7'),(33,'TestAAuth VBook 8'),(34,'TestAAuth VBook 8'),(35,'merpledoodledoo');
/*!40000 ALTER TABLE `tbl_author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_book`
--

DROP TABLE IF EXISTS `tbl_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_book` (
  `bookId` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `pubId` int DEFAULT NULL,
  PRIMARY KEY (`bookId`),
  KEY `fk_publisher` (`pubId`),
  CONSTRAINT `fk_publisher` FOREIGN KEY (`pubId`) REFERENCES `tbl_publisher` (`publisherId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_book`
--

LOCK TABLES `tbl_book` WRITE;
/*!40000 ALTER TABLE `tbl_book` DISABLE KEYS */;
INSERT INTO `tbl_book` VALUES (1,'Hitch 22',9),(2,'Waking Up',13),(3,'Round Up, The (La Rafle)',18),(4,'50 Worst Movies Ever Made, The',12),(5,'Hunted City',6),(6,'Goke, Body Snatcher from Hell',12),(7,'Ciel est à vous, Le',3),(8,'Liberation of L.B. Jones, The',14),(9,'Dallas Buyers Club',6),(10,'Lodger: A Story of the London Fog, The',3),(11,'Shrek the Third',17),(12,'State Fair',16),(13,'Grand Seduction, The',11),(14,'Tarantula',5),(15,'Star Packer, The',10),(16,'Hud',17),(17,'Undertow (Contracorriente)',14),(18,'Matrix Revolutions, The',18),(19,'Mixed Nuts',9),(20,'Hey Bartender',9),(21,'Spanish Fly',16),(22,'Informers, The',7),(27,'787',20),(28,'Harold\'s Escapades',12),(29,'Limoncello Recipe',1),(30,'JHempel\'s Express',1),(31,'Yellow Is the New Red',7),(32,'Java Fundamentals',9),(38,'Homo Deus',14),(39,'Homo Sapiens',1),(40,'Thirty Two\'s',1),(42,'Presentation Book',3),(45,'postmanTestAdd3',NULL),(49,'postAuthorVBook',NULL),(50,'testAAuthVBk',NULL),(51,'testAAuthVBk 2',NULL),(52,'testAAuthVBk 3',NULL),(53,'testAAuthVBk 4',NULL),(54,'testAAuthVBk 5',NULL),(55,'testAAuthVBk 7',NULL),(56,'testAAuthVBk 7',NULL),(57,'newTitle',NULL),(58,'testAAuthVBk 9',1),(65,'testAAuthVBk 10',1),(67,'newTitle 3',NULL),(72,'Hello BookWorld',NULL),(73,'asdasd',NULL),(74,'sdf',NULL),(75,'mult',NULL),(76,'sdfsdf',NULL),(77,'asdasda',NULL),(78,'sdfsdf',NULL),(79,'asdasd',NULL),(80,'titit',NULL),(82,'testAAuthVBk 999',1),(83,'testAAuthVBk 999',1),(84,'testAAuthVBk 1000',1),(85,'testAAuthVBk 1001',1),(86,'testAAuthVBk 1002',1),(87,'testAAuthVBk 1003',NULL),(88,'test plz work',NULL),(89,'test plz work 2',NULL),(90,'test plz work 2',NULL),(91,'happenstance',NULL),(92,'test 2000',NULL),(93,'test 2001',NULL),(94,'Test 2002',NULL),(95,'TestWRefresh',NULL),(96,'testmeplz',NULL),(97,'testbook\\',NULL);
/*!40000 ALTER TABLE `tbl_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_book_authors`
--

DROP TABLE IF EXISTS `tbl_book_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_book_authors` (
  `bookId` int NOT NULL,
  `authorId` int NOT NULL,
  PRIMARY KEY (`bookId`,`authorId`),
  KEY `fk_tbl_book_authors_tbl_author1_idx` (`authorId`),
  CONSTRAINT `fk_tbl_book_authors_tbl_author1` FOREIGN KEY (`authorId`) REFERENCES `tbl_author` (`authorId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tbl_book_authors_tbl_book1` FOREIGN KEY (`bookId`) REFERENCES `tbl_book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_book_authors`
--

LOCK TABLES `tbl_book_authors` WRITE;
/*!40000 ALTER TABLE `tbl_book_authors` DISABLE KEYS */;
INSERT INTO `tbl_book_authors` VALUES (1,1),(40,1),(42,1),(45,1),(2,2),(96,2),(97,2),(40,3),(3,4),(97,4),(4,5),(29,5),(5,6),(6,7),(32,7),(7,8),(32,8),(39,8),(8,9),(9,10),(10,11),(11,12),(12,13),(93,13),(94,13),(13,14),(38,14),(94,14),(14,15),(15,16),(28,16),(16,17),(31,17),(17,18),(30,18),(18,19),(19,20),(95,20),(20,21),(21,22),(84,22),(85,22),(86,22),(22,23),(27,23),(84,23),(85,23),(86,23),(49,25),(50,26),(51,27),(52,28),(53,29),(54,30),(55,31),(56,32),(58,34),(65,35),(83,35);
/*!40000 ALTER TABLE `tbl_book_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_book_copies`
--

DROP TABLE IF EXISTS `tbl_book_copies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_book_copies` (
  `bookId` int NOT NULL,
  `branchId` int NOT NULL,
  `noOfCopies` int DEFAULT NULL,
  PRIMARY KEY (`bookId`,`branchId`),
  KEY `fk_bc_book` (`bookId`),
  KEY `fk_bc_branch` (`branchId`),
  CONSTRAINT `fk_bc_book` FOREIGN KEY (`bookId`) REFERENCES `tbl_book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bc_branch` FOREIGN KEY (`branchId`) REFERENCES `tbl_library_branch` (`branchId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_book_copies`
--

LOCK TABLES `tbl_book_copies` WRITE;
/*!40000 ALTER TABLE `tbl_book_copies` DISABLE KEYS */;
INSERT INTO `tbl_book_copies` VALUES (1,3,1),(1,4,0),(1,10,25),(2,11,18),(2,14,9),(3,5,15),(4,4,16),(4,9,28),(4,15,2),(5,20,34),(6,20,23),(7,20,11),(8,20,30),(9,3,17),(10,12,22),(11,1,23),(12,1,1),(13,2,27),(13,6,17),(13,10,20),(13,17,18),(14,20,2),(15,5,4),(16,7,7),(16,19,19),(17,8,10),(18,16,28),(18,18,19),(19,13,11),(20,4,13),(21,20,6),(22,18,20),(31,11,22),(32,18,2),(38,14,1),(39,1,3),(40,1,2),(42,5,3);
/*!40000 ALTER TABLE `tbl_book_copies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_book_genres`
--

DROP TABLE IF EXISTS `tbl_book_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_book_genres` (
  `genre_id` int NOT NULL,
  `bookId` int NOT NULL,
  PRIMARY KEY (`genre_id`,`bookId`),
  KEY `fk_tbl_book_genres_tbl_book1_idx` (`bookId`),
  CONSTRAINT `fk_tbl_book_genres_tbl_book1` FOREIGN KEY (`bookId`) REFERENCES `tbl_book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tbl_book_genres_tbl_genre1` FOREIGN KEY (`genre_id`) REFERENCES `tbl_genre` (`genre_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_book_genres`
--

LOCK TABLES `tbl_book_genres` WRITE;
/*!40000 ALTER TABLE `tbl_book_genres` DISABLE KEYS */;
INSERT INTO `tbl_book_genres` VALUES (5,1),(7,3),(11,4),(11,5),(20,6),(18,8),(11,9),(3,10),(12,12),(18,13),(8,14),(5,15),(11,17),(6,18),(18,19),(6,20),(17,21),(2,22),(1,27),(2,27),(3,27),(21,28),(18,30),(2,31),(14,38),(1,39),(1,40),(1,42),(2,42),(21,85),(33,85),(21,86),(33,86),(21,87),(33,87),(1,88),(2,88),(4,88),(11,89),(12,89),(1,90),(3,90),(3,91),(12,91),(21,92),(33,92),(21,93),(33,93),(3,94),(2,95),(3,96),(1,97),(2,97);
/*!40000 ALTER TABLE `tbl_book_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_book_loans`
--

DROP TABLE IF EXISTS `tbl_book_loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_book_loans` (
  `bookId` int NOT NULL,
  `branchId` int NOT NULL,
  `cardNo` int NOT NULL,
  `dateOut` datetime DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `dateIn` datetime DEFAULT NULL,
  PRIMARY KEY (`bookId`,`branchId`,`cardNo`),
  KEY `fk_bl_book` (`bookId`),
  KEY `fk_bl_branch` (`branchId`),
  KEY `fk_bl_borrower` (`cardNo`),
  CONSTRAINT `fk_bl_book` FOREIGN KEY (`bookId`) REFERENCES `tbl_book` (`bookId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bl_borrower` FOREIGN KEY (`cardNo`) REFERENCES `tbl_borrower` (`cardNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bl_branch` FOREIGN KEY (`branchId`) REFERENCES `tbl_library_branch` (`branchId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_book_loans`
--

LOCK TABLES `tbl_book_loans` WRITE;
/*!40000 ALTER TABLE `tbl_book_loans` DISABLE KEYS */;
INSERT INTO `tbl_book_loans` VALUES (1,3,3,'2020-11-02 16:36:45','2020-11-09 16:36:45','2020-11-02 16:37:29'),(4,4,1,'2020-10-19 22:39:08','2020-11-18 23:39:08','2020-11-02 03:05:40'),(5,20,1,'2020-10-18 03:16:50','2020-10-25 03:16:50','2020-10-18 13:09:54'),(8,20,1,'2020-10-18 11:22:31','2020-10-25 22:28:10',NULL),(9,3,3,'2020-11-02 16:25:16','2020-11-09 16:25:16','2020-11-02 16:25:30'),(10,12,1,'2020-11-02 03:54:47','2020-11-09 03:54:47',NULL),(13,2,3,'2020-11-02 19:28:48','2020-11-09 19:28:48','2020-11-02 19:29:17'),(13,17,1,'2020-10-19 06:57:50','2020-10-26 06:57:50','2020-10-19 06:58:24'),(14,20,1,'2020-10-19 03:50:01','2020-10-26 03:50:01','2020-10-19 07:53:17'),(16,19,1,'2020-11-02 03:55:53','2020-11-09 03:55:53',NULL),(21,20,1,'2020-10-20 18:46:46','2020-10-27 18:46:46','2020-10-20 18:51:18'),(42,5,1,'2020-10-21 02:47:36','2020-11-17 03:47:36',NULL);
/*!40000 ALTER TABLE `tbl_book_loans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_borrower`
--

DROP TABLE IF EXISTS `tbl_borrower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_borrower` (
  `cardNo` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cardNo`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_borrower`
--

LOCK TABLES `tbl_borrower` WRITE;
/*!40000 ALTER TABLE `tbl_borrower` DISABLE KEYS */;
INSERT INTO `tbl_borrower` VALUES (1,'Daniel Barone','11108 Leolang Ave. Sunland, CA 91040','8182810894'),(3,'Erminie McGlaud','7740 Bellgrove Point','(676) 5793355'),(4,'Pansie Stubs','500 Nevada Pass','(966) 8322044'),(5,'Burg Graalmans','4636 Forster Terrace','(721) 8645176'),(6,'Bartolomeo Fearnyhough','51747 Mariners Cove Crossing','(910) 1971560'),(7,'Tricia Keilty','260 Melody Center','(367) 7618354'),(8,'Thaxter Curnock','0 Village Green Lane','(621) 7670884'),(9,'Marne Chestnut','8364 Summer Ridge Junction','(750) 8722485'),(10,'Edythe Buntin','41 Kinsman Junction','(528) 3475298'),(11,'Aryn Hawarden','20641 Mcguire Crossing','(426) 4753602'),(12,'Cindi Bodechon','205 Amoth Point','(471) 9427514'),(13,'Norry Carlyle','7732 Red Cloud Point','(517) 9099929'),(14,'Imogene Winkle','60521 Glendale Circle','(858) 2485078'),(15,'Pennie O\'Gormally','2612 Bashford Point','(975) 1224305'),(16,'Priscella Scimonelli','04261 La Follette Junction','(841) 5410432'),(17,'Esma Creelman','1946 Bonner Place','(929) 4405553'),(18,'Thom Goodall','247 Golf Drive','(422) 1482278'),(19,'Cathryn Lebreton','36532 Pierstorff Point','(487) 3780529'),(20,'Angelika Luckhurst','4 Comanche Plaza','(832) 5370683'),(21,'Emelita Bernuzzi','12649 Ronald Regan Junction','(740) 3109005'),(22,'Jemmy Cornell','43 Mosinee Terrace','(417) 5458614'),(23,'Fayre Dedney','980 Dixon Junction','(460) 2415701'),(24,'Enos Tilne','59868 Messerschmidt Junction','(348) 1819737'),(25,'Ebonee Caldecourt','40 Golden Leaf Court','(361) 4502858'),(26,'Abrahan Seventy','1 Jackson Junction','(242) 9087623'),(27,'Adriane Dawnay','018 Oriole Drive','(977) 1232323'),(28,'Candie Apps','32317 Dakota Avenue','(449) 4789075'),(29,'Raphael Ansell','282 Debra Drive','(693) 3630183'),(30,'Rebecka Godleman','683 American Hill','(931) 1329433'),(32,'Ruperta Benediktsson','419 Monument Pass','(392) 7422644'),(35,'Michelle Chang',NULL,NULL),(36,'Aesin Lam','11108 Leolang Ave.','8182810899');
/*!40000 ALTER TABLE `tbl_borrower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_genre`
--

DROP TABLE IF EXISTS `tbl_genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_genre` (
  `genre_id` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_genre`
--

LOCK TABLES `tbl_genre` WRITE;
/*!40000 ALTER TABLE `tbl_genre` DISABLE KEYS */;
INSERT INTO `tbl_genre` VALUES (1,'Adventure'),(2,'Epic'),(3,'Fable'),(4,'Fairy tale'),(5,'Fantasy'),(6,'Folk tale'),(7,'Historical fiction'),(8,'Horror'),(9,'Humour and satire'),(10,'Legend'),(11,'Mystery'),(12,'Myth'),(13,'Poetry'),(14,'Realistic fiction'),(15,'Science fiction'),(16,'Autobiography'),(17,'Biography'),(18,'Memoir'),(19,'Diary or journal'),(20,'Travel book'),(21,'Atlas'),(33,'knknk');
/*!40000 ALTER TABLE `tbl_genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_library_branch`
--

DROP TABLE IF EXISTS `tbl_library_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_library_branch` (
  `branchId` int NOT NULL AUTO_INCREMENT,
  `branchName` varchar(45) DEFAULT NULL,
  `branchAddress` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`branchId`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_library_branch`
--

LOCK TABLES `tbl_library_branch` WRITE;
/*!40000 ALTER TABLE `tbl_library_branch` DISABLE KEYS */;
INSERT INTO `tbl_library_branch` VALUES (1,'Jabbersphere Library','88 Street st.'),(2,'Flipstorm Library','1818 Service Center'),(3,'Thoughtstorm Library','2076 Evergreen Pass'),(4,'Yadel Library','1845 Pepper Wood Avenue'),(5,'Jaxspan Library','78 Briar Crest Point'),(6,'Photolist Library','075 Hoard Drive'),(7,'Ntag Library','0048 Sheridan Hill'),(8,'Dabjam Library','18 Cottonwood Park'),(9,'Flipbug Library','09 Everett Avenue'),(10,'Jamia Library','6 Roxbury Court'),(11,'Tazzy Library','6 Wayridge Crossing'),(12,'Yacero Library','2 Union Street'),(13,'Yombu Library','7206 Comanche Park'),(14,'Voonyx Library','39 Sutherland Alley'),(15,'Thoughtbridge Library','44955 Weeping Birch Drive'),(16,'Meedoo Library','303 Garrison Hill'),(17,'Avavee Library','61 Toban Drive'),(18,'Kimia Library','0 Cody Hill'),(19,'Midel Library','9503 4th Court'),(20,'Mynte Library','1 Dwight Junction'),(23,'treeb','808 Tree Ln.'),(24,'newBName 3',NULL),(25,'NovNine Branch','99 NovNing St.'),(26,'merpaloo byo','111 Merpaloo Byo.'),(27,'doney branch','111 doney branch ln.'),(28,'testAddedBranch','testaloo');
/*!40000 ALTER TABLE `tbl_library_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_publisher`
--

DROP TABLE IF EXISTS `tbl_publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_publisher` (
  `publisherId` int NOT NULL AUTO_INCREMENT,
  `publisherName` varchar(45) NOT NULL,
  `publisherAddress` varchar(45) DEFAULT NULL,
  `publisherPhone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`publisherId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_publisher`
--

LOCK TABLES `tbl_publisher` WRITE;
/*!40000 ALTER TABLE `tbl_publisher` DISABLE KEYS */;
INSERT INTO `tbl_publisher` VALUES (1,'Kertzmann, Schuster and Corkery','97 Iowa Trail','(376) 9808000'),(2,'Glover, Kassulke and Considine','13224 3rd Plaza','(281) 7829170'),(3,'Robel Inc','58 Atwood Avenue','(484) 4800125'),(4,'O\'Reilly, O\'Hara and Friesen','369 Grover Road','(316) 2133925'),(5,'Walsh, Rodriguez and White','61610 Del Sol Circle','(228) 5074647'),(6,'Trantow Inc','03 Bluejay Junction','(927) 9860560'),(7,'MacGyver LLC','29107 Parkside Park','(799) 9975456'),(8,'Schmidt and Sons','8 5th Way','(867) 7430724'),(9,'Hyatt-Crona','82 Petterle Point','(170) 2210906'),(10,'Brakus-Emmerich','0535 Beilfuss Court','(177) 9938203'),(11,'O\'Hara-Grant','8201 Rusk Terrace','(237) 3310003'),(12,'Okuneva Group','30918 Acker Alley','(809) 2879595'),(13,'Gerhold, Weber and Beier','5355 Sunbrook Hill','(794) 6961801'),(14,'Gleason, Bruen and Swaniawski','2 Heffernan Way','(243) 4013754'),(15,'Aufderhar LLC','63934 Meadow Valley Plaza','(293) 3368052'),(16,'Mraz, Dickens and Robel','18770 Anzinger Crossing','(895) 4882806'),(17,'Jones, Yundt and Lockman','96 Park Meadow Park','(883) 6328206'),(18,'Lynch Group','70361 Rieder Place','(564) 3951893'),(19,'West, Gutmann and Beier','43805 Porter Street','(994) 7979146'),(20,'Mitchell-Weissnat','05861 Anzinger Avenue','(299) 8131886'),(23,'Tree D',NULL,NULL);
/*!40000 ALTER TABLE `tbl_publisher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 17:57:04

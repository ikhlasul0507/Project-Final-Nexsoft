-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Mar 2021 pada 04.55
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_projectnexsoft`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_detail_stok`
--

CREATE TABLE `tbl_detail_stok` (
  `idDetailStok` varchar(100) NOT NULL,
  `idStok` varchar(10) NOT NULL,
  `idProduct` varchar(10) NOT NULL,
  `tglExpiredProduct` date DEFAULT NULL,
  `hargaProduct` int(20) DEFAULT NULL,
  `transTypeProduct` int(1) DEFAULT NULL COMMENT '0 = beratambah\r\n1 = berkurang',
  `kuantitasProduct` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_detail_stok`
--

INSERT INTO `tbl_detail_stok` (`idDetailStok`, `idStok`, `idProduct`, `tglExpiredProduct`, `hargaProduct`, `transTypeProduct`, `kuantitasProduct`) VALUES
('01b5fed1-0598-4644-9162-fe954a050841', 'STOK0127', 'PROD0019', '2021-03-31', 10000, 0, 40),
('02758ca4-4d74-4d72-8544-a1d4968303d3', 'STOK0057', 'PROD0036', NULL, NULL, NULL, NULL),
('033b33f3-b342-46a6-8457-59e46113af02', 'STOK0122', 'PROD0048', NULL, NULL, NULL, NULL),
('03709836-82ae-401d-8b66-24ddd44cb343', 'STOK0013', 'PROD0001', '2021-03-19', 1000, 0, 3000),
('03bd9a95-b6d8-40fe-84e0-7a9a89184763', 'STOK0127', 'PROD0012', '2021-03-25', 21000, 0, 10000),
('0745be47-67f5-4286-9d14-80ac8a0d9186', 'STOK0066', 'PROD0003', '2021-03-19', 1000, 1, 5),
('0964171c-d349-4398-b2ae-1dbf58b38c65', 'STOK0099', 'PROD0001', NULL, 0, 1, 1),
('0a017e32-a0af-4412-a3e8-7c11c6e10abc', 'STOK0102', 'PROD0008', NULL, 0, 1, 11),
('0ac0e572-dfcc-420d-98b6-7879271b1c0e', 'STOK0019', 'PROD0017', NULL, NULL, NULL, NULL),
('0c30ba2f-d602-4c12-a06c-cc9fca393a48', 'STOK0127', 'PROD0001', '2021-03-25', 10000, 0, 20),
('0e825a44-86a3-4224-adae-964503c23c43', 'STOK0022', 'PROD0020', NULL, NULL, NULL, NULL),
('113c140d-358e-4bb0-bc25-c6f1748a73a0', 'STOK0128', 'PROD0002', '2021-03-19', 15000, 0, 200),
('11e5379b-8932-4ca6-a286-183da771f066', 'STOK0098', 'PROD0003', NULL, 0, 1, 20),
('129c25e7-c831-4185-939b-d80b8d2edd57', 'STOK0127', 'PROD0013', '2021-03-16', 3000, 0, 200),
('131703b9-535a-49f8-85ac-3decaf9d03cf', 'STOK0128', 'PROD0018', '2021-03-31', 20000, 0, 200),
('15262d17-d329-4a8d-8856-ff615155a7ce', 'STOK0009', 'PROD0009', NULL, NULL, NULL, NULL),
('15ccf89b-5dc5-4058-bba3-a0a02eb5eb9e', 'STOK0113', 'PROD0008', NULL, 0, 1, 10),
('16b3ff5f-ce69-482a-9213-5efa064c30c7', 'STOK0024', 'PROD0022', NULL, NULL, NULL, NULL),
('17d6dc95-9843-4251-afc5-20bf9453abdc', 'STOK0109', 'PROD0008', NULL, 0, 1, 1),
('18227076-1356-4b69-8345-ea32889916a8', 'STOK0099', 'PROD0002', NULL, 0, 1, 1),
('1a528801-8e5c-4dc5-9174-1d591c7c416c', 'STOK0079', 'PROD0005', '2021-03-25', 10000, 0, 17),
('1af3a26f-da28-44f6-8953-9ed83b617690', 'STOK0070', 'PROD0001', '2021-03-25', 12, 0, 2924),
('1c5360ca-a3bb-4d4b-918f-c99517123637', 'STOK0058', 'PROD0037', NULL, NULL, NULL, NULL),
('1c863d89-0574-4add-b14f-aedcb7651842', 'STOK0065', 'PROD0003', '2021-03-23', 10000, 1, 5),
('1ce0927f-20e9-4342-bc5c-573fe01204c4', 'STOK0003', 'PROD0003', NULL, NULL, NULL, NULL),
('20086090-40eb-4ae4-88d8-1b17fef3bbbd', 'STOK0023', 'PROD0021', NULL, NULL, NULL, NULL),
('23ae1702-824c-488e-b19e-5b36c367ba35', 'STOK0025', 'PROD0023', NULL, NULL, NULL, NULL),
('25304ce1-0863-4358-88ef-7d57af7bad60', 'STOK0052', 'PROD0031', NULL, NULL, NULL, NULL),
('2659a185-946e-49f2-b463-15d3c31f92a5', 'STOK0078', 'PROD0001', '2021-03-05', 12, 0, 3060),
('296913db-a635-4a84-b7a7-84fb7b0520fb', 'STOK0049', 'PROD0028', NULL, NULL, NULL, NULL),
('2c97aa42-9602-4423-8001-1f6a261d5c0a', 'STOK0056', 'PROD0035', NULL, NULL, NULL, NULL),
('2ede6bf3-585b-410e-805a-c53aa1aa9b59', 'STOK0128', 'PROD0020', '2021-03-31', 3000, 0, 9000),
('2f424418-7463-43ce-9ffd-288b6363011d', 'STOK0134', 'PROD0001', NULL, 0, 1, 20),
('2f9d1833-84d7-4925-a5c7-5434bb0de896', 'STOK0038', 'PROD0024', '2021-03-10', 12, 0, 1222),
('32148f81-bfd3-4926-b5a6-ace385292ff0', 'STOK0007', 'PROD0007', NULL, NULL, NULL, NULL),
('37c03bc2-a9dc-4bfd-b62a-8017f9c5557c', 'STOK0130', 'PROD0001', '2021-04-02', 20000, 0, 200),
('37fa4113-eb41-4383-b5a9-415b3366e203', 'STOK0055', 'PROD0034', NULL, NULL, NULL, NULL),
('39f52015-f9bf-42a7-8e53-3b0ffc240cd7', 'STOK0096', 'PROD0001', NULL, 0, 1, 12),
('3a3b1d34-677d-4fa4-9ab2-09556fd897bd', 'STOK0100', 'PROD0001', NULL, 0, 1, 10),
('3aa8a09d-11f2-4d22-b471-6dbe22706133', 'STOK0097', 'PROD0001', NULL, 0, 1, 12),
('3c827490-bb63-4696-ae08-cb757006ff6e', 'STOK0106', 'PROD0008', NULL, 0, 1, 9),
('3e6284fe-bc5e-49db-9848-187410c28233', 'STOK0091', 'PROD0002', '2021-03-26', 20000, 0, 20),
('3e7da699-348e-4424-b11a-d4e20419cc66', 'STOK0105', 'PROD0008', NULL, 0, 1, 10),
('4050ff4f-0ead-43fc-8f9c-0bb76a764e83', 'STOK0036', 'PROD0013', '2020-01-12', 12, 0, 60),
('44f1d2f4-8469-4f75-ad22-c7760c488eea', 'STOK0021', 'PROD0019', NULL, NULL, NULL, NULL),
('466d1c6a-ee39-447d-9228-452517786765', 'STOK0048', 'PROD0027', NULL, NULL, NULL, NULL),
('46f870f6-f35a-4540-8de8-35c795c399b8', 'STOK0110', 'PROD0008', '2021-03-23', 100, 0, 10),
('493e2547-cb89-447a-a1b7-53f530017b31', 'STOK0011', 'PROD0011', NULL, NULL, NULL, NULL),
('4c852a78-7d74-40da-b33e-25e90af89434', 'STOK0114', 'PROD0008', '2021-03-24', 12, 0, 15),
('4d4741f0-13a5-4481-8718-f63f7c28d605', 'STOK0089', 'PROD0001', '2021-03-26', 12, 0, 1780),
('4ee9b213-1476-4ca9-a016-c0f55e173b3c', 'STOK0101', 'PROD0008', '2021-03-23', 1000, 0, 10),
('5134b828-d280-4d44-97fd-f292e0c94c82', 'STOK0127', 'PROD0002', '2021-03-19', 2000, 0, 10),
('52581b44-c1f2-4861-ae5c-5badb5da985d', 'STOK0076', 'PROD0001', NULL, 0, 1, 2947),
('5c43b1bf-93f4-4485-b3c7-c6cf60cc6376', 'STOK0133', 'PROD0002', NULL, 0, 1, 12),
('5db500b6-cf76-4ba5-acfa-220a957ac1d8', 'STOK0118', 'PROD0044', NULL, NULL, NULL, NULL),
('5ee2f54d-cb36-430a-9fe3-1fc59f5dc9da', 'STOK0012', 'PROD0012', NULL, NULL, NULL, NULL),
('5fb6e898-b9a5-4d01-9ace-a07c4a7f2c23', 'STOK0044', 'PROD0013', '2020-01-12', 12, 0, 144),
('602289e1-e2e7-4759-97bf-1419b4ead82e', 'STOK0115', 'PROD0008', NULL, 0, 1, 3),
('677b2344-2248-4b99-94cf-a028517097cb', 'STOK0128', 'PROD0008', '2021-03-30', 90000, 0, 700),
('6b3ee81d-cac0-4a37-9fed-62060df34079', 'STOK0054', 'PROD0033', NULL, NULL, NULL, NULL),
('6b4e11be-fcd0-4250-99a6-af83b9dd937f', 'STOK0013', 'PROD0012', '2021-03-18', 50000, 0, 5692),
('6b8fe07b-ae74-44f8-b8d7-971a1aefd76b', 'STOK0035', 'PROD0013', '2020-01-12', 12, 1, 30),
('6c731821-8c52-47de-8d6b-38e780f13bb0', 'STOK0059', 'PROD0038', NULL, NULL, NULL, NULL),
('6ec0f2d5-968b-4bdb-8d4f-06e63cae287d', 'STOK0051', 'PROD0030', NULL, NULL, NULL, NULL),
('6f810e89-9915-4de3-9da9-084713260e56', 'STOK0127', 'PROD0027', '2021-03-18', 20000, 0, 200),
('70b6b6d2-60fe-4721-bd2d-ef72f125bfc2', 'STOK0125', 'PROD0010', '2021-03-25', 10000, 0, 10),
('7101e345-0576-48f4-8751-8f14abccca79', 'STOK0077', 'PROD0001', '2021-03-19', 100, 0, 3037),
('72b15244-4eee-4eb1-b182-6c53c3311222', 'STOK0091', 'PROD0003', '2021-03-26', 1000, 0, 50),
('73def660-84da-47c3-ae8f-20175bad11ad', 'STOK0112', 'PROD0008', NULL, 0, 1, 10),
('75aadc2f-5025-48ca-8e31-62f7d50b4c59', 'STOK0128', 'PROD0026', '2021-03-31', 8000, 0, 870),
('76f92348-b4ee-419a-a86c-4077fa61d55c', 'STOK0128', 'PROD0039', '2021-03-30', 90000, 0, 800),
('78cc63db-773a-43c7-af13-1755cf3466f5', 'STOK0088', 'PROD0001', '2021-03-25', 30000, 0, 1680),
('7c5fd9b6-3930-402b-bce5-e23c1e35b291', 'STOK0018', 'PROD0016', NULL, NULL, NULL, NULL),
('7cb61006-00f6-4c34-9026-efce4d8d5e9f', 'STOK0117', 'PROD0043', NULL, NULL, NULL, NULL),
('8834d2bb-9050-4cc4-90bc-239c255c6af5', 'STOK0135', 'PROD0001', NULL, 0, 1, 12),
('8ae4c677-f20f-472f-bd94-d1f41ae9fd0c', 'STOK0087', 'PROD0001', '2021-03-25', 12000, 0, 680),
('8b1ee7d6-d40b-4f17-8d05-058cccc70e55', 'STOK0127', 'PROD0020', '2021-03-31', 3000, 0, 20),
('8d3fb422-708f-4b07-9b2b-9662d129eb4b', 'STOK0088', 'PROD0002', '2021-03-25', 30000, 0, 1372),
('8f162a2c-2dcd-4169-b9b5-fef1b8d9bb2b', 'STOK0071', 'PROD0001', '2021-03-09', 12, 0, 2947),
('94e5ee78-6bce-43a3-bb62-2fb932c3fe86', 'STOK0098', 'PROD0002', NULL, 0, 1, 21),
('977051ff-2c4f-4a8a-b124-1c74104fcda1', 'STOK0086', 'PROD0003', '2021-03-25', 100, 0, 405),
('97dd3754-964e-41ae-9741-5810d0475a31', 'STOK0128', 'PROD0007', '2021-03-24', 8000, 0, 987),
('98753d7e-adcb-42ab-9f2f-4c8fc785b604', 'STOK0131', 'PROD0001', '2021-03-27', 1212, 0, 12121212),
('9be691b9-b494-43f6-8121-c1a4b5f88129', 'STOK0006', 'PROD0006', NULL, NULL, NULL, NULL),
('9d69cc30-762a-4fbd-8004-6354beeb689e', 'STOK0127', 'PROD0005', '2021-03-26', 30000, 0, 1000),
('9d93904b-e56d-4998-b528-e6cf26e77ce2', 'STOK0123', 'PROD0049', NULL, NULL, NULL, NULL),
('9dd736c5-cf73-4a49-bd48-08e851990483', 'STOK0116', 'PROD0014', NULL, 0, 1, 5),
('9eec9196-ef83-4461-b2b9-fe550cc461ac', 'STOK0128', 'PROD0027', '2021-03-30', 90000, 0, 987),
('a065d396-e3f8-4f4f-82d9-b8b502b81d56', 'STOK0127', 'PROD0017', '2021-03-25', 2000, 0, 1000),
('a1bea68f-a1e0-4fc1-890a-ec1590a2e225', 'STOK0097', 'PROD0003', NULL, 0, 1, 120),
('a4d8db2e-b816-45cc-9634-f85ec93fc2d3', 'STOK0103', 'PROD0008', '2021-03-24', 0, 1, 10),
('a4e68c0c-46e3-4226-8c7b-ead24e8d498f', 'STOK0016', 'PROD0014', NULL, NULL, NULL, NULL),
('a99d5e69-6e2d-4e3b-8513-1ed6e764bb95', 'STOK0078', 'PROD0002', '2021-03-05', 12, 0, 972),
('a9b22a29-91f5-40b5-80de-2a76a94308e0', 'STOK0015', 'PROD0013', NULL, NULL, NULL, NULL),
('aa9945b2-b71c-446a-9926-44096ec41aa1', 'STOK0047', 'PROD0026', NULL, NULL, NULL, NULL),
('ad98eebb-b840-465e-b5c3-6ec0e9da5463', 'STOK0039', 'PROD0013', '2020-01-12', 12, 0, 88),
('adbcd5a0-f336-4486-8b53-a3dd0ade6426', 'STOK0040', 'PROD0013', '2020-01-12', 12, 0, 96),
('b19120e9-91b7-4bec-abfd-ee9bd31a71bc', 'STOK0075', 'PROD0001', '2021-03-25', 100000, 0, 2959),
('b4818c8b-4d9b-4eb0-9fa8-907c00da3c0c', 'STOK0017', 'PROD0015', NULL, NULL, NULL, NULL),
('b796ea68-bbc2-40c0-8f37-1b4d5b5ffb8c', 'STOK0085', 'PROD0001', '2021-03-25', 1000, 0, 380),
('b92ad148-bde0-45db-a544-e3ec41177a31', 'STOK0067', 'PROD0001', '2021-03-11', 12, 0, 2912),
('baaf8ba2-2867-4893-9bc5-48bd80d75e5c', 'STOK0111', 'PROD0008', NULL, 0, 1, 1),
('bb4d7f8c-b2d4-4726-9613-b556a31a1623', 'STOK0001', 'PROD0001', NULL, NULL, NULL, NULL),
('bcff0245-e891-4f11-82f4-d560d665af22', 'STOK0062', 'PROD0041', NULL, NULL, NULL, NULL),
('c0f475f0-71fd-43fa-8a09-7b53c1fd30c7', 'STOK0128', 'PROD0005', '2021-03-15', 80800, 0, 56),
('c575f132-3be0-44e9-b697-839a68282ed4', 'STOK0128', 'PROD0017', '2021-03-31', 3000, 0, 90),
('c69979fa-21ba-4c9f-a4d9-1f60fe95bfb5', 'STOK0128', 'PROD0033', '2021-03-31', 80000, 0, 760),
('c7c046a1-de1b-43a1-a28d-9683bbc0267b', 'STOK0002', 'PROD0002', NULL, NULL, NULL, NULL),
('c927b49f-1639-40db-8df2-94afa5c662b2', 'STOK0064', 'PROD0003', '2021-03-25', 1000, 0, 5),
('c9a1114b-845e-44ed-be9b-c36495ad439f', 'STOK0128', 'PROD0013', '2021-03-29', 90, 0, 450),
('d15f9eef-3d6b-4f7e-8c0c-80b5c981d9ec', 'STOK0005', 'PROD0005', NULL, NULL, NULL, NULL),
('d2a66511-f1d4-4932-b1bf-4126ec178ebf', 'STOK0020', 'PROD0018', NULL, NULL, NULL, NULL),
('d2a66eb5-31a8-434c-ad7e-bdeff55ea05d', 'STOK0014', 'PROD0001', '2021-03-27', 12000, 1, 50),
('d460088f-f9ea-4be3-a6e6-d6359daccb48', 'STOK0128', 'PROD0029', '2021-03-31', 90000, 0, 700),
('d52c66db-91ec-4dbc-970e-d537d3fc6118', 'STOK0128', 'PROD0006', '2021-03-31', 20000, 0, 90),
('d620c569-f664-4cd7-9f4a-8ef44cfa5ae7', 'STOK0033', 'PROD0024', NULL, NULL, NULL, NULL),
('d6c55946-442b-4884-8d1b-5bf778137a90', 'STOK0010', 'PROD0010', NULL, NULL, NULL, NULL),
('d6d67531-aeb5-4d94-9a70-be7beea47348', 'STOK0046', 'PROD0025', NULL, NULL, NULL, NULL),
('d73adf27-3339-4470-b504-7eaf93c2b644', 'STOK0128', 'PROD0001', '2021-03-26', 20000, 0, 300),
('d8162e3e-7395-468d-a05b-e5ca2d0ea924', 'STOK0079', 'PROD0001', '2021-03-03', 100000, 0, 3260),
('d88443ee-110f-4c94-8ab1-906a52324296', 'STOK0128', 'PROD0030', '2021-03-20', 8000, 0, 9877),
('dab5b980-e1e3-4da4-8d88-f731459eacbe', 'STOK0050', 'PROD0029', NULL, NULL, NULL, NULL),
('db364d31-ab51-4e39-8a62-5afe8d24b451', 'STOK0128', 'PROD0003', '2021-03-31', 50000, 0, 900),
('db97d5d3-5db2-466e-b346-46cee4d04f22', 'STOK0100', 'PROD0003', NULL, 0, 1, 9),
('de74e48f-5ea2-4993-a904-c020e47d25bb', 'STOK0132', 'PROD0001', '2021-03-27', 12, 0, 12),
('deeab1ec-b8f8-4bdd-93d1-412644cb4d9c', 'STOK0129', 'PROD0009', '2021-03-27', 12, 0, 123),
('df1d4d92-d109-442e-9268-a2235e1a8cea', 'STOK0088', 'PROD0011', '2021-03-25', 200001, 0, 20),
('df23433e-ce80-4eab-a57d-89d862c976cf', 'STOK0128', 'PROD0019', '2021-03-16', 2000, 0, 23),
('e0d70f6b-b341-4c5b-ac5f-d7f6fa106ade', 'STOK0008', 'PROD0008', NULL, NULL, NULL, NULL),
('e1f0506c-d1a2-4820-8eea-bca34a1e7736', 'STOK0053', 'PROD0032', NULL, NULL, NULL, NULL),
('e241b1a4-89bf-487d-aeb5-735e653ed357', 'STOK0042', 'PROD0013', '2020-01-12', 12, 0, 120),
('e29ba948-9a73-4be6-bb91-ac2f900c71dd', 'STOK0119', 'PROD0045', NULL, NULL, NULL, NULL),
('e2a51e40-4349-478a-bfea-dec892be62d0', 'STOK0093', 'PROD0001', NULL, 0, 1, 12),
('e55dfda8-2da5-480d-b0e5-852f662437b2', 'STOK0127', 'PROD0015', '2021-03-31', 30000, 0, 3400),
('e5903872-471a-4809-b7df-fff4d96d8f7c', 'STOK0126', 'PROD0003', NULL, 0, 1, 100),
('e6426425-6d93-47f5-bc42-e7d7748ed0aa', 'STOK0079', 'PROD0014', '2021-03-31', 200000, 0, 10),
('e6bf516f-09f5-4cba-8aaf-162a6392b737', 'STOK0061', 'PROD0040', NULL, NULL, NULL, NULL),
('e80dcb59-1358-4dcd-abea-88e84cebae08', 'STOK0128', 'PROD0032', '2021-03-30', 500, 0, 900),
('e8308c81-f1f5-4c98-9441-ab99724575ea', 'STOK0082', 'PROD0001', NULL, 0, 1, 260),
('e890cd76-7fd0-4ddd-88de-f7294a1d9a6a', 'STOK0080', 'PROD0001', NULL, 0, 1, 2260),
('ec8facfe-2240-4a39-97ad-8ef29db6f5aa', 'STOK0121', 'PROD0047', NULL, NULL, NULL, NULL),
('ed6254fb-9228-4684-a44e-600c43d38339', 'STOK0124', 'PROD0003', '2021-03-24', 20000, 0, 100),
('ee7411b9-c9c7-4316-8fb9-ed0713e09713', 'STOK0060', 'PROD0039', NULL, NULL, NULL, NULL),
('ee8e5c2f-43dc-44c1-ba0b-ab63a24056be', 'STOK0104', 'PROD0008', '2021-03-25', 10, 0, 10),
('efb7baa9-cf00-4333-b845-908d6aa109b1', 'STOK0079', 'PROD0002', '2021-03-19', 200000, 0, 1072),
('f06a9a2e-1548-4523-a13a-2a16b5be21e3', 'STOK0128', 'PROD0011', '2021-03-29', 80, 0, 81),
('f385a3a7-d550-41cc-bf28-51eed67cbc68', 'STOK0041', 'PROD0013', '2020-01-12', 12, 0, 108),
('f3ee34dd-5585-46da-9277-0bfaf75b5882', 'STOK0063', 'PROD0042', NULL, NULL, NULL, NULL),
('f56893c0-aef7-42b7-9098-7605ea64929d', 'STOK0004', 'PROD0004', NULL, NULL, NULL, NULL),
('f821e696-38c1-4599-8eb8-46ded2cbb0fe', 'STOK0108', 'PROD0008', NULL, 0, 1, 11),
('f8cce25c-b8af-4fcb-832c-5d466039ace0', 'STOK0107', 'PROD0008', NULL, 0, 1, 11),
('f953bdff-3ab4-406f-a997-f7d48c0cccae', 'STOK0043', 'PROD0013', '2020-01-12', 12, 0, 132),
('fa6acd24-1c84-439e-bfc7-572ef51507f8', 'STOK0092', 'PROD0001', '2021-03-25', 10, 0, 10),
('fb1dd1b6-da8d-4531-8773-443c6433c6ae', 'STOK0120', 'PROD0046', NULL, NULL, NULL, NULL),
('fc9dc3cf-9d3a-49a6-8bf8-26bd5105d9f4', 'STOK0081', 'PROD0001', NULL, 0, 1, 1260),
('fe13347d-1c36-4d87-b1bc-068671950a75', 'STOK0094', 'PROD0001', NULL, 0, 1, 1212),
('ffbc3882-a110-4324-8d3d-0cada35be34b', 'STOK0090', 'PROD0001', '2021-03-18', 100000, 0, 10);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_header_stok`
--

CREATE TABLE `tbl_header_stok` (
  `idStok` varchar(10) NOT NULL,
  `tanggalDokumen` date NOT NULL,
  `tanggalDokumenUpdate` date DEFAULT NULL,
  `deskripsiDokumen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_header_stok`
--

INSERT INTO `tbl_header_stok` (`idStok`, `tanggalDokumen`, `tanggalDokumenUpdate`, `deskripsiDokumen`) VALUES
('STOK0001', '2021-02-02', NULL, ''),
('STOK0002', '2021-03-24', NULL, ''),
('STOK0003', '2021-03-24', NULL, ''),
('STOK0004', '2021-03-24', NULL, ''),
('STOK0005', '2021-03-12', NULL, ''),
('STOK0006', '2021-03-12', NULL, ''),
('STOK0007', '2021-03-12', NULL, ''),
('STOK0008', '2021-03-12', NULL, ''),
('STOK0009', '2021-03-12', NULL, ''),
('STOK0010', '2021-03-12', NULL, ''),
('STOK0011', '2021-03-12', NULL, ''),
('STOK0012', '2021-03-12', NULL, ''),
('STOK0013', '2021-03-12', NULL, 'Document one day 13 One Again OK'),
('STOK0014', '2021-03-12', '2021-03-23', 'Document hari ini berkurang'),
('STOK0015', '2021-03-12', NULL, ''),
('STOK0016', '2021-03-12', NULL, ''),
('STOK0017', '2021-03-12', NULL, ''),
('STOK0018', '2021-03-12', NULL, ''),
('STOK0019', '2021-03-12', NULL, ''),
('STOK0020', '2021-03-12', NULL, ''),
('STOK0021', '2021-03-12', NULL, ''),
('STOK0022', '2021-03-12', NULL, ''),
('STOK0023', '2021-03-12', NULL, ''),
('STOK0024', '2021-03-12', NULL, ''),
('STOK0025', '2021-03-13', NULL, ''),
('STOK0033', '2021-03-14', NULL, ''),
('STOK0035', '2020-10-20', '2021-03-24', 'Dokumen stok hari ini berkurang'),
('STOK0036', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0038', '2021-03-14', NULL, '12222'),
('STOK0039', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0040', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0041', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0042', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0043', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0044', '2020-10-20', NULL, 'Dokumen stok hari ini '),
('STOK0046', '2021-03-15', NULL, ''),
('STOK0047', '2021-03-15', NULL, ''),
('STOK0048', '2021-03-15', NULL, ''),
('STOK0049', '2021-03-15', NULL, ''),
('STOK0050', '2021-03-15', NULL, ''),
('STOK0051', '2021-03-15', NULL, ''),
('STOK0052', '2021-03-15', NULL, ''),
('STOK0053', '2021-03-15', NULL, ''),
('STOK0054', '2021-03-15', NULL, ''),
('STOK0055', '2021-03-15', NULL, ''),
('STOK0056', '2021-03-15', NULL, ''),
('STOK0057', '2021-03-15', NULL, ''),
('STOK0058', '2021-03-15', NULL, ''),
('STOK0059', '2021-03-15', NULL, ''),
('STOK0060', '2021-03-15', NULL, ''),
('STOK0061', '2021-03-15', NULL, ''),
('STOK0062', '2021-03-15', NULL, ''),
('STOK0063', '2021-03-15', NULL, ''),
('STOK0064', '2021-03-17', NULL, 'Document prod 3 bertambah'),
('STOK0065', '2021-03-17', NULL, 'Document 003 berkurang'),
('STOK0066', '2021-03-17', NULL, 'asdasd'),
('STOK0067', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0070', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0071', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0075', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0076', '2021-03-17', NULL, 'Document Berkurang'),
('STOK0077', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0078', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0079', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0080', '2021-03-17', NULL, 'Document Berkurang'),
('STOK0081', '2021-03-17', NULL, 'Document Berkurang'),
('STOK0082', '2021-03-17', NULL, 'Document Berkurang'),
('STOK0085', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0086', '2021-03-17', NULL, 'Document Bertambah'),
('STOK0087', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0088', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0089', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0090', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0091', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0092', '2021-03-19', NULL, 'Document Bertambah'),
('STOK0093', '2021-03-19', NULL, 'Document Berkurang'),
('STOK0094', '2021-03-19', NULL, 'Document Berkurang'),
('STOK0096', '2021-03-19', NULL, 'Document Berkurang'),
('STOK0097', '2021-03-19', NULL, 'Document Berkurang'),
('STOK0098', '2021-03-21', NULL, 'Document Berkurang'),
('STOK0099', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0100', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0101', '2021-03-22', NULL, 'Document Bertambah'),
('STOK0102', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0103', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0104', '2021-03-22', NULL, 'Document Bertambah'),
('STOK0105', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0106', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0107', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0108', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0109', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0110', '2021-03-22', NULL, 'Document Bertambah'),
('STOK0111', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0112', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0113', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0114', '2021-03-22', NULL, 'Document Bertambah'),
('STOK0115', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0116', '2021-03-22', NULL, 'Document Berkurang'),
('STOK0117', '2021-03-23', NULL, ''),
('STOK0118', '2021-03-23', NULL, ''),
('STOK0119', '2021-03-23', NULL, ''),
('STOK0120', '2021-03-23', NULL, ''),
('STOK0121', '2021-03-23', NULL, ''),
('STOK0122', '2021-03-23', NULL, ''),
('STOK0123', '2021-03-23', NULL, ''),
('STOK0124', '2021-03-23', NULL, 'Document Bertambah'),
('STOK0125', '2021-03-24', NULL, 'Document Bertambah'),
('STOK0126', '2021-03-24', NULL, 'Document Berkurang'),
('STOK0127', '2021-03-24', NULL, 'Document Bertambah'),
('STOK0128', '2021-03-25', NULL, 'Document Bertambah'),
('STOK0129', '2021-03-26', NULL, 'Document Bertambah'),
('STOK0130', '2021-03-26', NULL, 'Document Bertambah'),
('STOK0131', '2021-03-26', NULL, 'Document Bertambah'),
('STOK0132', '2021-03-26', NULL, 'Nullam et lorem fringilla, venenatis ante vel, ultrices sapien. Fusce aliquet ligula turpis, in finibus dui tempus et. Vestibulum scelerisque fermentum dui et placerat. Fusce justo mauris, efficitur sit amet varius sed, ullamcorper at quam. Nam vulputate viverra lorem, vitae congue orci faucibus vitae. Nulla in diam at ex imperdiet eleifend a nec magna. Quisque tempor metus in arcu accumsan rhoncus. Sed arcu nisl, laoreet eleifend sapien id, accumsan scelerisque felis. Donec ullamcorper, velit sit amet gravida gravida, nunc nunc egestas orci, non fringilla quam quam imperdiet dui. Nullam justo purus, pulvinar id condimentum et, fermentum id dolor. Morbi suscipit tortor nec ultricies facilisis. Nullam pretium metus efficitur sodales sollicitudin. Aenean lectus nulla, tempus ut faucibus sit amet, auctor in ipsum. Praesent luctus lectus at ligula pulvinar, at accumsan odio eleifend. Maecenas pellentesque diam vel dapibus molestie.\n\nNam congue rhoncus ullamcorper. Proin rutrum nibh dui, vel consectetur ligula porta imperdiet. Nunc sed elit et diam scelerisque mattis. Cras vel interdum enim. Vivamus id odio sed purus egestas imperdiet. Nam in malesuada purus. Nam nibh eros, facilisis id porttitor sit amet, imperdiet eu nisi. Aenean ullamcorper neque velit. Donec commodo sit amet felis ut iaculis. Morbi et neque et dolor venenatis laoreet. Pellentesque a tempus felis. Donec ac risus tellus. Vivamus id ipsum posuere, viverra nibh nec, imperdiet leo. Integer facilisis mattis condimentum. Pellentesque id elit vel dolor sollicitudin scelerisque non vel lectus.\n\nSuspendisse interdum porta urna ut pretium. Nulla risus ex, gravida in nisl sed, malesuada fringilla enim. In fermentum eros eu risus eleifend, quis dictum ante ultrices. In molestie eget mauris quis hendrerit. Sed ut sem ac nisi cursus volutpat. Praesent semper elit eu lectus blandit consectetur. Vivamus risus metus, gravida feugiat nunc quis, egestas maximus mauris.\n\nEtiam viverra ipsum bibendum euismod malesuada. Nunc vehicula pretium sollicitudin. Quisque volutpat, elit sit amet dignissim facilisis, urna dui gravida ante, eget rutrum sem lorem eu turpis. Donec et aliquam quam, in ultrices ipsum. Proin varius nulla in libero porttitor posuere. Nullam vulputate porta lacus, in condimentum mi mattis pulvinar. Sed dapibus sed augue mattis finibus. Mauris pretium metus cursus purus aliquet, at auctor magna pretium. Mauris molestie consequat lacus, vitae blandit urna facilisis in. Vivamus tortor tellus, interdum id nulla id, hendrerit rutrum ante. Phasellus in risus dolor. Donec efficitur eleifend quam, sed viverra tortor vehicula a. Nulla tincidunt ut turpis quis sodales. Sed bibendum augue ac efficitur mattis.'),
('STOK0133', '2021-03-26', NULL, 'Document Berkurang'),
('STOK0134', '2021-03-26', NULL, 'Document Berkurang'),
('STOK0135', '2021-03-26', NULL, 'Document BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument BerkurangadsdasdsadddddddddddddddddddddDocument Berkurangadsdasdsaddddddddddddddddddddd');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_product`
--

CREATE TABLE `tbl_product` (
  `productId` varchar(100) NOT NULL,
  `productName` varchar(1000) NOT NULL,
  `productDescription` text NOT NULL,
  `productQty` int(11) NOT NULL DEFAULT 0,
  `status` int(1) NOT NULL COMMENT '0 = aktif\r\n1 = tidak aktif'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_product`
--

INSERT INTO `tbl_product` (`productId`, `productName`, `productDescription`, `productQty`, `status`) VALUES
('PROD0001', 'Nestle Carnation 370gr', 'sdsdssdsddsdkjhk', 12122353, 0),
('PROD0002', 'Nestle Acticor Banana 85ml', 'Nestle Acticor Banana 85ml merupakan minuman penurun kolesterol rasa pisang yang mengandung susu dengan rasa yang enak. Minuman penurun kolesterol ini membantu untuk menurunkan kolesterol dengan memiliki keunggulan; rendah lemak; Sumber Vitamin B1 dan B2; dan kaya akan sumber serat pangan. BPOM : MD 200913080007 Shelf life : 12 Bulan', 1568, 0),
('PROD0003', 'DANCOW Fortigro Susu UHT Stroberi Usia Sekolah 180ml', 'Dancow Strawberry Fortigro UHT 180 ml adalah susu segar dan merupakan sumber protein susu, kaya kalsium, vitamin, zat besi dan zink, serta kolin berperan untuk mendukung Si Buah Hati agar siap sekolah. Dancow Fortigro menjadi pilihan yang tepat untuk pertumbuhan dan perkembangan si buah hati.\n\nBPOM 400913031007\nShelf Life: 12 Bulan', 1206, 0),
('PROD0004', 'Kit Kat 2 Fingers 17g', 'Kit Kat 2 Fingers 17g dengan kualitas terbaik kini hadir untuk Anda. Dengan isian wafer renyah di bagian dalam bersalut coklat khas Kit Kat yang melegenda. BPOM ML 824309043006,Shelf Life: 12', 0, 1),
('PROD0005', 'Milo Nuggets 50gr', 'Milo Nuggets 25gr merupakan salah satu varian cokelat nugget dari Nestle Milo. Dikemas dalam plastik yang higienis, cemilan ini dibuat dalam bentuk kecil yang mudah untuk digigit dan dikunyah. Rasa crunchy malt yang lezat membuat Milo Nuggets praktis untuk menemani aktivitas Anda.', 1073, 0),
('PROD0006', 'Nestlé KOKO KRUNCH Cereal 170g', 'NESTLE KOKO KRUNCH Cereal 170g\nSereal sarapan gandum rasa coklat yang dahsyat. Dibuat dengan gandum utuh (whole grain), mengandung 5 Vitamin (B2, B3, B5, B6 dan B9), serta mengandung Kalsium dan Zat Besi.\nKandungan\n\nSumber Vitamin (B2, B3, B5, B6, B9).\nSerat Pangan\n\nBahan- Bahan pilihan\n\nSerealia (Tepung Gandum Utuh, Tepung Gandum, Semolina Jagung), Gula, Bubuk Kakao, Sari Malt (Barli), Minyak Nabati (Mengandung Antioksidan Askorbil Palmitat), Mineral, Garam Beryodium, Pengemulsi Lesitin Kedelai, Perisa Identik Alami Vanilin, Premiks Vitamin Mineral dan Antioksidan Tokoferol.Dapat mengandung tree nuts (almond and hazelnut) dan susu.\nSpesifikasi Produk e.g :\nJenis Produk: Cereal\nKemasan: Box\nUkuran : 170g', 990, 0),
('PROD0007', 'Nestle Koko krunch duo 170gr', 'Sereal Nestle Koko Krunch Duo Dengan gandum utuh\nRasa cokelat yang dahsyat\nDi lengkapi dengan Vit B2, B3, B5, B6, B9 Serta Zat Besi, Kalsium dan serat pangan\nSangat cocok untuk menjadi menu sarapan setiap hari\nBerat bersih : 170 g', 2827, 0),
('PROD0008', 'Doritos Snack 160gr', 'Deskripsi Doritos Snack160 Gr\n\nRasa yang tersedia\nDoritos Barbeque 160 Gr \nDoritos Nacho Cheese 160 Gr \nDoritos Roasted Corn 160 Gr \n \nTemukan kepuasan snacking dalam renyahnya sedan gigitan Doritos. Snack Tortila yang dibuat dengan jagung pilihan dan dipadu dengan bumbu yang lezat dari Doritos.', 712, 0),
('PROD0009', 'Doritos Nacho Cheese 150 Gr', 'Doritos Nacho Cheese 150 Gr merupakan snack tortilla dengan rasa nacho cheese yang sangat cocok untuk dinikmati bersama keluarga Anda. BPOM MD 273031058097. SHELF LIFE 12 bulan', 123, 0),
('PROD0010', 'Frisian Flag UHT Swiss Chocolate 115 ml [Gift]', 'Frisian Flag Family UHT Swiss Chocolate 115 ml adalah susu yang terbuat dari bahan-bahan berkualitas sehingga menghasilkan susu dengan berbagai kandungan vitamin dan zat besi yang baik bagi tubuh siapa saja.\n\nBPOM MD 400809039172\nShelf Life: 12 Bulan', 0, 1),
('PROD0011', 'Selamat Wafer Chocolate 18 Gr', 'Selamat Wafer Chocolate 18 Gr\nWAFER SELAMAT \nWAFER DENGAN KRIM COKLAT\nWAFER SELAMAT ECERAN 1000\n1 PAK ISI 20 PCS @18Gr', 101, 0),
('PROD0012', 'Cap Kapal Garam Beryodium 250 gr', 'Garam \"Cap Kapal\" adalah Garam konsumsi Beryodium ( 30 - 80 ppm ) yang menjadi Pelopor garam beryodium pertama semenjak 1978. Bahan Baku Garam yang digunakan oleh Garam \"Cap Kapal\" melalui pemilihan supplier yang ketat dan diproduksi berdasarkan Standart Nasional Indonesia untuk menjaga kualitas yang dihasilkan. Garam \"Cap Kapal\" sempurna untuk menambah rasa masakan maupun membuat kue serta dapat langsung dikonsumsi saat makan. Bahan baku yang digunakan berasal dari 100% lokal dan memiliki kemasan dengan 2 ukuran 250 gr dan 500 gr \n\nShelf life: 36 bulan \nBPOM: MD 255313001075', 15774, 0),
('PROD0013', 'SEDAAP TASTY Mie Instan Bakmi Ayam Bag 129GR', 'Detail Produk: \nMie Sedaap Tasty, Bakmi Enak Hanya Rp. 5000,- dengan Daging Ayam Asli, Tanpa Pengawet!\n\nBakmi Ayam pertama di Indonesia dengan tambahan Crunchy Chicken Bits, yang praktis!\nTekstur Mie yang kenyal, dipadu dengan daging ayam & jamur, bawang goreng dan kriuk ayam asli memberikan kamu sensasi kenikmatan yang lebih istimewa!\nMie Sedaap Tasty dikemas dalam kemasan praktis. Cukup direbus selama 2 menit, langsung bisa menikmati semangkuk Bakmi Ayam yang lezat dan nagih.\n\nSo Tasty!\n#ASLIDagingnya #MakeItTasty #EnaknyaBikinNagih', 750, 0),
('PROD0014', 'SEDAAP Mie Instan Soto Isi 5 Bag 75GR', 'Detail Produk: Mie instant kuah rasa Soto, isi 5 pcs dalam 1 pack kemasan bag\n\nCara penyajian:- rebus mie sekitar 3 menit hingga mi matang. -siapkan minyak, bumbu dan cabe powder di mangkok terpisah. -campurkan mie dan kuah bersama bumbu yang sudah disediakan. - beri taburan koya di atasnya. Mie Sedaap Soto Spesial siap dihidangkan\nIsi kemasan: 75 Gr\n\nKEUNGGULAN:\n1. tekstur mi yang kenyal\n2. Dilengkapi dengan taburan koya dan aroma jeruk nipis', 5, 0),
('PROD0015', 'SEDAAP Mie Instan Goreng Isi 5 Bag 90GR', 'Detail Produk: mie goreng instant dalam kemasan bag, dibungkus dalam 1 pack, isi 5\n\nCara penyajian:\n\nIsi kemasan: 90 Gr\n\nKEUNGGULAN:\n1. tekstur mi yang kenyal\n2. dilengkapi dengan kriuk dari bawang goreng asli, pertama di Indonesia', 3400, 0),
('PROD0016', 'Mie ABC Cup Pedas Nampol 80 gr', 'Mie ABC Cup Pedas Nampol...pedasnya Nampol abisssss', 6400, 1),
('PROD0017', 'Gaga mie cup extra pedas jalapeno', 'Free packing dus\n\nMie instan persembahan Gaga yang hadir dengan varian rasa extra pedas jalapeno yang pedasnya akan membuat anda ingin menyantapnya lagi, dan lagi. Cocok untuk anda penikmat makanan pedas. Mudah dan praktis untuk disajikan.', 1090, 0),
('PROD0018', 'saus saos sambal cabe rawit gaga botol plastik', 'GAGA SAMBAL EXTRA HOT DAN SAMBAL CABE RAWIT BOTOL PLASTIK 140ML (PCS)', 200, 0),
('PROD0019', 'Bawang goreng kuang 25g', 'BAWANG GORENG RENYAH KUANG CRUNCHY GURIH\nNetto. 25 Gram\n\nDetail Produk :\n- Bawang goreng oven\n- Dipanggang dengan oven dan tanpa tepung\n- Lebih sehat dan kaya antioksidan.\n- Memiliki rasa yang lezat\n- Terbuat dari bawang pilihan.\n- Dikemas praktis, mudah dibawa untuk makan siang di kantor, bekal ke sekolah, piknik dan lain sebagainya.\n- Dipadukan dengan nasi hangat serta cocok untuk cemilan dan teman makan Anda\n\nBawang goreng kuang adalah bawang goreng yg dipanggang dengan oven dan tanpa tepung. Sehat dan kaya akan antioksidan, serta memiliki rasa yg lezat. Terbuat dari bawang pilihan dan dikemas dengan praktis sehingga mudah  dibawa untuk makan siang di kantor, bekal ke sekolah, piknik dan lain sebagainya.', 1081, 0),
('PROD0020', 'Mie Gaga 100 Extra Pedas Kekinian Jalapeno / Soto / Lada Hitam', 'Gaga 100 Mie Instan\nPedas seperti Samyang !\n\nTerdiri dari 4 pilihan varian :\n- Goreng Lada Hitam (level 3)\n- Goreng Jalapeno (level 5)\n- Kuah Soto (level 2)\n- Kuah Jalapeno (level 5)\n- Goreng Chipotle (level 3) \n\nNetto : Kuah 75 Gram / Goreng 85 Gram', 9020, 0),
('PROD0021', 'indomie rasa kari Ayam', 'indomie rasa kari Ayam', 0, 1),
('PROD0022', 'Fitmee Mie Shirataki Shiratake Sirataki Konnyaku Instan Halal', 'Fitmee Mie Shirataki Instan dan Halal\n\n1. Mie instan konyaku pertama di Indonesia \n2. Varian rasa Goreng Korea / Rasa Soto / Carbonara / Ayam Bawang / Bolognese / Goreng Sapi\n3. Rendah kalori\n4. Tinggi fiber dan No Cholesterol. \n5. Cocok untuk anda yang sedang berdiet.  ', 0, 1),
('PROD0023', 'Handphone', 'as', 0, 1),
('PROD0024', 'AAA', 'Prudct', 1222, 1),
('PROD0025', 'Aaaaaa', 'Prudct', 0, 1),
('PROD0026', 'Tropicana Slim Canola Oil 946ml', 'Tropicana Slim Canola Oil 946ml terbuat dari 100% biji Kanola pilihan, tinggi vitamin E (antioksidan), tinggi omega 3 dengan kandungan lemak jenuh paling rendah dibandingkan dengan minyak goreng lainnya ini membuat Tropicana Slim Minyak Kanola pilihan tepat Anda dan keluarga. Minyak Kanola Tropicana Slim cocok digunakan untuk salad dressing, menumis, memanggang dan menggoreng. Kesehatan jantung yang tak ternilai harganya menginspirasi Tropicana Slim untuk memformulasikan minyak Kanola yang tinggi vitamin E dan juga rendah lemak jenuh untuk kesehatan jantung Anda.', 870, 0),
('PROD0027', 'Blommie TTF NAFISA KECAP Organik Non MSG', 'Kecap Manis Sehat (Healthy Sweet Soy Sauce) dari Nafisa merupakan varian kecap sehat yang dibuat dari 100 bahan bahan alami. Kecap ini dibuat dari 100 kacang kedelai hitam organik pilihan dan aneka rempah rempah alami lainnya. Dengan hanya menggunakan perasan pertama kedelai hitam pilihan, Kecap ini memiliki rasa yang nikmat dan tekstur yang kental untuk melezatkan makanan Anda.', 1187, 0),
('PROD0028', 'Blommie TTF Organik Brown sugar cube Rendah Kalori 250g gula merah organik', 'Organik Brown sugar cube Rendah Kalori 250g gula merah organik 250g', 0, 0),
('PROD0029', 'Diabetasol Snack Camilan Diabet Cemilan Wafer 2x50 gr / Wafer Diabetes Sehat Rendah Gula', 'Baru! camilan sehat berupa wafer dengan cokelat asli yang tinggi serat. Cocok untuk dijadikan meal plan harian karena camilan memiliki peran penting dalam menjaga kesehatan diabetesi karena memperbaiki respon glikemik post-pradial, sensitivitas insulin, sehingga kadar gula darah menjadi lebih optimal.\n\nSpesifikasi:\n1. Camilan wafer rasa cokelat\n2. Kemasan 100gr (2 saset @50gr)\n', 700, 0),
('PROD0030', 'KUKIMOND Almond And Oat Cookies / Cemilan Sehat', 'Yummy\'s Kukimond\n\nPremium Almond dan Oat Cookies\n\nKukimond merupakan cemilan yang berguna untuk mengentalkan ASI . JUga bisa dikonsomsi siapa saja dan tentunya rasa tak kalah enak dengan almond yang lain\n\nKomposisi : premium almond, oat, palm sugar, terigu butter. \n\nKemasan : 180gr\nDep Kes No.', 9877, 0),
('PROD0031', 'KUKIMOND || PREMIUM ALMOND & OAT COOKIES', 'Premium Almond & Oat Cookies\n\n\nTerbuat dari Almond & Oat pilihan, di olah dengan citarasa homemade dan penuh dengan sentuhan butter.\n\nSangat cocok untuk menemani camilan sehat anda di pagi, siang maupun sore hari.', 0, 0),
('PROD0032', 'Almond Roasted 1 kg GRADE A PREMIUM / Almond Panggang GRATIS CHIA', 'Roasted Almond PREMIUM  GRADE A.\nTerdaftar di Dinkes PIRT. \n\nJAMINAN GARING, BILA ADA YG KURANG MEMUASKAN, \nSILAHKAN DIRETUR, KITA GANTI TERMASUK ONGKIRNYA. \n\n\nGRADE A, gurih renyah , tdk gosong atau melempem. expired dua tahun.', 900, 0),
('PROD0033', 'Mola Kuaci Kupas Panggang / kuaci bunga matahari / Sunflower Seed', 'Sdh dipanggang dengan berbagai rasa, manfaat kuaci:\n1. Sumber vitamin E , untuk meningkatkan imun, menjaga dari virus.\n2. Mencegah kanker\n3. Kesehatan tulang\n4. Menurunkan kolesterol\n5. Menyehatkan kulit\n6. Anti oksidan\n7, untuk kesehatan jantung', 760, 0),
('PROD0034', 'Sunflower Seed ROASTED 1 kg / Biji Bunga Matahari Panggang GRATIS CHIA', 'Berikut adalah manfaat biji bunga matahari yang dapat kita konsumsi secara teratur dan bisa dimasukkan dalam daftar diet bagi Anda yang saat ini menjalani diet.\n\n1. Kesehatan Jantung\nBiji bunga matahari merupakan sumber vitamin E yang luar biasa. Fungsi vitamin E dalam tubuh sangat penting dalam pencegahan penyakit kardiovaskular dengan perannya melawan senyawa radikal bebas. Dengan mengkonsumsi seperempat cangkir biji bunga matahari, akan diperoleh sembilan puluh persen nilai harian kebutuhan akan vitamin E.', 0, 0),
('PROD0035', 'Sunflower Seed MENTAH 1 kg / biji matahari kupas MENTAH 4.9', 'Sunflower seed 1000gr\nKualitas premium.\nSuper Food untuk menurunkan kolesterol dan anti oksidan tinggi untuk peremajaan kulit \n\n#sunflowerseed #sunflowerseeds #kuaci #kuacikupas', 0, 0),
('PROD0036', 'Pumpkin seed 1 kg MENTAH/ biji labu 1 kg GRATIS CHIA', 'Salah satu superfood yang kini banyak dikonsumsi, \nManfaat Pumpkin Seed antara lain:\n1. Menurunkan Tingkat Kolesterol Jahat\n2. Mengontrol Gula Darah\n3. Membantu dalam Mengatur Suasana Hati\n4. Meredakan Arthritis\n5. Meningkatkan Kesehatan Kandung Kemih dan Prostat\n6. Melindungi Tulang\n7. Meningkatkan Kesehatan Jantung\n8. Membantu Memperoleh Tidur yang Lebih Berkualitas\n', 0, 0),
('PROD0037', 'Sunflower seed 250gr kuaci 250 gram', 'Biji bunga matahari adalah makanan yang sangat baik untuk nilai kecukupan gizi dan kita sering menganggap sebagai makanan ringan sehat, biji bunga matahari adalah sumber yang sangat baik dari minyak tak jenuh ganda dan yang membuat biji bunga matahari adalah makanan yang bagus untuk kesehatan jantung. Tapi selain itu biji bunga matahari adalah sumber besar nutrisi berharga lainnya juga.', 0, 0),
('PROD0038', '(SELLER RESMI) ROTI BLUDER COKRO MADIUN ASLI MINIMAL ORDER 10 PCS (1 KOTAK)', 'Keuntungan order bluder cokro di toko GRIYA HANIFAH:\n1. Harga terjangkau\n2. PACKING dilapisi kardus coklat\n3. Produk original cokro\n4. Bluder fresh produksi saat pengiriman', 0, 0),
('PROD0039', 'BLUDER COKRO KRISPI ISI 40 PCS', 'Ready stok Bluder krispi cokro.\n\nSalah satu produk Bluder Cokro Madiun yaitu Bluder krispi. Rasanya renyah manis, cocok untuk teman minum teh dan kopi.\nTekstur mirip roti bagelen. \n\n1 box isi 10 plastik, masing masing plastik ada 4 pcs.\njadi total ada 40 pcs dalam 1 box.\n\n1 kg bs muat 4 box\n\n#bluderkrispi\n#bludercokro\n#bludercokromadiun', 800, 0),
('PROD0040', 'Bluder KRISPI Cokro isi 40 slice lembut dan enak asli Bluder Cokro Madiun', '==Reseller/Agen resmi Bluder Cokro Madiun==\n\nSelamat berbelanja kaa...\nKalau selama ini Bluder dikenal dengan teksturnya yang lembut, kali ini ada versi krispinya.\n\nBerat Bluder Krispi 1box adalah 170 gr netto\n1 kg pengiriman, muat 4 Bluder Krispi\n\nSABTU dan MINGGU tetap ada pengiriman (kecuali JNE)', 0, 0),
('PROD0041', 'ROTI SOBEK (AGEN RESMI BLUDER COKRO MADIUN)', 'Salah satu varian produk dari Bluder Cokro yaitu roti sobek.\n\nRotinya lembut, pas dipakai teman minum teh, kopi dan lain lain. \n\nAda 3 rasa dalam satu roti. Tidak bisa pilih rasa ya.\nLihat slide ke 2 untuk mengetahui varian rasa apa saja dalam roti kasur tersebut.\n\nAdonannya sama seperti Bluder ya, jadi lembut, lumer di mulut.\nSilahkan dicoba, pasti ingin lagi dan lagi.\n\nPerhatikan lamanya pengiriman yang dipilih.\nProduk makanan ini tidak menerima retur ya.', 0, 0),
('PROD0042', 'BLUDER COKRO - BLUDER KOE (ORDER KELIPATAN 6 PCS) - OLEH-OLEH KHAS MADIUN - TERMURAH', 'PEMBELIAN MINIMAL 6 PCS (FREE KARDUS) DAN KELIPATANNYA (6, 12, 18, dst)\n\nPEMBELIAN DIBAWAH 6 PCS MOHON MAAF TIDAK KAMI LAYANI🙏🙏🙏\n\nDisarankan menggunakan ekspedisi J&T Express agar cepat sampai tujuan. \n\n1 kg muat 12 pcs bluder (2 kotak)', 0, 1),
('PROD0043', 'Ma Ling Luncheon Pork 397 gr TTS Canned / Daging Ham Babi Maling', 'Merk TTS ( non halal )\nStock ready selalu ya 😊\nEXP 2023\n\nBerat bersih 397gram\n\nJika di perjalanan ada yang pecah atau rusak, kami tidak bertanggung jawab di karenakan packing sudah seaman mungkin\n\nTambah bubble:\nhttps://shopee.co.id/product/104640957/2205018543?smtt=0.0.9\n\nMenerima reseller & droshipper\nGrosiran chat us untuk lebih detail\n\n===============\nMOHON DIBACA:\n\nSEMUA PERALATAN DAPUR MULAI DIKIRIM JM 1 atau 2 SIANG YAA🙂\n\nTOKO KAMI TUTUP JAM 4 SORE MAKA DARI ITU\nORDERAN\n\nPAKAI GO SEND/GRAB :\n>SENIN-SABTU MAKSIMAL JAM 1 SIANG\n>MINGGU TIDAK ADA PENGIRIMAN\n\nORDER PAKAI JNE TIKI J&T SICEPAT :\n>SENIN-JUMAT MAKSIMAL JAM 1 SIANG\n>SABTU & MINGGU TIDAK ADA PENGIRIMAN\n\nRESI DI INPUT PADA MALAM HARI ATAU H+1 (MOHON UNTUK TDK KEJAR RESI)', 0, 0),
('PROD0044', 'Red Boat Pickled Lettuce 182gr / Acar Sawi Selada Chaisim Kaleng', '182gr\n\nJika di perjalanan ada yang pecah atau rusak, kami tidak bertanggung jawab di karenakan packing sudah seaman mungkin\n\nTambah bubble:\nhttps://shopee.co.id/product/104640957/2205018543?smtt=0.0.9\n\nMenerima reseller & droshipper\nGrosiran chat us untuk lebih detail\n===============\nMOHON DIBACA:\n\nSEMUA PERALATAN DAPUR MULAI DIKIRIM JM 1 atau 2 SIANG YAA🙂', 0, 0),
('PROD0045', 'kjhjh', 'hjhjhh', 0, 1),
('PROD0046', 'Handphoneq2wq', 'sd', 0, 1),
('PROD0047', 'TAUCO / TAU CO / TAUCO MIMIE / TAUCO PONTIANAK', 'Ready Grab/Gojek \n\nTAUCO / TAU CO / TAUCO MIMIE ASLI KALIMANTAN \n\nTAUCO MASIH TERSEGEL DAN MASIH AMAN \nEXP TAHUN 2021\n\nUNTUK PEMBELIAN DI LUAR ETALASE BISA DI INBOX \n\nSELAMAT MEMBELI , KAMCIA', 0, 1),
('PROD0048', 'Cincalok Udang Premium Cencalok Malaka Hekoi He Koi - Ha Koi Hakoi Higienis Kualitas Terbaik', 'Cincalok Udang Premium - Cencalok Malaka - He Koi - Ha Koi Kalimantan Higienis, Tidak Banyak Airnya dan Tidak Terlalu Asin\n\nCincalok adalah makanan khas Kalimantan Barat berupa udang  yang difermentasi.\nBahan makanan ini digunakan untuk membuat sambal dan rasanya yang asin akan membuat anda ketagihan sekali mencobanya', 0, 1),
('PROD0049', 'LUNCH BOX PAPER (MIN ORDER 50) TRAY PAPER KERTAS COKLAT KRAFT KOTAK MAKAN TAKEAWAY POLOS BROWN', 'FULL LAMINASI & MODEL LIPAT\n\nADA JUGA MODEL LANGSUNG PAKAI & SUDAH DILIPAT = > LIHAT DI VARIASI \n\nBerat per pcs 31 gram mengikuti ukuran  large karena tidak dapat diubah per item, untuk berat ukuran lebih kecil yg lebih akurat silahkan beli di etalase toko kami.\n\nUNTUK BERAT YANG LEBIH AKURAT SIZE XS & SMALL = https://shopee.co.id/LUNCH-BOX-SMALL-XTRA-SMALL-KOTAK-DUS-TAKOYAKI-DIMSUM-SIOMAY-(1-KG-DAPAT-50-PCS-)-i.109678288.3548906892', 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `idUser` varchar(100) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tbl_user`
--

INSERT INTO `tbl_user` (`idUser`, `username`, `email`, `password`) VALUES
('54fd1c06-990d-42fc-baba-3ff1413aca01', 'amal13', 'amal@gmail.com', '$2a$10$owfDkjO1BbKJYzLzmRP4UOQqgkOVs4U1G1/z13rPfRGPtfSqgHPvC'),
('58c25920-f393-409b-bce3-67dd7490bd4c', 'amal1888', 'amal@gmail.com', '$2a$10$GBeADGq6CDTycIPiW8VtmuG6EGlSonN.WY7aAuwtPdXMxhlSuSRfu'),
('fd7240eb-cf56-48e6-abb9-96f3d456c016', 'amal12', 'amal@gmail.com', '$2a$10$wF8bAjHb.whRY3BbQmRHQ.MgKXxurTHM.JYw4.X0cKh0WS5IOUZAe');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_detail_stok`
--
ALTER TABLE `tbl_detail_stok`
  ADD PRIMARY KEY (`idDetailStok`),
  ADD KEY `FK_StockDetail` (`idStok`),
  ADD KEY `FK_ProductDetail` (`idProduct`);

--
-- Indeks untuk tabel `tbl_header_stok`
--
ALTER TABLE `tbl_header_stok`
  ADD PRIMARY KEY (`idStok`);

--
-- Indeks untuk tabel `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`productId`);

--
-- Indeks untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`idUser`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_detail_stok`
--
ALTER TABLE `tbl_detail_stok`
  ADD CONSTRAINT `FK_ProductDetail` FOREIGN KEY (`idProduct`) REFERENCES `tbl_product` (`productId`),
  ADD CONSTRAINT `FK_StockDetail` FOREIGN KEY (`idStok`) REFERENCES `tbl_header_stok` (`idStok`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2022 a las 04:55:17
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8_bin NOT NULL,
  `comment` varchar(100) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL DEFAULT '2022-08-24',
  `updatedAt` date NOT NULL DEFAULT '2022-08-24'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `password` varchar(30) COLLATE utf8_bin NOT NULL,
  `img` text COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL DEFAULT '2022-08-26',
  `updatedAt` date NOT NULL DEFAULT '2022-08-26'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `email`, `password`, `img`, `createdAt`, `updatedAt`) VALUES
(29, 'Ejemplo', 'ejemplo@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(30, 'Ejemplo 1', 'ejemplo1@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(31, 'Ejemplo 2', 'ejemplo2@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(32, 'Ejemplo 3', 'ejemplo3@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(33, 'Ejemplo 4', 'ejemplo4@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(34, 'Ejemplo 5', 'ejemplo5@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(35, 'Ejemplo 6', 'ejemplo6@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26'),
(36, 'Ejemplo 7', 'ejemplo7@gmail.com', 'ejemplo@12345', 'texto de ejemplo', '2022-08-26', '2022-08-26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

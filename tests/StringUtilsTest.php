<?php

use StringUtils; 
use function StringUtils\capitalize;

if (StringUtils\capitalize('hello') !== 'Hello') {
  throw new \Exception('Функция работает неверно!');
}

if (StringUtils\capitalize('') !== '') {
  throw new \Exception('Функция работает неверно!');
}

echo 'Все тесты пройдены!';

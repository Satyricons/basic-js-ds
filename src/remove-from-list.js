function removeKFromList(l, k) {
  // 1. Удаляем элементы с значением k в начале списка (сдвигаем голову)
  while (l !== null && l.value === k) {
    l = l.next;
  }
  
  // Если список стал пустым после удаления головы
  if (l === null) {
    return null;
  }
  
  // 2. Проходим по оставшемуся списку и удаляем элементы в середине/конце
  let current = l;
  while (current.next !== null) {
    if (current.next.value === k) {
      // "Перепрыгиваем" через узел, который нужно удалить
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  
  return l;
}

module.exports = {
  removeKFromList
};
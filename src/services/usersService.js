const users = [
  { id: 101, name: 'طه', role: 'Frontend Developer', city: 'الطائف' },
  { id: 102, name: 'أحمد', role: 'Backend Developer', city: 'جدة' },
  { id: 103, name: 'سارة', role: 'UI/UX Designer', city: 'الرياض' },
  { id: 104, name: 'نورة', role: 'Mobile Developer', city: 'مكة' },
];

export function getUsers() {
  return users;
}

// id القادم من الرابط يكون نص (string) لذلك نحوّله لرقم
export function getUserById(id) {
  return users.find((user) => user.id === Number(id));
}

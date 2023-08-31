interface User {
    name: string;
    id: number;
    email: string;
}
let users: User[] = [
    { name: "a", id: 1, email: "a@a.a" },
    { name: "b", id: 1, email: "b@a.a" },
    { name: "c", id: 1, email: "c@a.a" }
]
console.log(users);

let [user1, user2] = users;
console.log(user1);
console.log(user2);



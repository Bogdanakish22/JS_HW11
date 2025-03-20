const bankAccount = {
  ownerName: "John Doe",
  accountNumber: "123456789",
  balance: 1000,

  deposit() {
    let amount = parseFloat(prompt("Скільки грошей ви хочете покласти на рахунок?"));
    if (!isNaN(amount) && amount > 0) {
      this.balance += amount;
      alert(`Ви поповнили рахунок на ${amount} грн. Баланс: ${this.balance} грн.`);
    } else {
      alert("Некоректна сума.");
    }
  },

  withdraw() {
    let amount = parseFloat(prompt("Скільки грошей ви хочете зняти з рахунку?"));
    if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      alert(`Ви зняли ${amount} грн. Баланс: ${this.balance} грн.`);
    } else {
      alert("Некоректна сума або недостатньо коштів.");
    }
  }
};


if (confirm("Хочете поповнити рахунок?")) {
  bankAccount.deposit();
} 
if (confirm("Хочете зняти гроші?")) {
  bankAccount.withdraw();
}


const weather = {
  temperature: parseFloat(prompt("Введіть температуру в градусах Цельсія:")),
  humidity: 60,
  windSpeed: 15,

  isFreezing() {
    return this.temperature < 0;
  }
};


if (weather.isFreezing()) {
  alert("Температура нижче 0 градусів Цельсія.");
} else {
  alert("Температура вище або рівна 0 градусів Цельсія.");
}


const user = {
  name: "Alice",
  email: "alice@example.com",
  password: "secure123",

  login() {
    let inputEmail = prompt("Введіть email:");
    let inputPassword = prompt("Введіть пароль:");
    
    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Вхід виконано успішно!");
    } else {
      alert("Неправильний email або пароль.");
    }
  }
};


user.login();


const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  isHighRated() {
    return this.rating > 8;
  }
};


console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік випуску: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);
console.log(`Фільм має високий рейтинг? ${movie.isHighRated()}`);

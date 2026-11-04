// 1-masala
const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 }
];

const expensiveProducts = products.filter(product => product.price > 800);

console.log(expensiveProducts);
// ===============================================================================================
// 2-masala
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 }
];

// forEach yordamida konsolga chiqarish
students.forEach(student => {
  console.log(`${student.name} – ${student.score} ball;`);
});\
// =======================================================================================================
// 3-masala
// ============================================================================================================
// Boshlang'ich ma'lumotlar
const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 }
];

// map() yordamida har bir mahsulotning chegirmali narxini hisoblab yangi massiv qaytaramiz
const productsWithFinalPrice = products.map(product => {
  const finalPrice = product.price - (product.price * product.discount / 100);
  
  return {
    name: product.name,
    price: product.price,
    discount: product.discount,
    finalPrice: finalPrice
  };
});

// Natijani tekshirish uchun konsolga chiqaramiz
console.log(productsWithFinalPrice);
// ==========================================================================================================
// 4-masala
// Boshlang'ich ma'lumotlar
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 }
];

// find() metodi yordamida id si 4 ga teng bo'lgan talabani qidiramiz
const foundStudent = students.find(student => student.id === 4);

// Talaba topilgan yoki topilmaganini tekshirib, shartga ko'ra xabar chiqaramiz
if (foundStudent) {
  console.log(`Ismi: ${foundStudent.name}, Balli: ${foundStudent.score}`);
} else {
  console.log("Talaba topilmadi");
}
// ===============================================================================================================
// 5-masala
// Boshlang'ich ma'lumotlar
const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 }
];

// some() metodi yordamida kamida bitta mahsulotning stock qiymati 0 ga tengligini tekshiramiz
const hasOutOfStock = products.some(product => product.stock === 0);

// Natijaga qarab mos xabarni chiqaramiz
if (hasOutOfStock) {
  console.log("Omborda tugagan mahsulot bor");
} else {
  console.log("Barcha mahsulotlar mavjud");
}
// ===================================================================================================================
// 6-masala
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 }
];

// every() metodi yordamida barcha talabalar 60 balldan ko'p yoki teng olganini tekshiramiz
const allPassed = students.every(student => student.score >= 60);

if (allPassed) {
  console.log("Barcha talabalar imtihondan o'tgan (true)");
} else {
  console.log("Barcha talabalar imtihondan o'ta olmagan (false)");
}
//==========================================================================================================
//7-masala
const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 }
];

// sort() yordamida narxlarni o'sish tartibida saralaymiz
products.sort((a, b) => a.price - b.price);

// Natijani konsolga chiqaramiz
products.forEach(product => {
  console.log(`${product.name}: ${product.price}$`);
});
// =================================================================================================================
// 8-masala
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 }
];

const resultStudents = students
  .filter(student => student.score >= 70) // 1. 70 va undan yuqori ball olganlar
  .sort((a, b) => b.score - a.score)      // 2. Ballar bo'yicha kamayish tartibida saralash
  .map(student => ({                      // 3. Faqat ism va ballni olish
    name: student.name,
    score: student.score
  }));

console.log(resultStudents);
// ===================================================================================================================
// 9-masala
const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 }
];

// 1. Chegirmasi 10% yoki undan yuqori bo'lganlarni ajratamiz
const discountedProducts = products
  .filter(product => product.discount >= 10)
  .map(product => {
    const finalPrice = product.price - (product.price * product.discount / 100);
    return {
      name: product.name,
      finalPrice: finalPrice
    };
  });

console.log("Chegirmali mahsulotlar:", discountedProducts);

// 2. Chegirmadan keyingi narxi 800 dollardan yuqori bo'lgan mahsulot bor-yo'qligini tekshiramiz
const hasExpensiveFinalPrice = discountedProducts.some(product => product.finalPrice > 800);

console.log("Chegirmadan keyingi narxi 800$ dan yuqori bo'lgan mahsulot bormi?", hasExpensiveFinalPrice);
// ==================================================================================================================================
// 10-masala
const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 }
];

// 1, 2, 3-qadamlar: filter, sort va map
const topStudents = students
  .filter(student => student.score >= 60)
  .sort((a, b) => b.score - a.score)
  .map(student => ({ name: student.name, score: student.score }));

console.log("Saralangan o'quvchilar:", topStudents);

// 4-qadam: find() bilan 90 dan yuqori ball olgan birinchi talabani topish
const topScorer = topStudents.find(student => student.score > 90);
console.log("90 dan yuqori olgan birinchi talaba:", topScorer);

// 5-qadam: some() bilan kamida bitta talaba 90 dan yuqori ball olganini tekshirish
const hasAbove90 = students.some(student => student.score > 90);
console.log("90 dan yuqori olgan talaba bormi?:", hasAbove90);

// 6-qadam: every() bilan barcha talabalar 40 yoki undan yuqori ball olganini tekshirish
const allAbove40 = students.every(student => student.score >= 40);
console.log("Hamma 40 balldan yuqori olganmi?:", allAbove40);

// 7-qadam: forEach() yordamida har bir talabaning ismi va ballini alohida chiqarish
console.log("--- Talabalar ro'yxati ---");
topStudents.forEach(student => {
  console.log(`${student.name} - ${student.score} ball`);
});
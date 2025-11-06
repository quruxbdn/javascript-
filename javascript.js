// ===== Navigation History for Back Button =====
let navigationHistory = ['home'];

// ===== Navigation Function =====
function showSection(sectionName) {
  // Hide all sections
  document.getElementById('home-section').style.display = 'none';
  document.getElementById('chapters-section').style.display = 'none';
  document.getElementById('assignments-section').style.display = 'none';
  document.getElementById('useraccount-section').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';
  
  // Add to navigation history
  navigationHistory.push(sectionName);
  if (navigationHistory.length > 10) {
    navigationHistory.shift();
  }
  
  // Show the selected section
  if (sectionName === 'home') {
    document.getElementById('home-section').style.display = 'block';
  } else if (sectionName === 'chapters') {
    document.getElementById('chapters-section').style.display = 'block';
  } else if (sectionName === 'assignments') {
    document.getElementById('assignments-section').style.display = 'block';
  } else if (sectionName === 'useraccount') {
    document.getElementById('useraccount-section').style.display = 'block';
  } else if (sectionName === 'about') {
    document.getElementById('about-section').style.display = 'block';
  } 
}

// ===== Back Button Function =====
function goBack() {
  if (navigationHistory.length > 1) {
    navigationHistory.pop(); // Remove current section
    let previousSection = navigationHistory[navigationHistory.length - 1];
    showSection(previousSection);
  } else {
    showSection('home');
  }
}

// ===== Clear Chapter/Assignment Content Function =====
function clearChapterContent() {
  if (document.getElementById("chapterContent")) {
    document.getElementById("chapterContent").innerHTML = "";
  }
  if (document.getElementById("assignmentContent")) {
    document.getElementById("assignmentContent").innerHTML = "";
  }
}

// ===== Open Chapter/Assignment Function =====
function openChapter(chapterName) {
  const chapter = chapterName;
  
  // Determine which content area to use
  let isAssignment = chapter.startsWith('assignment');
  let content = isAssignment 
    ? document.getElementById("assignmentContent") 
    : document.getElementById("chapterContent");
  
  // Clear the other content area
  if (isAssignment && document.getElementById("chapterContent")) {
    document.getElementById("chapterContent").innerHTML = "";
  } else if (document.getElementById("assignmentContent")) {
    document.getElementById("assignmentContent").innerHTML = "";
  }

  if (chapter === "chapter1") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Chapter 1: JavaScript Basics</h2>
      
      <h3>1️⃣ Console.log</h3>
      <pre>
console.log('Hello World');
      </pre>
      <button class="run-btn" onclick="runCh1Ex1()">▶ Run Example 1</button>
      <div id="ch1ex1" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>2️⃣ Variable Declaration</h3>
      <pre>
let x = 5;
      </pre>
      <button class="run-btn" onclick="runCh1Ex2()">▶ Run Example 2</button>
      <div id="ch1ex2" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>3️⃣ Variable Operations</h3>
      <pre>
let x = 5;
let y = x + 2;
console.log(y);
      </pre>
      <button class="run-btn" onclick="runCh1Ex3()">▶ Run Example 3</button>
      <div id="ch1ex3" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>4️⃣ String Variable</h3>
      <pre>
let name = 'ubah';
console.log(name);
      </pre>
      <button class="run-btn" onclick="runCh1Ex4()">▶ Run Example 4</button>
      <div id="ch1ex4" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>5️⃣ Complete Example</h3>
      <pre>
let x = 5;
let y = x + 2;
let name = 'ubah';
console.log('Name: ' + name);
console.log('Value of y: ' + y);
      </pre>
      <button class="run-btn" onclick="runCh1Ex5()">▶ Run Example 5</button>
      <div id="ch1ex5" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
    `;
  } else if (chapter === "chapter2") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Chapter 2: If-Else Statements</h2>
      
      <h3>1️⃣ Simple if statement</h3>
      <pre>
let age = 19;
if (age >= 18) {
  console.log("Warda is an adult 👩");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex1()">▶ Run Example 1</button>
      <div id="ch2ex1" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>2️⃣ if...else statement</h3>
      <pre>
let tired = true;
if (tired) {
  console.log("Warda needs some rest 😴");
} else {
  console.log("Warda is full of energy 💪");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex2()">▶ Run Example 2</button>
      <div id="ch2ex2" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>3️⃣ if...else if...else</h3>
      <pre>
let mood = "happy";
if (mood === "happy") {
  console.log("Warda is smiling 😊");
} else if (mood === "sad") {
  console.log("Warda needs some motivation 💖");
} else {
  console.log("Warda is thinking deeply 🤔");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex3()">▶ Run Example 3</button>
      <div id="ch2ex3" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>4️⃣ Checking even or odd number</h3>
      <pre>
let number = 7;
if (number % 2 === 0) {
  console.log(number + " is even");
} else {
  console.log(number + " is odd");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex4()">▶ Run Example 4</button>
      <div id="ch2ex4" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>5️⃣ Checking high marks</h3>
      <pre>
let marks = 90;
if (marks >= 80) {
  console.log("Excellent job, Warda! 🏅");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex5()">▶ Run Example 5</button>
      <div id="ch2ex5" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>6️⃣ Temperature check</h3>
      <pre>
let temperature = 30;
if (temperature > 25) {
  console.log("It's hot outside ☀");
} else {
  console.log("Nice and cool day 🌤");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex6()">▶ Run Example 6</button>
      <div id="ch2ex6" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>7️⃣ Multiple conditions (AND)</h3>
      <pre>
let hasInternet = true;
let hasLaptop = true;
if (hasInternet && hasLaptop) {
  console.log("Warda can study online 💻");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex7()">▶ Run Example 7</button>
      <div id="ch2ex7" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>8️⃣ OR condition</h3>
      <pre>
let hungry = false;
let bored = true;
if (hungry || bored) {
  console.log("Time for a snack or activity 🍪🎨");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex8()">▶ Run Example 8</button>
      <div id="ch2ex8" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>9️⃣ NOT condition</h3>
      <pre>
let raining = false;
if (!raining) {
  console.log("Warda can go for a walk 🚶‍♀");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex9()">▶ Run Example 9</button>
      <div id="ch2ex9" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>🔟 Nested if</h3>
      <pre>
let day = "Friday";
let mood = "happy";
if (day === "Friday") {
  if (mood === "happy") {
    console.log("Perfect Friday mood 🎉");
  }
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex10()">▶ Run Example 10</button>
      <div id="ch2ex10" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣1️⃣ Check password</h3>
      <pre>
let password = "1234";
if (password === "1234") {
  console.log("Access granted 🔓");
} else {
  console.log("Wrong password ❌");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex11()">▶ Run Example 11</button>
      <div id="ch2ex11" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣2️⃣ Compare numbers</h3>
      <pre>
let a = 5;
let b = 8;
if (a < b) {
  console.log("a is smaller than b");
} else {
  console.log("a is not smaller than b");
}
      </pre>
      <button class="run-btn" onclick="runCh2Ex12()">▶ Run Example 12</button>
      <div id="ch2ex12" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
    `;
  } else if (chapter === "chapter2.1") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Chapter 2.1: Operators</h2>
      
      <h3>1️⃣ Addition (+)</h3>
      <pre>
let apples = 3;
let bananas = 2;
document.write("Total fruits: " + (apples + bananas) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp1()">▶ Run Example 1</button>
      <div id="op1" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>2️⃣ Subtraction (-)</h3>
      <pre>
let balance = 100;
let spent = 25;
document.write("Money left: " + (balance - spent) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp2()">▶ Run Example 2</button>
      <div id="op2" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>3️⃣ Multiplication (*)</h3>
      <pre>
let price = 10;
let quantity = 3;
document.write("Total price: $" + (price * quantity) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp3()">▶ Run Example 3</button>
      <div id="op3" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>4️⃣ Division (/)</h3>
      <pre>
let totalMarks = 400;
let subjects = 4;
document.write("Average marks: " + (totalMarks / subjects) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp4()">▶ Run Example 4</button>
      <div id="op4" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>5️⃣ Modulus (%)</h3>
      <pre>
let remainder = 17 % 5;
document.write("17 % 5 = " + remainder + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp5()">▶ Run Example 5</button>
      <div id="op5" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>6️⃣ Increment (++)</h3>
      <pre>
let day = 1;
day++;
document.write("Next day number: " + day + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp6()">▶ Run Example 6</button>
      <div id="op6" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>7️⃣ Decrement (--)</h3>
      <pre>
let stars = 10;
stars--;
document.write("Stars left: " + stars + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp7()">▶ Run Example 7</button>
      <div id="op7" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>8️⃣ Add and assign (+=)</h3>
      <pre>
let water = 5;
water += 2;
document.write("Glasses of water today: " + water + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp8()">▶ Run Example 8</button>
      <div id="op8" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>9️⃣ Subtract and assign (-=)</h3>
      <pre>
let energy = 100;
energy -= 30;
document.write("Energy left: " + energy + "%<br>");
      </pre>
      <button class="run-btn" onclick="runOp9()">▶ Run Example 9</button>
      <div id="op9" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>🔟 Multiply and assign (*=)</h3>
      <pre>
let points = 10;
points *= 3;
document.write("Triple points: " + points + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp10()">▶ Run Example 10</button>
      <div id="op10" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣1️⃣ Divide and assign (/=)</h3>
      <pre>
let distance = 100;
distance /= 2;
document.write("Half distance: " + distance + " km<br>");
      </pre>
      <button class="run-btn" onclick="runOp11()">▶ Run Example 11</button>
      <div id="op11" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣2️⃣ Comparison (==)</h3>
      <pre>
let x = 10;
let y = "10";
document.write("x == y ? " + (x == y) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp12()">▶ Run Example 12</button>
      <div id="op12" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣3️⃣ Strict comparison (===)</h3>
      <pre>
let x = 10;
let y = "10";
document.write("x === y ? " + (x === y) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp13()">▶ Run Example 13</button>
      <div id="op13" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣4️⃣ Greater than (>)</h3>
      <pre>
document.write("Is 8 > 5 ? " + (8 > 5) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp14()">▶ Run Example 14</button>
      <div id="op14" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣5️⃣ Less than (<)</h3>
      <pre>
document.write("Is 3 < 6 ? " + (3 < 6) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp15()">▶ Run Example 15</button>
      <div id="op15" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣6️⃣ Logical AND (&&)</h3>
      <pre>
let isSunny = true;
let isWeekend = true;
document.write("Can Warda go out? " + (isSunny && isWeekend) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp16()">▶ Run Example 16</button>
      <div id="op16" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣7️⃣ Logical OR (||)</h3>
      <pre>
let hasInternet = false;
let hasData = true;
document.write("Can Warda study online? " + (hasInternet || hasData) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp17()">▶ Run Example 17</button>
      <div id="op17" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣8️⃣ Logical NOT (!)</h3>
      <pre>
let tired = false;
document.write("Is Warda not tired? " + (!tired) + "<br>");
      </pre>
      <button class="run-btn" onclick="runOp18()">▶ Run Example 18</button>
      <div id="op18" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
    `;
  } else if (chapter === "chapter3") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Chapter 3: Making Decisions (Selection Structures)</h2>
      
      <h3>1️⃣ Template Literals</h3>
      <pre>
const name = "Alice";
const message = \`Hello, \${name}!\`;
      </pre>
      <button class="run-btn" onclick="runDecision1()">▶ Run Example 1</button>
      <div id="decision1" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>2️⃣ Single-Alternative Structure</h3>
      <pre>
let temp = 25;
if (temp < 32) {
  result = "It may snow today!";
} else {
  result = "Temperature is above freezing.";
}
      </pre>
      <button class="run-btn" onclick="runDecision2()">▶ Run Example 2</button>
      <div id="decision2" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>3️⃣ Dual-Alternative Structure</h3>
      <pre>
let temp = 40;
if (temp < 32) {
  result = "It may snow today!";
} else {
  result = "It will not snow today.";
}
      </pre>
      <button class="run-btn" onclick="runDecision3()">▶ Run Example 3</button>
      <div id="decision3" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>4️⃣ Multiple-Alternative (Nested if)</h3>
      <pre>
let temp = 55;
if (temp >= 32) {
  if (temp < 60) {
    result = "It's cool outside.";
  } else {
    result = "The weather is warm or hot.";
  }
} else {
  result = "It may snow today!";
}
      </pre>
      <button class="run-btn" onclick="runDecision4()">▶ Run Example 4</button>
      <div id="decision4" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>5️⃣ Compound Conditions (AND / OR)</h3>
      <pre>
let price = 10;
if (price > 5 && price < 12) {
  result = "Price is within range (5 - 12).";
} else {
  result = "Price is outside the range.";
}
      </pre>
      <button class="run-btn" onclick="runDecision5()">▶ Run Example 5</button>
      <div id="decision5" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>6️⃣ Using AND (&&) and OR (||)</h3>
      <pre>
let num = 8;
if (num > 5 && num < 10) {
  result += "Number is between 6 and 9 (using AND).";
}
if (!(num <= 5 || num >= 10)) {
  result += "Number is between 6 and 9 (using NOT/OR).";
}
      </pre>
      <button class="run-btn" onclick="runDecision6()">▶ Run Example 6</button>
      <div id="decision6" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>7️⃣ Calculating Overtime Pay (AND)</h3>
      <pre>
let rate = 15;
let hours = 45;
let pay;
if (hours > 40 && rate < 20) {
  let overtime = rate * 1.5 * (hours - 40);
  let regular = rate * 40;
  pay = overtime + regular;
} else {
  pay = rate * hours;
}
      </pre>
      <button class="run-btn" onclick="runDecision7()">▶ Run Example 7</button>
      <div id="decision7" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>8️⃣ Calculating Overtime Pay (OR)</h3>
      <pre>
let rate = 25;
let hours = 35;
let pay;
if (hours <= 40 || rate >= 20) {
  pay = rate * hours;
} else {
  let overtime = rate * 1.5 * (hours - 40);
  let regular = rate * 40;
  pay = overtime + regular;
}
      </pre>
      <button class="run-btn" onclick="runDecision8()">▶ Run Example 8</button>
      <div id="decision8" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>9️⃣ If...Else If Structure (Rating System)</h3>
      <pre>
let rateSite = 8;
let grade = "";
if (rateSite == 10)
  grade = "A";
else if (rateSite >= 7 && rateSite <= 9)
  grade = "B";
else if (rateSite >= 4 && rateSite < 7)
  grade = "C";
else
  grade = "D";
      </pre>
      <button class="run-btn" onclick="runDecision9()">▶ Run Example 9</button>
      <div id="decision9" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>🔟 Switch Structure (Days)</h3>
      <pre>
let day = 6;
switch (day) {
  case 1: result = "Monday is a Weekday."; break;
  case 2: result = "Tuesday is a Weekday."; break;
  case 3: result = "Wednesday is a Weekday."; break;
  case 4: result = "Thursday is a Weekday."; break;
  case 5: result = "Friday is a Weekday."; break;
  case 6: result = "Saturday is a Weekend."; break;
  case 7: result = "Sunday is a Weekend."; break;
  default: result = "Invalid number!";
}
      </pre>
      <button class="run-btn" onclick="runDecision10()">▶ Run Example 10</button>
      <div id="decision10" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>1️⃣1️⃣ Switch Structure (Without break)</h3>
      <pre>
let color = 1;
let output = "";
switch (color) {
  case 1: output += "The color is red";
  case 2: output += "The color is blue";
  case 3: output += "The color is green";
  default: output += "Invalid entry";
}
      </pre>
      <button class="run-btn" onclick="runDecision11()">▶ Run Example 11</button>
      <div id="decision11" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
    `;
  } else if (chapter === "chapter4") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Chapter 4: Repetition Structure (Loops)</h2>
      
      <h3>1️⃣ For Loop</h3>
      <pre>
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
      </pre>
      <button class="run-btn" onclick="runCh4Ex1()">▶ Run Example 1</button>
      <div id="ch4ex1" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>2️⃣ While Loop</h3>
      <pre>
let i = 1;
while (i <= 5) {
    console.log("iteration: " + i);
    i++;
}
      </pre>
      <button class="run-btn" onclick="runCh4Ex2()">▶ Run Example 2</button>
      <div id="ch4ex2" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>3️⃣ Do...While Loop</h3>
      <pre>
let j = 1;
do {
    console.log("Iteration number: " + j);
    j++;
} while (j <= 5);
      </pre>
      <button class="run-btn" onclick="runCh4Ex3()">▶ Run Example 3</button>
      <div id="ch4ex3" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>4️⃣ Break Statement</h3>
      <pre>
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
    }
    console.log("Iteration " + k);
}
console.log("Loop ended.");
      </pre>
      <button class="run-btn" onclick="runCh4Ex4()">▶ Run Example 4</button>
      <div id="ch4ex4" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>5️⃣ Continue Statement</h3>
      <pre>
for (let x = 1; x <= 5; x++) {
    if (x === 2) {
        continue;
    }
    console.log("Iteration " + x);
}
      </pre>
      <button class="run-btn" onclick="runCh4Ex5()">▶ Run Example 5</button>
      <div id="ch4ex5" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>6️⃣ Nested Loops</h3>
      <pre>
for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        console.log("a = " + a + ", b = " + b);
    }
}
      </pre>
      <button class="run-btn" onclick="runCh4Ex6()">▶ Run Example 6</button>
      <div id="ch4ex6" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
      <hr>

      <h3>7️⃣ Multiplication Table</h3>
      <pre>
let size = 5;
for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
        console.log(row + " x " + col + " = " + (row * col));
    }
}
      </pre>
      <button class="run-btn" onclick="runCh4Ex7()">▶ Run Example 7</button>
      <div id="ch4ex7" class="output" style="white-space: pre-wrap; border:1px solid #ccc; padding:5px; margin-top:10px;"></div>
    `;
  } else if (chapter === "assignment1") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Assignment 2: Operators</h2>
      <h3>1️⃣ Qolal</h3>
      <pre>
qof = 21
qolka = qof / 3
qolalka = qof / qolka
      </pre>
      <button class="run-btn" onclick="runQolal()">▶ Run Q1</button>
      <div id="out1" class="output"></div>
      <hr>

      <h3>2️⃣ Lacag Bixin</h3>
      <pre>
lacagta_larabay = 5000
lacagta_lahelay = 4300
lacagta_maqan = lacagta_larabay - lacagta_lahelay
dadka = 15
lacgta_qofwlbo = lacagta_lahelay / dadka
      </pre>
      <button class="run-btn" onclick="runLacag()">▶ Run Q2</button>
      <div id="out2" class="output"></div>
      <hr>

      <h3>3️⃣ Mushaar</h3>
      <pre>
hour = 10
hours_work = 182
salary = hour * hours_work
      </pre>
      <button class="run-btn" onclick="runMushaar()">▶ Run Q3</button>
      <div id="out3" class="output"></div>
      <hr>

      <h3>4️⃣ Canshuur</h3>
      <pre>
salarys = 1820
caanshur = salarys * 0.05
total_slry = salarys - caanshur
      </pre>
      <button class="run-btn" onclick="runCanshuur()">▶ Run Q4</button>
      <div id="out4" class="output"></div>
      <hr>

      <h3>5️⃣ Class</h3>
      <pre>
classs_students = 60
female = classs_students - 32
male = classs_students - female
      </pre>
      <button class="run-btn" onclick="runClass()">▶ Run Q5</button>
      <div id="out5" class="output"></div>
    `;
  } else if (chapter === "assignment") {
    showSection('useraccount');
  } else if (chapter === "assignment2") {
    content.innerHTML = `
      <button onclick="clearChapterContent(); goBack()" class="back-btn">← Back</button>
      <h2>Assignment 3: If & Else Examples</h2>
      
      <h3>1️⃣ Simple if statement</h3>
      <pre>
let age = 19;
if (age >= 18) {
  document.write("Warda is an adult 👩<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex1()">▶ Run Q1</button>
      <div id="ass2out1" class="output"></div>
      <hr>

      <h3>2️⃣ if...else</h3>
      <pre>
let tired = true;
if (tired) {
  document.write("Warda needs some rest 😴<br>");
} else {
  document.write("Warda is full of energy 💪<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex2()">▶ Run Q2</button>
      <div id="ass2out2" class="output"></div>
      <hr>

      <h3>3️⃣ if...else if...else</h3>
      <pre>
let mood = "happy";
if (mood === "happy") {
  document.write("Warda is smiling 😊<br>");
} else if (mood === "sad") {
  document.write("Warda needs some motivation 💖<br>");
} else {
  document.write("Warda is thinking deeply 🤔<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex3()">▶ Run Q3</button>
      <div id="ass2out3" class="output"></div>
      <hr>

      <h3>4️⃣ Checking even or odd number</h3>
      <pre>
let number = 7;
if (number % 2 === 0) {
  document.write(number + " is even<br>");
} else {
  document.write(number + " is odd<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex4()">▶ Run Q4</button>
      <div id="ass2out4" class="output"></div>
      <hr>

      <h3>5️⃣ Checking high marks</h3>
      <pre>
let marks = 90;
if (marks >= 80) {
  document.write("Excellent job, Warda! <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex5()">▶ Run Q5</button>
      <div id="ass2out5" class="output"></div>
      <hr>

      <h3>6️⃣ Temperature check</h3>
      <pre>
let temperature = 30;
if (temperature > 25) {
  document.write("It's hot outside ☀<br>");
} else {
  document.write("Nice and cool day 🌤<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex6()">▶ Run Q6</button>
      <div id="ass2out6" class="output"></div>
      <hr>

      <h3>7️⃣ Multiple conditions (AND)</h3>
      <pre>
let hasInternet = true;
let hasLaptop = true;
if (hasInternet && hasLaptop) {
  document.write("Warda can study online 💻<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex7()">▶ Run Q7</button>
      <div id="ass2out7" class="output"></div>
      <hr>

      <h3>8️⃣ OR condition</h3>
      <pre>
let hungry = false;
let bored = true;
if (hungry || bored) {
  document.write("Time for a snack or activity <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex8()">▶ Run Q8</button>
      <div id="ass2out8" class="output"></div>
      <hr>

      <h3>9️⃣ NOT condition</h3>
      <pre>
let raining = false;
if (!raining) {
  document.write("Warda can go for a walk 🚶‍♀<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex9()">▶ Run Q9</button>
      <div id="ass2out9" class="output"></div>
      <hr>

      <h3>🔟 Nested if</h3>
      <pre>
let day = "Friday";
let mood = "happy";
if (day === "Friday") {
  if (mood === "happy") {
    document.write("Perfect Friday mood <br>");
  }
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex10()">▶ Run Q10</button>
      <div id="ass2out10" class="output"></div>
      <hr>

      <h3>1️⃣1️⃣ Check password</h3>
      <pre>
let password = "1234";
if (password === "1234") {
  document.write("Access granted <br>");
} else {
  document.write("Wrong password <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex11()">▶ Run Q11</button>
      <div id="ass2out11" class="output"></div>
      <hr>

      <h3>1️⃣2️⃣ Compare numbers</h3>
      <pre>
let a = 5;
let b = 8;
if (a < b) {
  document.write("a is smaller than b<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex12()">▶ Run Q12</button>
      <div id="ass2out12" class="output"></div>
      <hr>

      <h3>1️⃣3️⃣ Age group</h3>
      <pre>
let personAge = 19;
if (personAge < 13) {
  document.write("Child <br>");
} else if (personAge < 20) {
  document.write("Teenager <br>");
} else {
  document.write("Adult <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex13()">▶ Run Q13</button>
      <div id="ass2out13" class="output"></div>
      <hr>

      <h3>1️⃣4️⃣ Shopping discount</h3>
      <pre>
let total = 120;
if (total >= 100) {
  document.write("You get a discount! 🛍<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex14()">▶ Run Q14</button>
      <div id="ass2out14" class="output"></div>
      <hr>

      <h3>1️⃣5️⃣ Checking name</h3>
      <pre>
let name = "Warda";
if (name === "Warda") {
  document.write("Welcome back, " + name + "! 💕<br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex15()">▶ Run Q15</button>
      <div id="ass2out15" class="output"></div>
      <hr>

      <h3>1️⃣6️⃣ Battery level</h3>
      <pre>
let battery = 15;
if (battery <= 20) {
  document.write("Low battery! Please charge <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex16()">▶ Run Q16</button>
      <div id="ass2out16" class="output"></div>
      <hr>

      <h3>1️⃣7️⃣ Study reminder</h3>
      <pre>
let studyTime = true;
if (studyTime) {
  document.write("It's time to study, Warda! <br>");
} else {
  document.write("You can relax now <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex17()">▶ Run Q17</button>
      <div id="ass2out17" class="output"></div>
      <hr>

      <h3>1️⃣8️⃣ Health check</h3>
      <pre>
let sleptWell = false;
if (sleptWell) {
  document.write("Feeling great today <br>");
} else {
  document.write("Warda needs more sleep <br>");
}
      </pre>
      <button class="run-btn" onclick="runAss2Ex18()">▶ Run Q18</button>
      <div id="ass2out18" class="output"></div>
    `;
  } else {
    content.innerHTML = "<p>Please select a chapter first.</p>";
  }
}

// ===== Chapter 1 Functions =====
function runCh1Ex1() {
  let out = document.getElementById("ch1ex1");
  out.innerHTML = "Hello World";
}

function runCh1Ex2() {
  let out = document.getElementById("ch1ex2");
  let x = 5;
  out.innerHTML = `let x = ${x}`;
}

function runCh1Ex3() {
  let out = document.getElementById("ch1ex3");
  let x = 5;
  let y = x + 2;
  out.innerHTML = `let x = ${x}<br>let y = x + 2<br>Result: ${y}`;
}

function runCh1Ex4() {
  let out = document.getElementById("ch1ex4");
  let name = 'ubah';
  out.innerHTML = `let name = '${name}'<br>Output: ${name}`;
}

function runCh1Ex5() {
  let out = document.getElementById("ch1ex5");
  let x = 5;
  let y = x + 2;
  let name = 'ubah';
  out.innerHTML = `Name: ${name}<br>Value of y: ${y}`;
}

// ===== Chapter 2 Functions (If-Else Statements) =====
function runCh2Ex1() {
  let out = document.getElementById("ch2ex1");
  let age = 19;
  if (age >= 18) {
    out.innerHTML = "Warda is an adult 👩";
  }
}

function runCh2Ex2() {
  let out = document.getElementById("ch2ex2");
  let tired = true;
  if (tired) {
    out.innerHTML = "Warda needs some rest 😴";
  } else {
    out.innerHTML = "Warda is full of energy 💪";
  }
}

function runCh2Ex3() {
  let out = document.getElementById("ch2ex3");
  let mood = "happy";
  if (mood === "happy") {
    out.innerHTML = "Warda is smiling 😊";
  } else if (mood === "sad") {
    out.innerHTML = "Warda needs some motivation 💖";
  } else {
    out.innerHTML = "Warda is thinking deeply 🤔";
  }
}

function runCh2Ex4() {
  let out = document.getElementById("ch2ex4");
  let number = 7;
  if (number % 2 === 0) {
    out.innerHTML = number + " is even";
  } else {
    out.innerHTML = number + " is odd";
  }
}

function runCh2Ex5() {
  let out = document.getElementById("ch2ex5");
  let marks = 90;
  if (marks >= 80) {
    out.innerHTML = "Excellent job, Warda! 🏅";
  }
}

function runCh2Ex6() {
  let out = document.getElementById("ch2ex6");
  let temperature = 30;
  if (temperature > 25) {
    out.innerHTML = "It's hot outside ☀";
  } else {
    out.innerHTML = "Nice and cool day 🌤";
  }
}

function runCh2Ex7() {
  let out = document.getElementById("ch2ex7");
  let hasInternet = true;
  let hasLaptop = true;
  if (hasInternet && hasLaptop) {
    out.innerHTML = "Warda can study online 💻";
  }
}

function runCh2Ex8() {
  let out = document.getElementById("ch2ex8");
  let hungry = false;
  let bored = true;
  if (hungry || bored) {
    out.innerHTML = "Time for a snack or activity 🍪🎨";
  }
}

function runCh2Ex9() {
  let out = document.getElementById("ch2ex9");
  let raining = false;
  if (!raining) {
    out.innerHTML = "Warda can go for a walk 🚶‍♀";
  }
}

function runCh2Ex10() {
  let out = document.getElementById("ch2ex10");
  let day = "Friday";
  let mood = "happy";
  if (day === "Friday") {
    if (mood === "happy") {
      out.innerHTML = "Perfect Friday mood 🎉";
    }
  }
}

function runCh2Ex11() {
  let out = document.getElementById("ch2ex11");
  let password = "1234";
  if (password === "1234") {
    out.innerHTML = "Access granted 🔓";
  } else {
    out.innerHTML = "Wrong password ❌";
  }
}

function runCh2Ex12() {
  let out = document.getElementById("ch2ex12");
  let a = 5;
  let b = 8;
  if (a < b) {
    out.innerHTML = "a is smaller than b";
  } else {
    out.innerHTML = "a is not smaller than b";
  }
}

// ===== Chapter 2.1: Operators Functions =====
function runOp1() {
  let out = document.getElementById("op1");
  let apples = 3;
  let bananas = 2;
  out.innerHTML = "Total fruits: " + (apples + bananas);
}

function runOp2() {
  let out = document.getElementById("op2");
  let balance = 100;
  let spent = 25;
  out.innerHTML = "Money left: " + (balance - spent);
}

function runOp3() {
  let out = document.getElementById("op3");
  let price = 10;
  let quantity = 3;
  out.innerHTML = "Total price: $" + (price * quantity);
}

function runOp4() {
  let out = document.getElementById("op4");
  let totalMarks = 400;
  let subjects = 4;
  out.innerHTML = "Average marks: " + (totalMarks / subjects);
}

function runOp5() {
  let out = document.getElementById("op5");
  let remainder = 17 % 5;
  out.innerHTML = "17 % 5 = " + remainder;
}

function runOp6() {
  let out = document.getElementById("op6");
  let day = 1;
  day++;
  out.innerHTML = "Next day number: " + day;
}

function runOp7() {
  let out = document.getElementById("op7");
  let stars = 10;
  stars--;
  out.innerHTML = "Stars left: " + stars;
}

function runOp8() {
  let out = document.getElementById("op8");
  let water = 5;
  water += 2;
  out.innerHTML = "Glasses of water today: " + water;
}

function runOp9() {
  let out = document.getElementById("op9");
  let energy = 100;
  energy -= 30;
  out.innerHTML = "Energy left: " + energy + "%";
}

function runOp10() {
  let out = document.getElementById("op10");
  let points = 10;
  points *= 3;
  out.innerHTML = "Triple points: " + points;
}

function runOp11() {
  let out = document.getElementById("op11");
  let distance = 100;
  distance /= 2;
  out.innerHTML = "Half distance: " + distance + " km";
}

function runOp12() {
  let out = document.getElementById("op12");
  let x = 10;
  let y = "10";
  out.innerHTML = "x == y ? " + (x == y);
}

function runOp13() {
  let out = document.getElementById("op13");
  let x = 10;
  let y = "10";
  out.innerHTML = "x === y ? " + (x === y);
}

function runOp14() {
  let out = document.getElementById("op14");
  out.innerHTML = "Is 8 > 5 ? " + (8 > 5);
}

function runOp15() {
  let out = document.getElementById("op15");
  out.innerHTML = "Is 3 < 6 ? " + (3 < 6);
}

function runOp16() {
  let out = document.getElementById("op16");
  let isSunny = true;
  let isWeekend = true;
  out.innerHTML = "Can Warda go out? " + (isSunny && isWeekend);
}

function runOp17() {
  let out = document.getElementById("op17");
  let hasInternet = false;
  let hasData = true;
  out.innerHTML = "Can Warda study online? " + (hasInternet || hasData);
}

function runOp18() {
  let out = document.getElementById("op18");
  let tired = false;
  out.innerHTML = "Is Warda not tired? " + (!tired);
}

// ===== Chapter 3: Decision Functions =====
function runDecision1() {
  let out = document.getElementById("decision1");
  const name = "Alice";
  const message = `Hello, ${name}!`;
  out.innerHTML = message;
}

function runDecision2() {
  let out = document.getElementById("decision2");
  let temp = 25;
  let result;
  if (temp < 32) {
    result = "It may snow today!";
  } else {
    result = "Temperature is above freezing.";
  }
  out.innerHTML = result;
}

function runDecision3() {
  let out = document.getElementById("decision3");
  let temp = 40;
  let result;
  if (temp < 32) {
    result = "It may snow today!";
  } else {
    result = "It will not snow today.";
  }
  out.innerHTML = result;
}

function runDecision4() {
  let out = document.getElementById("decision4");
  let temp = 55;
  let result;
  if (temp >= 32) {
    if (temp < 60) {
      result = "It's cool outside.";
    } else {
      result = "The weather is warm or hot.";
    }
  } else {
    result = "It may snow today!";
  }
  out.innerHTML = result;
}

function runDecision5() {
  let out = document.getElementById("decision5");
  let price = 10;
  let result;
  if (price > 5 && price < 12) {
    result = "Price is within range (5 - 12).";
  } else {
    result = "Price is outside the range.";
  }
  out.innerHTML = result;
}

function runDecision6() {
  let out = document.getElementById("decision6");
  let num = 8;
  let result = "";
  if (num > 5 && num < 10) {
    result += "Number is between 6 and 9 (using AND).<br>";
  }
  if (!(num <= 5 || num >= 10)) {
    result += "Number is between 6 and 9 (using NOT/OR).";
  }
  out.innerHTML = result;
}

function runDecision7() {
  let out = document.getElementById("decision7");
  let rate = 15;
  let hours = 45;
  let pay;
  if (hours > 40 && rate < 20) {
    let overtime = rate * 1.5 * (hours - 40);
    let regular = rate * 40;
    pay = overtime + regular;
  } else {
    pay = rate * hours;
  }
  out.innerHTML = `Your paycheck this week will be $${pay}`;
}

function runDecision8() {
  let out = document.getElementById("decision8");
  let rate = 25;
  let hours = 35;
  let pay;
  if (hours <= 40 || rate >= 20) {
    pay = rate * hours;
  } else {
    let overtime = rate * 1.5 * (hours - 40);
    let regular = rate * 40;
    pay = overtime + regular;
  }
  out.innerHTML = `Your paycheck this week will be $${pay}`;
}

function runDecision9() {
  let out = document.getElementById("decision9");
  let rateSite = 8;
  let grade = "";
  if (rateSite == 10)
    grade = "A";
  else if (rateSite >= 7 && rateSite <= 9)
    grade = "B";
  else if (rateSite >= 4 && rateSite < 7)
    grade = "C";
  else
    grade = "D";
  out.innerHTML = `You gave the site a rating of ${grade}`;
}

function runDecision10() {
  let out = document.getElementById("decision10");
  let day = 6;
  let result;
  switch (day) {
    case 1: result = "Monday is a Weekday."; break;
    case 2: result = "Tuesday is a Weekday."; break;
    case 3: result = "Wednesday is a Weekday."; break;
    case 4: result = "Thursday is a Weekday."; break;
    case 5: result = "Friday is a Weekday."; break;
    case 6: result = "Saturday is a Weekend."; break;
    case 7: result = "Sunday is a Weekend."; break;
    default: result = "Invalid number!";
  }
  out.innerHTML = result;
}

function runDecision11() {
  let out = document.getElementById("decision11");
  let color = 1;
  let output = "";
  switch (color) {
    case 1: output += "The color is red<br>";
    case 2: output += "The color is blue<br>";
    case 3: output += "The color is green<br>";
    default: output += "Invalid entry";
  }
  out.innerHTML = output;
}

// ===== Chapter 4: Loop Functions =====
function runCh4Ex1() {
  let out = document.getElementById("ch4ex1");
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += "Iteration number: " + i + "<br>";
  }
  out.innerHTML = output;
}

function runCh4Ex2() {
  let out = document.getElementById("ch4ex2");
  let output = "";
  let i = 1;
  while (i <= 5) {
    output += "iteration: " + i + "<br>";
    i++;
  }
  out.innerHTML = output;
}

function runCh4Ex3() {
  let out = document.getElementById("ch4ex3");
  let output = "";
  let j = 1;
  do {
    output += "Iteration number: " + j + "<br>";
    j++;
  } while (j <= 5);
  out.innerHTML = output;
}

function runCh4Ex4() {
  let out = document.getElementById("ch4ex4");
  let output = "";
  for (let k = 1; k <= 5; k++) {
    if (k === 3) {
      break;
    }
    output += "Iteration " + k + "<br>";
  }
  output += "Loop ended.";
  out.innerHTML = output;
}

function runCh4Ex5() {
  let out = document.getElementById("ch4ex5");
  let output = "<b>Note: Iteration 2 is skipped by continue statement</b><br><br>";
  for (let x = 1; x <= 5; x++) {
    if (x === 2) {
      continue; // Skip iteration 2
    }
    output += "Iteration " + x + "<br>";
  }
  out.innerHTML = output;
}

function runCh4Ex6() {
  let out = document.getElementById("ch4ex6");
  let output = "";
  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      output += "a = " + a + ", b = " + b + "<br>";
    }
  }
  out.innerHTML = output;
}

function runCh4Ex7() {
  let out = document.getElementById("ch4ex7");
  let output = "";
  let size = 5;
  for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
      output += row + " x " + col + " = " + (row * col) + "<br>";
    }
  }
  out.innerHTML = output;
}

// Global attempts variable for user account creation
let attempts = 3;

function handleFailure(message) {
  attempts--;
  alert(message);
  if (attempts <= 0) {
    alert("Registration disabled. No attempts left.");
  }
}

function createUser() {
  if (attempts <= 0) {
    alert("Registration disabled. No attempts left.");
    return;
  }

  let fullname = document.getElementById("fullname").value.trim();
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (!fullname || !username || !email || !password || !confirmPassword) {
    handleFailure("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    handleFailure("Invalid email address!");
    return;
  }

  if (password !== confirmPassword) {
    handleFailure("Passwords do not match!");
    return;
  }
  if (password.length < 4) {
    handleFailure("Password must be at least 4 characters long!");
    return;
  }

  alert("User account created successfully! Welcome, " + fullname + " 🎉");
  document.getElementById("signupForm").reset();
  attempts = 3;
}

function runQolal() {
  let out = document.getElementById("out1");
  let qof = 21, qolka = qof / 3, qolalka = qof / qolka;
  out.innerHTML = `dadka qolalka loo rabo waa: ${qof}<br>qolalka ay dageen waa: ${qolka}<br>qof walbo waxa uu dagay: ${qolalka}`;
}

function runLacag() {
  let out = document.getElementById("out2");
  let lacagta_larabay = 5000, lacagta_lahelay = 4300, lacagta_maqan = lacagta_larabay - lacagta_lahelay, dadka = 15;
  let lacgta_qofwlbo = lacagta_lahelay / dadka;
  out.innerHTML = `lacagta la rabay: ${lacagta_larabay}<br>lacagta la helay: ${lacagta_lahelay}<br>lacagta maqantahay: ${lacagta_maqan}<br>qof walbo wuxuu helay: ${lacgta_qofwlbo}`;
}

function runMushaar() {
  let out = document.getElementById("out3");
  let hour = 10, hours_work = 182, salary = hour * hours_work;
  out.innerHTML = `1kii saacad mushaharka waa: $${hour}<br>saacadaha shaqada waa: ${hours_work}<br>mushaharka guud waa: $${salary}`;
}

function runCanshuur() {
  let out = document.getElementById("out4");
  let salarys = 1820, caanshur = salarys * 0.05, total_slry = salarys - caanshur;
  out.innerHTML = `mushaharka waa: $${salarys}<br>canshuurta waa: $${caanshur}<br>total waa: $${total_slry}`;
}

function runClass() {
  let out = document.getElementById("out5");
  let classs_students = 60, female = classs_students - 32, male = classs_students - female;
  out.innerHTML = `ardayda classka waa: ${classs_students}<br>gabdhaha waa: ${female}<br>wiilasha waa: ${male}`;
}

// ===== Assignment 2: If & Else Functions =====
function runAss2Ex1() {
  let out = document.getElementById("ass2out1");
  let age = 19;
  if (age >= 18) {
    out.innerHTML = "Warda is an adult 👩";
  }
}

function runAss2Ex2() {
  let out = document.getElementById("ass2out2");
  let tired = true;
  if (tired) {
    out.innerHTML = "Warda needs some rest 😴";
  } else {
    out.innerHTML = "Warda is full of energy 💪";
  }
}

function runAss2Ex3() {
  let out = document.getElementById("ass2out3");
  let mood = "happy";
  if (mood === "happy") {
    out.innerHTML = "Warda is smiling 😊";
  } else if (mood === "sad") {
    out.innerHTML = "Warda needs some motivation 💖";
  } else {
    out.innerHTML = "Warda is thinking deeply 🤔";
  }
}

function runAss2Ex4() {
  let out = document.getElementById("ass2out4");
  let number = 7;
  if (number % 2 === 0) {
    out.innerHTML = number + " is even";
  } else {
    out.innerHTML = number + " is odd";
  }
}

function runAss2Ex5() {
  let out = document.getElementById("ass2out5");
  let marks = 90;
  if (marks >= 80) {
    out.innerHTML = "Excellent job, Warda! 🏅";
  }
}

function runAss2Ex6() {
  let out = document.getElementById("ass2out6");
  let temperature = 30;
  if (temperature > 25) {
    out.innerHTML = "It's hot outside ☀";
  } else {
    out.innerHTML = "Nice and cool day 🌤";
  }
}

function runAss2Ex7() {
  let out = document.getElementById("ass2out7");
  let hasInternet = true;
  let hasLaptop = true;
  if (hasInternet && hasLaptop) {
    out.innerHTML = "Warda can study online 💻";
  }
}

function runAss2Ex8() {
  let out = document.getElementById("ass2out8");
  let hungry = false;
  let bored = true;
  if (hungry || bored) {
    out.innerHTML = "Time for a snack or activity 🍪🎨";
  }
}

function runAss2Ex9() {
  let out = document.getElementById("ass2out9");
  let raining = false;
  if (!raining) {
    out.innerHTML = "Warda can go for a walk 🚶‍♀";
  }
}

function runAss2Ex10() {
  let out = document.getElementById("ass2out10");
  let day = "Friday";
  let mood = "happy";
  if (day === "Friday") {
    if (mood === "happy") {
      out.innerHTML = "Perfect Friday mood 🎉";
    }
  }
}

function runAss2Ex11() {
  let out = document.getElementById("ass2out11");
  let password = "1234";
  if (password === "1234") {
    out.innerHTML = "Access granted 🔓";
  } else {
    out.innerHTML = "Wrong password ❌";
  }
}

function runAss2Ex12() {
  let out = document.getElementById("ass2out12");
  let a = 5;
  let b = 8;
  if (a < b) {
    out.innerHTML = "a is smaller than b";
  }
}

function runAss2Ex13() {
  let out = document.getElementById("ass2out13");
  let personAge = 19;
  if (personAge < 13) {
    out.innerHTML = "Child 👶";
  } else if (personAge < 20) {
    out.innerHTML = "Teenager 👧";
  } else {
    out.innerHTML = "Adult 👩‍🦰";
  }
}

function runAss2Ex14() {
  let out = document.getElementById("ass2out14");
  let total = 120;
  if (total >= 100) {
    out.innerHTML = "You get a discount! 🛍";
  }
}

function runAss2Ex15() {
  let out = document.getElementById("ass2out15");
  let name = "Warda";
  if (name === "Warda") {
    out.innerHTML = "Welcome back, " + name + "! 💕";
  }
}

function runAss2Ex16() {
  let out = document.getElementById("ass2out16");
  let battery = 15;
  if (battery <= 20) {
    out.innerHTML = "Low battery! Please charge 🔋";
  }
}

function runAss2Ex17() {
  let out = document.getElementById("ass2out17");
  let studyTime = true;
  if (studyTime) {
    out.innerHTML = "It's time to study, Warda! ";
  } else {
    out.innerHTML = "You can relax now ";
  }
}

function runAss2Ex18() {
  let out = document.getElementById("ass2out18");
  let sleptWell = false;
  if (sleptWell) {
    out.innerHTML = "Feeling great today ";
  } else {
    out.innerHTML = "Warda needs more sleep ";
  }
}

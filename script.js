let score = 0;
let index = 0;
let timeLeft = 720; // 14 min
let timer = null;


// ===== Fixed 125 MCQs =====
const mcqs = [
 {question:"What is the basic unit of life?", options:["Cell","Atom","Tissue","Organ"], answer:0},
 {question:"Which process produces glucose in plants?", options:["Respiration","Photosynthesis","Fermentation","Transpiration"], answer:1},
 {question:"Which blood cells fight infection?", options:["RBC","WBC","Platelets","Plasma"], answer:1},
 {question:"What carries oxygen in blood?", options:["Plasma","Platelets","Hemoglobin","WBC"], answer:2},
 {question:"Where does photosynthesis occur?", options:["Chloroplast","Mitochondria","Nucleus","Ribosome"], answer:0},
 {question:"Which biomolecule is the main source of energy?", options:["Protein","Carbohydrate","Lipid","Vitamin"], answer:1},
 {question:"What is the site of protein synthesis?", options:["Ribosome","Nucleus","Mitochondria","ER"], answer:0},
 {question:"Human heart has how many chambers?", options:["2","3","4","5"], answer:2},
 {question:"Which organ stores bile?", options:["Liver","Gallbladder","Pancreas","Stomach"], answer:1},
 {question:"The powerhouse of cell is?", options:["Nucleus","Ribosome","Mitochondria","Golgi"], answer:2},
 {question:"What is the function of roots?", options:["Photosynthesis","Absorb water","Respiration","Reproduction"], answer:1},
 {question:"Which system controls hormones?", options:["Nervous","Digestive","Endocrine","Respiratory"], answer:2},
 {question:"DNA stands for?", options:["Deoxyribonucleic Acid","Dynamic Acid","Dual Nitric Acid","None"], answer:0},
 {question:"Which gas is used in respiration?", options:["Carbon Dioxide","Oxygen","Nitrogen","Hydrogen"], answer:1},
 {question:"Smallest bone in human body?", options:["Femur","Stapes","Ulna","Radius"], answer:1},
 {question:"Largest organ of the body?", options:["Skin","Liver","Heart","Brain"], answer:0},
 {question:"Kidney filters?", options:["Blood","Urine","Digestive juices","Saliva"], answer:0},
 {question:"Which vitamin is made in sunlight?", options:["A","B","C","D"], answer:3},
 {question:"What is genotype?", options:["Physical trait","Genetic makeup","Species name","Cell type"], answer:1},
 {question:"What is blood pressure measured by?", options:["Stethoscope","Sphygmomanometer","Oximeter","Thermometer"], answer:1},
 {question:"Which enzymes digest protein?", options:["Amylase","Lipase","Pepsin","Lactase"], answer:2},
 {question:"Site of fertilization in humans?", options:["Uterus","Fallopian tube","Vagina","Ovary"], answer:1},
 {question:"Cell division for growth is called?", options:["Meiosis","Binary fission","Mitosis","Cloning"], answer:2},
 {question:"Main excretory organ?", options:["Liver","Kidney","Skin","Lungs"], answer:1},
 {question:"What is the chemical formula of water?", options:["H2","O2","H2O","HO"], answer:2},
 {question:"pH less than 7 is?", options:["Neutral","Acidic","Basic","Salty"], answer:1},
 {question:"Atomic number represents?", options:["Neutrons","Protons","Electrons","Compounds"], answer:1},
 {question:"NaCl is common name for?", options:["Sugar","Salt","Acid","Base"], answer:1},
 {question:"What is the symbol for Sodium?", options:["Na","S","So","Sd"], answer:0},
 {question:"Element with atomic number 1?", options:["Hydrogen","Helium","Oxygen","Nitrogen"], answer:0},
 {question:"pH of pure water?", options:["7","1","14","10"], answer:0},
 {question:"Chemical formula of carbon dioxide?", options:["CO","CO2","C2O","O2C2"], answer:1},
 {question:"Acids taste?", options:["Sweet","Salt","Sour","Bitter"], answer:2},
 {question:"Bases taste?", options:["Sweet","Bitter","Sour","Salty"], answer:1},
 {question:"Chemical reaction that absorbs heat is called?", options:["Exothermic","Endothermic","Neutral","Nuclear"], answer:1},
 {question:"Which gas is released in photosynthesis?", options:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], answer:0},
 {question:"What is an isotope?", options:["Element","Compound with same protons different neutrons","Mixture","Solution"], answer:1},
 {question:"pH above 7 is?", options:["Acidic","Basic","Neutral","Salty"], answer:1},
 {question:"Chemical symbol for gold?", options:["Au","Ag","Gd","Go"], answer:0},
 {question:"What is electrolysis?", options:["Heating","Splitting by electricity","Mixing","Burning"], answer:1},
 {question:"In a neutralization reaction acid + base gives?", options:["Salt & water","Only acid","Only base","Gas"], answer:0},
 {question:"Which element is liquid at room temperature?", options:["Mercury","Iron","Gold","Silver"], answer:0},
 {question:"Avogadro’s number approx equals?", options:["6.02×10^23","3×10^8","1×10^19","9×10^24"], answer:0},
 {question:"Which is a noble gas?", options:["Oxygen","Nitrogen","Helium","Hydrogen"], answer:2},
 {question:"What is a compound?", options:["Mixture","Pure element","Two elements chemically joined","Single atom"], answer:2},
 {question:"Catalyst does what?", options:["Slows reaction","Speeds reaction","Stops reaction","Boils liquid"], answer:1},
 {question:"The periodic table was created by?", options:["Newton","Mendeleev","Einstein","Galileo"], answer:1},
 {question:"What is rust?", options:["Iron oxide","Water","Salt","Carbon"], answer:0},
 {question:"Chemical formula of ammonia?", options:["NH3","NO2","N2O","HN3"], answer:0},
 {question:"SI unit of force?", options:["Watt","Newton","Joule","Pascal"], answer:1},
 {question:"Speed formula?", options:["Distance×Time","Distance÷Time","Time×Distance","None"], answer:1},
 {question:"Acceleration due to gravity approx?", options:["9.8 m/s²","5 m/s²","15 m/s²","20 m/s²"], answer:0},
 {question:"Speed of light?", options:["3×10^8 m/s","300 m/s","150 m/s","3×10^6 m/s"], answer:0},
 {question:"Unit of current?", options:["Volt","Ampere","Ohm","Watt"], answer:1},
 {question:"Unit of energy?", options:["Newton","Joule","Watt","Ampere"], answer:1},
 {question:"Ohm’s law relates?", options:["V=IR","P=VI","F=ma","E=mc²"], answer:0},
 {question:"What causes refraction?", options:["Heat","Light bending","Sound","Magnetic"], answer:1},
 {question:"Density formula?", options:["Mass/Volume","Volume/Mass","Mass×Volume","None"], answer:0},
 {question:"What is inertia?", options:["Force","Resistance to change motion","Energy","Pressure"], answer:1},
 {question:"Pressure unit?", options:["Pascal","Newton","Joule","Ampere"], answer:0},
 {question:"Heat transfer by radiation does not need?", options:["Medium","Air","Liquid","Solid"], answer:0},
 {question:"Which is a vector quantity?", options:["Speed","Distance","Velocity","Mass"], answer:2},
 {question:"Work done formula?", options:["Force×Distance","Mass×Time","Speed×Distance","None"], answer:0},
 {question:"Sound travels fastest in?", options:["Air","Water","Vacuum","Glass"], answer:1},
 {question:"Electric power formula?", options:["VI","I/V","V+I","None"], answer:0},
 {question:"What is momentum?", options:["Mass×Acceleration","Mass×Velocity","Force×Time","None"], answer:1},
 {question:"Reflection of light follows?", options:["Fermat’s principle","Snell’s law","Newton’s rule","Leibniz"], answer:1},
 {question:"Frequency unit?", options:["Hz","J","N","W"], answer:0},
 {question:"Magnetic field is produced by?", options:["Static charge","Moving charge","Insulator","None"], answer:1},
 {question:"Which wave has highest energy?", options:["Radio","Light","Gamma","Sound"], answer:2},
 {question:"Choose correct pronunciation of 'schedule'.", options:["she‑dule","skedule","sheh‑dule","chedule"], answer:1},
 {question:"Antonym of 'ancient'?", options:["Old","Modern","Ancient","Used"], answer:1},
 {question:"Synonym of ‘rapid’?", options:["Fast","Slow","Weak","Tough"], answer:0},
 {question:"Correct plural of 'child'?", options:["childs","children","childes","child"], answer:1},
 {question:"Select correct preposition: He arrived ___ time.", options:["on","in","at","to"], answer:2},
 {question:"Choose correct article: ___ apple", options:["A","An","The","None"], answer:1},
 {question:"Identify action word:", options:["Run","Blue","Happy","Cold"], answer:0},
 {question:"Choose correct tense: She ___ a book.", options:["read","reads","is read","reading"], answer:1},
 {question:"Antonym of 'brave'?", options:["Bold","Coward","Strong","Smart"], answer:1},
 {question:"Correct sentence:", options:["He go home.","He goes home.","He going home.","He gone home."], answer:1},
 {question:"What is a pronoun?", options:["Action word","Naming word","Replaces noun","Describes noun"], answer:2},
 {question:"Synonym of ‘happy’?", options:["Sad","Glad","Angry","Ill"], answer:1},
 {question:"Identify error: She don’t play.", options:["don’t","play","She","None"], answer:0},
 {question:"Choose correct word: They ___ here yesterday.", options:["were","was","are","is"], answer:0},
 {question:"Antonym of 'increase'?", options:["Rise","Grow","Decrease","Enhance"], answer:2},
 {question:"Synonym of ‘smart’?", options:["Clever","Dull","Weak","Bad"], answer:0},
 {question:"Fill correct: I have ___ money.", options:["many","much","few","little"], answer:1},
 {question:"Which is adjective?", options:["Beauty","Beautiful","Run","Read"], answer:1},
 {question:"Correct preposition: She is good ___ math.", options:["on","in","at","to"], answer:2},
 {question:"What is conjunction?", options:["Joins sentences","Verb","Noun","Adjective"], answer:0},
 {question:"Choose correct tense: I ___ already eaten.", options:["have","has","had","having"], answer:0},
 {question:"Antonym of 'quiet'?", options:["Loud","Calm","Soft","Silent"], answer:0},
 {question:"Choose correct: ___ book is this?", options:["Whose","Who’s","Who","Which"], answer:0},
 {question:"Synonym of ‘help’?", options:["Aid","Harm","Break","Blur"], answer:0},
 {question:"What is gerund?", options:["Verb","Noun","Adjective","Participle"], answer:3},
 {question:"Capital of Pakistan?", options:["Karachi","Lahore","Islamabad","Peshawar"], answer:2},
 {question:"Who is the founder of Pakistan?", options:["Allama Iqbal","Liaquat Ali Khan","Quaid-e-Azam","Jinnah"], answer:2},
 {question:"Largest continent?", options:["Africa","Europe","Asia","America"], answer:2},
 {question:"Currency of USA?", options:["Dollar","Rupee","Euro","Yen"], answer:0},
 {question:"Deepest ocean?", options:["Atlantic","Indian","Pacific","Arctic"], answer:2},
 {question:"World’s largest desert?", options:["Sahara","Gobi","Kalahari","Mojave"], answer:0},
 {question:"UN headquarters is in?", options:["London","New York","Paris","Geneva"], answer:1},
 {question:"Olympics held every?", options:["2 years","3 years","4 years","5 years"], answer:2},
 {question:"Longest river?", options:["Nile","Amazon","Yangtze","Mississippi"], answer:0},
 {question:"Fastest land animal?", options:["Lion","Tiger","Cheetah","Horse"], answer:2},
 {question:"Current affairs mean?", options:["History","Future","Recent events","Fiction"], answer:2},
 {question:"Prime minister of UK is?", options:["Boris Johnson","Rishi Sunak","Theresa May","David Cameron"], answer:1},
 {question:"Most spoken language worldwide?", options:["English","Mandarin","Spanish","Hindi"], answer:1},
 {question:"First man on moon?", options:["Armstrong","Aldrin","Collins","Gagarin"], answer:0},
 {question:"Biggest planet?", options:["Earth","Mars","Jupiter","Venus"], answer:2},
 {question:"Internet full form (popular)?", options:["INTER NETWORK","INTERNATIONAL NETWORK","INTERNET","INTER ACTIVE"], answer:0},
 {question:"SDGs stand for?", options:["Sustainable Dev Goals","Social Dev Goals","Scientific Dev Goals","Security Dev Goals"], answer:0},
 {question:"Currency of Japan?", options:["Dollar","Yen","Euro","Rupees"], answer:1},
 {question:"Capital of India?", options:["Mumbai","New Delhi","Bangalore","Chennai"], answer:1},
 {question:"Which continent has most countries?", options:["Africa","Asia","Europe","America"], answer:0},
 {question:"National animal of Pakistan?", options:["Lion","Markhor","Tiger","Eagle"], answer:1},
 {question:"Country that invented paper?", options:["Egypt","China","India","Greece"], answer:1},
 {question:"Largest ocean?", options:["Atlantic","Pacific","Indian","Arctic"], answer:1}
];

function loadQuestion() {
  document.getElementById("question").innerText = mcqs[index].question;
  document.getElementById("opt0").innerText = mcqs[index].options[0];
  document.getElementById("opt1").innerText = mcqs[index].options[1];
  document.getElementById("opt2").innerText = mcqs[index].options[2];
  document.getElementById("opt3").innerText = mcqs[index].options[3];
}

// ===== Check answer =====
function checkAnswer(opt) {
  if (opt === mcqs[index].answer) score++;
  nextQuestion();
}

// ===== Next question =====
function nextQuestion() {
  index++;
  if (index < mcqs.length) {
    loadQuestion();
  } else {
    endTest();
  }
}

// ===== End test & show result =====
function endTest() {
  clearInterval(timer);

  const totalMarks = mcqs.length;
  const passMarks = Math.ceil(totalMarks * 0.5); // 50% pass
  const percentage = (score / totalMarks) * 100;

  const status = score >= passMarks ? "PASS" : "FAIL";
  const className = score >= passMarks ? "pass" : "fail";
  const message = score >= passMarks ? "🎉 Congratulations! You passed!" : "😔 Sorry! You failed.";

  document.body.innerHTML = `
    <div id="resultBox">
      <div class="result-card">
        <h2 class="${className}">${status}</h2>
        <p><b>Total Questions:</b> ${totalMarks}</p>
        <p><b>Correct Answers:</b> ${score}</p>
        <p><b>Wrong Answers:</b> ${totalMarks - score}</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p>${message}</p>
      </div>
    </div>
  `;
}



// ===== Welcome hide & load first question =====
window.onload = () => {
  loadQuestion();
  setTimeout(() => {
    document.getElementById("welcome").style.display = "none";
  }, 4000);
};
window.onbeforeunload = function(){
  return "Test chal raha hai, page leave na karein!";
};
function startTest(){
  let name = document.getElementById("sname").value;
  let roll = document.getElementById("roll").value;

  if(name === "" || roll === ""){
    alert("Name aur Roll Number zaroori hai");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", roll);

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
}
function submitTest(){
  let result = {
    name: localStorage.getItem("studentName"),
    roll: localStorage.getItem("rollNumber"),
    score: score,
    date: new Date().toLocaleString()
  };

  let allResults = JSON.parse(localStorage.getItem("results")) || [];
  allResults.push(result);
  localStorage.setItem("results", JSON.stringify(allResults));

  alert("Time Over! Test Submitted");

  localStorage.clear();
}
function startTimer(){
  timer = setInterval(() => {
    timeLeft--;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
      `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if(timeLeft <= 0){
      clearInterval(timer);
      endTest();
    }
  }, 1000);
}
function startTest(){
  let name = document.getElementById("sname").value;
  let roll = document.getElementById("roll").value;

  if(name === "" || roll === ""){
    alert("Name aur Roll Number zaroori hai");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", roll);

  document.getElementById("loginBox").style.display = "none";

  loadQuestion();   // pehla question
  startTimer();     // ⏱️ TIMER START HERE
}
function endTest(){
  clearInterval(timer);

  let totalMarks = mcqs.length;
  let percentage = (score / totalMarks) * 100;

  document.body.innerHTML = `
    <h2>Test Finished</h2>
    <p>Score: ${score}/${totalMarks}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
  `;
}
function signup(){
  let name = su_name.value;
  let roll = su_roll.value;
  let pass = su_pass.value;

  if(name=="" || roll=="" || pass==""){
    alert("All fields required");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let exists = users.find(u => u.roll === roll);
  if(exists){
    alert("Roll number already registered");
    return;
  }

  users.push({name, roll, pass});
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful, now login");
  signup.style.display="none";
  login.style.display="block";
}

function login(){
  let roll = li_roll.value;
  let pass = li_pass.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let user = users.find(u => u.roll === roll && u.pass === pass);

  if(!user){
    alert("Invalid login");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  login.style.display="none";
  test.style.display="block";

  startTest(); // tumhara existing function
}







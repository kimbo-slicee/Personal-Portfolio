 const initHero=()=>{
     // Typing animation for the name
     const nameText = "Mohammed El Aouri";
     const nameElement = document.getElementById("typing-name");
     let nameIndex = 0;
     function typeName() {
         if (nameIndex <= nameText.length) {
             nameElement.textContent = nameText.slice(0, nameIndex);
             nameIndex++;
             setTimeout(typeName, 100);
         } else {
             // Start typing roles after name is done
             setTimeout(typeRole, 1000);
         }
     }
     // Typing animation for the role/description
     const roleTexts = [
         "I'm a Full Stack Web Developer.",
         "I'm a Software Engineer with a passion for clean code.",
         "I build responsive websites & mobile apps.",
         // "I write about JavaScript, Web Dev & Productivity.",
         // "Let's turn ideas into digital reality.",
         // "Content Creator sharing tech knowledge.",
         // "Always learning, always building."
     ];
     const roleElement = document.getElementById("typing-role");

     let roleIndex = 0;
     let charIndex = 0;
     let isDeleting = false;

     function typeRole() {
         const currentText = roleTexts[roleIndex];

         if (isDeleting) {
             charIndex--;
         } else {
             charIndex++;
         }

         roleElement.textContent = currentText.slice(0, charIndex);

         if (!isDeleting && charIndex === currentText.length) {
             setTimeout(() => isDeleting = true, 1000);
         } else if (isDeleting && charIndex === 0) {
             isDeleting = false;
             roleIndex = (roleIndex + 1) % roleTexts.length;
         }

         const speed = isDeleting ? 50 : 100;
         setTimeout(typeRole, speed);
     }

    typeName()
}
export default initHero;
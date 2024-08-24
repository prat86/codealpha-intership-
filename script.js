function calculateAge() {
   
    const day = parseInt(document.getElementById('dob-day').value);
    const month = parseInt(document.getElementById('dob-month').value);
    const year = parseInt(document.getElementById('dob-year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

   
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    
    document.getElementById('result').textContent = `You are ${age} years old.`;
}

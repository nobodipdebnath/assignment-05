document.getElementById('blog-btn').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = 'blog.html';
});


document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})
document.getElementById('donate-btn2').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount2').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount2').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount2').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})
document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount3').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount3').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount3').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})
document.getElementById('donate-btn4').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount4').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount4').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount4').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})
document.getElementById('donate-btn5').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount5').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount5').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount5').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})
document.getElementById('donate-btn6').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount6').value;
    const amount = parseFloat(inputAmount);
    if(amount !== 'number' && amount < 0 && inputAmount !== ''){
        alert('Please try again !');
    }
    else{
        const currentBalance = document.getElementById('current-balance').innerText;
        const donateAmount = document.getElementById('donate-amount6').innerText;
        const newDonateAmount = parseFloat(inputAmount) + parseFloat(donateAmount);  
        document.getElementById('donate-amount6').innerText = newDonateAmount;   
        const newCurrentAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        document.getElementById('current-balance').innerText = newCurrentAmount;
    }
})

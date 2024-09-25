document.getElementById("blog-btn").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "blog.html";
});


document
  .getElementById("donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = input("input-amount");
    const amount = parseFloat(inputAmount);
    const currentBalance = balance("current-balance");
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Something Wrong . Please try again !");
    }
    else {
      const donateAmount = balance("donate-amount");
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;

      const card = document.createElement('card');
      card.innerHTML+=`
        <div class="p-4 border-2 rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Taka is Donated for famine-2024 at Feni, Bangladesh'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
      document.getElementById('history-section').appendChild(card);

      alert('You Donation has SuccessFull! Thank You ..')

    }
  });
document
  .getElementById("donate-btn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("input-amount2").value;
    const amount = parseFloat(inputAmount);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Please try again !");
    } else {
      const donateAmount = document.getElementById("donate-amount2").innerText;
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount2").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;


      const card=document.createElement('card');
      card.innerHTML+=`
         <div class="p-4 border-2 rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Taka is Donated for famine-2024 at Feni, Bangladesh'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
      document.getElementById('history-section').appendChild(card);
      alert('You Donation has SuccessFull! Thank You ..')
    }
  });
document
  .getElementById("donate-btn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("input-amount3").value;
    const amount = parseFloat(inputAmount);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Please try again !");
      document.getElementById('my_modal_5').Close();
    } else {
      const donateAmount = document.getElementById("donate-amount3").innerText;
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount3").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;

      const card=document.createElement('card');
      card.innerHTML+=`
         <div class="p-4 border-2 rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Aid for Injured in the Quota Movement'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
       document.getElementById('history-section').appendChild(card);
       alert('You Donation has SuccessFull! Thank You ..')
    }
  });
document
  .getElementById("donate-btn4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("input-amount4").value;
    const amount = parseFloat(inputAmount);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Please try again !");
    } else {
      const donateAmount = document.getElementById("donate-amount4").innerText;
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount4").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;

      const card=document.createElement('card');
      card.innerHTML+=`
         <div class="p-4 border-2 rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Aid for Injured in the Quota Movement,Dhaka'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
       document.getElementById('history-section').appendChild(card);
       alert('You Donation has SuccessFull! Thank You ..')
    }
  });
document
  .getElementById("donate-btn5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("input-amount5").value;
    const amount = parseFloat(inputAmount);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Please try again !");
    } else {
      const donateAmount = document.getElementById("donate-amount5").innerText;
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount5").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;

      const card=document.createElement('card');
      card.innerHTML+=`
         <div class="p-4 border-2 mt-8 rounded-2xl">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Donate for Flood Relief in Noakhali,Bangladesh'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
      document.getElementById('history-section').appendChild(card);
      alert('You Donation has SuccessFull! Thank You ..')

    }
  });
document
  .getElementById("donate-btn6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = document.getElementById("input-amount6").value;
    const amount = parseFloat(inputAmount);
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(amount) || amount <= 0 || amount > currentBalanceNumber) {
      alert("Please try again !");
    } else {
      const donateAmount = document.getElementById("donate-amount6").innerText;
      const newDonateAmount =
        parseFloat(inputAmount) + parseFloat(donateAmount);
      document.getElementById("donate-amount6").innerText = newDonateAmount;
      const newCurrentAmount = currentBalanceNumber - parseFloat(inputAmount);
      document.getElementById("current-balance").innerText = newCurrentAmount;

      const card=document.createElement('card');
      card.innerHTML+=`
         <div class="p-4 border-2 rounded-2xl mt-8">
        <h1 class="text-xl text-[#111111] font-bold">${amount + '  Donate for Flood Relief in Cadpur,Bangladesh'}</h1>
        <p class="text-[#111111B3] mt-2">${'Date : ' + Date()}</p>
      </div>
      `
       document.getElementById('history-section').appendChild(card);
       alert('You Donation has SuccessFull! Thank You ..')
    }
  });

document
  .getElementById("display-history")
  .addEventListener("click", function () {
    document.getElementById("history-section").classList.remove("hidden");

    document.getElementById("donation-section").classList.add("hidden");

    document.getElementById("display-history").classList.add("bg-[#B4F461]");

    document.getElementById("display-donation").classList.remove("bg-[#B4F461]");
  });

document
  .getElementById("display-donation")
  .addEventListener("click", function () {
    document.getElementById("donation-section").classList.remove("hidden");

    document.getElementById("history-section").classList.add("hidden");

    document.getElementById("display-history").classList.remove("bg-[#B4F461]");

    document.getElementById("display-donation").classList.add("bg-[#B4F461]");
  });



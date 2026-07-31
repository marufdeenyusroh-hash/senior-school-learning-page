function subscribe(){
  let email = document.getElementById('subscriberEmail').value;
  let msg = document.getElementById('subMsg');

  if(!email){
    msg.style.color = "red";
    msg.innerText = "Please enter your email";
    return;
  }

  // SAVE EMAIL
  let emails = JSON.parse(localStorage.getItem('subscribers')) || [];
  emails.push(email);
  localStorage.setItem('subscribers', JSON.stringify(emails));

  msg.style.color = "#22c55e";
  msg.innerText = "✅ Subscribed successfully!";

  document.getElementById('subscriberEmail').value = "";
}
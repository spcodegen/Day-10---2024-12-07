var md = window.markdownit();

function chatWithSaman() {
    let userInput = document.getElementById('txtUserInput').value;
    console.log(userInput);

    document.getElementById("chatBox").innerHTML += `
                    <li class="d-flex gap-4 justify-content-end">
                        <div>
                          <h6 class="mb-0">*Me</h6>
                          ${userInput}
                        </div>
                    </li>`




// ---------------------------------------------------------------------------------------


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": userInput
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDMhRBphpmQFltPuvaEhgZQRfOd49AHRgI", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log()


    document.getElementById("chatBox").innerHTML += `
                    <li class="d-flex gap-4">
                        <div>
                          <h6 class="mb-0">*Saman</h6>
                          ${md.render(result.candidates[0].content.parts[0].text)}
                        </div>
                    </li>`
  })
  .catch((error) => console.error(error));


    
}
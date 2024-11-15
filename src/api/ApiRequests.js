// api.js

const apiRequest = async (prompt, model = "llama3.2") => {
   const endpoint = "http://localhost:11434/api/generate";

   const data = {
     prompt: prompt,
     model: model,
     stream: false,
   };

   const options = {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(data),
   };

   const response = await fetch(endpoint, options);

   if (!response.ok) {
     const errorText = await response.text();
     throw new Error(
       `HTTP error! Status: ${response.status}, Message: ${errorText}`
     );
   }
   return await response.json();
 };

 export default apiRequest;
//const apiRequest = async (prompt) => {
//  const response = await fetch("https://api.ai21.com/studio/v1/j2-ultra/chat", {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//      Authorization: "Bearer TOKEN", // Replace with your AI21 API key
//    },
//    body: JSON.stringify({
//      numResults: 1,
//      temperature: 0.7,
//      messages: [
//        {
//          text: prompt,
//          role: "user",
//        },
//      ],
//      system:
//        "You are an AI assistant. Your responses should be informative and concise.",
//    }),
//  });

//  var res = await response.json();

//  return safeJSONParse(res);
//};

//function safeJSONParse(str) {
//  try {
//    return JSON.parse(str);
//  } catch (e) {
//    return str;
//  }
//}

//export default apiRequest;

const questionDisplay = document.querySelector("#question");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "pick a vacation destination:",
    answers: [
      {
        text: "New York",
        image:
          " https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3eW9ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "photos of empire state building during daytime",
        credit: "Oliver Niblett",
      },
      {
        text: "Austin",
        image:
          "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Time -lapse photography car lights on bridge",
        credit: "Carlos Alfonso",
      },
      {
        text: "portland",
        image:
          "https://images.unsplash.com/photo-1539657076185-bb5ec2ad218f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "High-rise buildings",
        credit: "Elene Kuchko",
      },
      {
        text: "New Orleans",
        image:
          "https://images.unsplash.com/photo-1541270941907-3f7143c8c7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwb3JsZWFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "road with people and house",
        credit: "Joao Fran",
      },
    ],
  },
  // question 1 with answer has finished
  {
    id: 2,
    text: "Pick a some food:",
    answers: [
      {
        text: "Itallian Food",
        image:
          "https://images.unsplash.com/photo-1634870487473-15874d3a0f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbGxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "focus photography of building windows",
        credit: "Burgess Milner",
      },
      {
        text: "Grilled fish",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        credit: "Brandon Giggs",
      },
      {
        text: "Speghetti",
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Trees beside white house",
        credit: "Phil Hearing",
      },
      {
        text: "Butter Chicken",
        image:
          "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        credit: "Phil Hearing",
      },
    ],
  },
  // question 2 with answer has finished
  {
    id: 3,
    text: "Pick a home:",
    answers: [
      {
        text: "Traditional",
        image:
          "https://unsplash.com/photos/oDCwSESwPZ4/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTkzMjYy&force=true&w=1920",
        credit: "Burgess Milner",
      },
      {
        text: "Modern",
        image:
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vcmRlcm4lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "low angle view of building",
        credit: "Brandon Giggs",
      },
      {
        text: "House",
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "Trees beside white house",
        credit: "Phil Hearing",
      },
      {
        text: "Mountains",
        image:
          "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Brown wooden cabin infrnt of forest",
        credit: "Phil Hearing",
      },
    ],
  },
  // question 3 with answer has finished
];

// quiz anwer
const quizAnswers = [
    {
        combination:["New York" , "Itallian Food" , "Traditional"],
        text:"Blue Cheese",
        image:"https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt:"Blue Cheese"
    },
    {
        combination:["Austin" , "Grilled fish" , "Mordern"],
        text:"Cheddar Cheese",
        image:"https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZGRhciUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt:"Cheddar cheese"
    },
    {
        combination:["New Orleans" , "Butter Chicken" , "Mountains"],
        text:"Halloumi",
        image:"https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV0YSUyMGNoZWVzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt:"Halloumi"
    },
    {
      combination:["portland" , "Speghetti" , "House"],
      text:"Parmesan cheese",
      image:"https://media.istockphoto.com/photos/grated-parmesan-cheese-picture-id471343790?b=1&k=20&m=471343790&s=170667a&w=0&h=Lt6O8IyU0AqDY13nnG42N-ndujl0_nbwzSraDyiTEgY="
  }
];

// quizAnswers.forEach(q=>{
//     console.log('get the result', q);
// })

// all ques will be pushed in unasweredquestion empty array down the code (line no 133) inside loopinfg function.
const unasnweredQuestions = [];

const loopQuestions = () => {
  questions.forEach((question) => {
    // create div
    // give id to this div which id already define in array above
    // add class to div
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");
    // create heading h2 and append h2 in div
    // add text from array in this h2
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    // append this title div to questionDisplay
    questionDisplay.append(titleBlock);

    // create div for answers block and give id like 1-question 0-question 2-question and add class to it

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-question's-answer";
    answersBlock.classList.add("answer-options");

    // all question id will be looped bcz of for each now push all question id inside empty array named unansweredQuestion. all the question will go inside unanswered array.
    unasnweredQuestions.push(question.id);

    // let loop answer bcz it is again an array

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      // create answer block later we will append answer block into answers block(plural)1- add click function on answer block 2- append answerImage , answerTitle,answer info into answer block
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleclick(question.id, answer.text)
      );
      // create image tag
      const answerImage = document.createElement("img");
      // add image inside src of img element and add alt tag
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      // after image create answer title h3, add text from array
      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;
    //   console.log(answerTitle);

      // after answer title, create answer info and append imagelink and soucelink into answer info

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.credit);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", "http://unsplash.com");
      // append image link and sourcelink to paragraph
      answerInfo.append(imageLink, "to", sourceLink);

      // append image in answer block to sare answer me sari image loop hogi bcz we are inside loop
      answerBlock.append(answerImage);
      // append answer title after image
      answerBlock.append(answerTitle);
      // now append answer info after answer title
      answerBlock.append(answerInfo);

      // now append answer block into answersblock
      answersBlock.append(answerBlock);
    });

    // answers ka block will be in append after question. question alredy appended now append answer so that just after question we can see answer

    questionDisplay.append(answersBlock);
  });
};
// call the function
loopQuestions();



// choosen answers(plural) is empty array, we will push choosen answer in this array
const choosenAnswers = [];

// handle clik function define here.....
// when we click on any answer we will get id of that ques and answer.text of that question. answer.text argument hai jisse get kr rahe parameter choosenAnser se
const handleclick = (questionID, ChoosenAnswer) => {
  console.log(questionID, ChoosenAnswer);

//   push choosenanswer which is answer.text if unanswered question include question.id. means exp-if we click on question id 1 so it will include  in unansweredQuestion array. now remove this id on which we have clicked(id 1). unasweredQuestion me sare question hai.jispe click hua vo question id remove ho gaya. id 1 pe click to id 1 remove hogi, unanswered me bachega left ques id 0 and 2.then choosen answer push karega. jispe click hua uska text dekhega . jispe click hua uski id unanswered questions se remove hogi..bachi sare ques ki id unanswered qus array me rahegi
if(unasnweredQuestions.includes(questionID))
  choosenAnswers.push(ChoosenAnswer);
//   remove the clicked index
const itemToRemove = unasnweredQuestions.indexOf(questionID);
if(itemToRemove> -1){
    unasnweredQuestions.splice(itemToRemove, 1);
}
console.log(choosenAnswers);
console.log(unasnweredQuestions);

// select top most unanswered question. (unanswered ques ka lowest index (math.min) top most hoga bcz first qus id 0 then id 1 then id 2 aa raha page pe..top wahi hoga jo lowest id hai index 0) then sroll to that qus id
const lowestQuestionId = Math.min(...unasnweredQuestions);
// scroll to lowest index
location.href = '#' + lowestQuestionId;

// if there is no anwered ques means we answered all the question id then only show answer block
if(!unasnweredQuestions.length){
    // scroll to answer div
    ShowAnswer();
    console.log('filled');
}

};


// show answer function define here
const ShowAnswer = ()=>{
  
    // loop quizAnswerarray
     // if choosen answer include combo 0,1,2 the whole array ko result me store karenge
    let result;
    quizAnswers.forEach(qanswer =>{
        if( choosenAnswers.includes(qanswer.combination[0])+
        choosenAnswers.includes(qanswer.combination[1])+
        choosenAnswers.includes(qanswer.combination[2])+
        choosenAnswers.includes(qanswer.combination[3])){
            // console.log(qanswer);
            result= qanswer

        }
        else if(!result){
            // if no result exist, the console
            console.log("something went wrong");
        }  
      });
  console.log(result);

            // crete answerBlock div give class resultblock, style result block in css
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('result-block');
            // create h3 add text then append h3 into answerBlock div
            const quizAnswerText = document.createElement('h3');
            quizAnswerText.textContent = result.text;
            const quizAnswerImage= document.createElement('img');
            quizAnswerImage.setAttribute('src',result.image );
            quizAnswerImage.setAttribute('alt', result.alt );
            answerBlock.append(quizAnswerText, quizAnswerImage);
        
            answerDisplay.append(answerBlock);
            

}



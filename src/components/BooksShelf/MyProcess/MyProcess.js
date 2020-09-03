import React from "react";
import Row from "./Row/Row";

const PROCESSES = [
  {
    image: {
      name: "source",
      alt:
        "Illustration of a woman holding a book standing in front of a library",
    },
    text: {
      title: "Choose The Right Sourse",
      paragraphs: [
        "Starting with a book discussing the complex and odd parts of a language, technology or whatever you want to read about is not the best thing you can do specially when you are new to that topic.",
        "Order your learning sources from easy level to the higher otherwise you will end up either quitting or loosing time jumping from one source to another to understand.",
      ],
    },
  },
  {
    image: {
      name: "less-more",
      alt:
        "Illustration of a woman holding a book standing in front of a library",
    },
    text: {
      title: "Less Is More",
      paragraphs: [
        "Intensity VS Consistency? of course consistency wins. One or two hour of reading each morning  will just give you a decent amount of knowledge of whatever you are learning which is better than spending 6 or 8 hours every while and half of which you will feel bored and your ability of deep comprehension specially for complex topics will lower to low levels.",
      ],
    },
  },
  {
    image: {
      name: "iterate",
      alt:
        "Illustration of a woman holding a book standing in front of a library",
    },
    text: {
      title: "Focus, Break, Repeat",
      paragraphs: [
        "Tech field is tough, no matter how long you've been in the field there will always be large amount of knowledge you need to consume to cope up with the industry, but as humans we have limited time and energy to learn new things on our day.",
        "What we actually need to do is to give a special care for the quality of time. Spending 2 hours with deep focus is much better than 4 hours most of which you want to sleep, eat or see your phone's notifications.",
        "To enter this deep focus point you need to go though a cycle of focusing and taking a break so that your mind rests and feel like it's starting all over again.",
        "This methodology is well known as Pomodoro Technique, you can read more about it but in brief you focus for 25min with any distractions turned off and then take a break for 5min, but after 4-6 cycles (2-3h) you take a longer break for 30min or 1h.",
        [
          "Personally I use ",
          <a
            href="https://apps.apple.com/app/apple-store/id866450515?mt=8"
            key="app"
          >
            Forest
          </a>,
          " app and ",
          <a
            href="https://chrome.google.com/webstore/detail/forest-stay-focused-be-pr/kjacjjdnoddnpbbcjilcajfhhbdhkpgk"
            key="ext"
          >
            chrome extension
          </a>,
          " to help me track my progress and the nice thing about the app is that it prevents you form opening any other app so that you can really focus, though for pro aversion it allows you to add apps to the whitelist. This really helped me as I use google translator, calculator or read a book on my device. I highly recommend it.",
        ],
      ],
    },
  },
  {
    image: {
      name: "enjoy",
      alt:
        "Illustration of a woman holding a book standing in front of a library",
    },
    text: {
      title: "Don't Study If You Don't Feel Like It",
      paragraphs: [
        "In contrary to people who say just stick to the plan and do the ******* job, sometimes forcing yourself will make the situation much worse.",
        "Instead of taking a break for a while and heal faster you will find yourself flipping your book's pages in vain and wasting time.",
        "just take your time and be nice to yourself, all the books will be there for you when you come back.",
      ],
    },
  },
  {
    image: {
      name: "drink",
      alt:
        "Illustration of a woman holding a book standing in front of a library",
    },
    text: {
      title: "Finally",
      paragraphs: ["Don't forget to bring your favorite drink with you."],
    },
  },
];
function MyProcess() {
  let processJSX = PROCESSES.map((process, index) => {
    return <Row key={index} process={process} number={index + 1} />;
  });

  return (
    <section className="my-process">
      <div className="my-container">
        <h2>My Process</h2>
        <div className="processes-wrapper">{processJSX}</div>
      </div>
    </section>
  );
}

export default MyProcess;

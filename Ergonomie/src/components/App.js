import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import Startscreen from "./Startscreen";
import Question from "./Question";
import NextButton from "./nextButton";
import Progress from "./Progress";
import Finale from "./Finale";
import Footer from "./Footer";
import Timer from "./Timer";
const initState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  highscore: 0,
  timer: 300,
};
function reducer(state, action) {
  if (action.prot === "questions")
    return { ...state, questions: action.payload };
  if (action.prot === "status") return { ...state, status: action.payload };
  if (action.prot === "newAnswer") {
    return {
      ...state,
      answer: action.payload,
    };
  }
  if (action.prot === "next") {
    if (state.index === state.questions.length - 1) {
      return {
        ...state,
        status: "finished",
        score: state.score + action.payload,
        highscore:
          state.score + action.payload > state.highscore
            ? state.score + action.payload
            : state.highscore,
      };
    }
    return {
      ...state,
      score: state.score + action.payload,
      index: state.index++,
      answer: null,
    };
  }
  if (action.prot === "restart")
    return {
      ...state,
      status: "Done",
      index: 0,
      score: 0,
      answer: null,
      timer: 20,
    };
  if (action.prot === "tick") {
    if (state.timer === 0) {
      return { ...state, status: "finished" };
    }
    return { ...state, timer: state.timer - 1 };
  }
}

function App() {
  const [
    { status, questions, index, answer, score, highscore, timer },
    dispatch,
  ] = useReducer(reducer, initState);

  useEffect(function () {
    async function fetchQuestions(url) {
      try {
        dispatch({ prot: "status", payload: "loading" });
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({ prot: "questions", payload: data });
        dispatch({ prot: "status", payload: "Done" });
      } catch (err) {
        dispatch({ prot: "status", payload: "Error" });
      }
    }
    fetchQuestions("http://localhost:8000/questions");
  }, []);

  const num_Questions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "Done" && (
          <Startscreen NQuestions={num_Questions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index + Number(answer !== null)}
              numQuestion={num_Questions}
              maxPoints={maxPoints}
              score={score}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} timer={timer} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                question={questions[index]}
                nquestions={num_Questions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finale
            dispatch={dispatch}
            score={score}
            maxPoints={maxPoints}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

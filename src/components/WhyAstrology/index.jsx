import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./styles.css";

const WhyAstrology = () => {
  return (
    <section className="why-container">
      <div className="why-content">
        <h1>
          Why Astrology ? <BsFillArrowUpCircleFill style={{ marginLeft: 10 }} />
        </h1>
        <h4>Astrology reveals the will of the God</h4>
        <p>
          I want to speak like a native Japanese person. Learning a foreign
          language has been eye opening, so I want to further improve my
          Japanese skills. AmazingTalker is a flexible platform that lets me
          schedule my lessons for whenever I need, select tutors that fit my
          budget and needs, and even purchase a single lesson if I'd like.
          Don&rsquo;t put off learning a new language &#33;
        </p>
        <p>
          I learn foreign languages to expand my future plans. Language learning
          lets me explore other interests and possibilities in my life.
          AmazingTalker is a student-oriented platform, where I can learn in my
          own pace. Tutors offer personalized courses based on my learning
          needs. Thanks to AmazingTalker, language learning has helped enrich my
          life.
        </p>
      </div>
    </section>
  );
};

export default WhyAstrology;

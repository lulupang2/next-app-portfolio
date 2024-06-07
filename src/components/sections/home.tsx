import Image from 'next/image';
import React from 'react';
const Home = () => {
  return (
    <section className="page-wrapper home">
      <div className="home-hero">
        <Image src="/images/heroLogo.svg" alt="home" fill />
      </div>
      <span className="home-title">WELCOME</span>
      <span className="home-subtitle">
        안녕하세요, 웹개발자 지성인입니다. <br />
        주로 JavaScript를 사용한 프론트엔드 작업을 많이
        해왔습니다. <br />
        현재 이 페이지는 Next.js를 사용하여 간단하게
        제작했습니다. <br />
        이곳은 제가 지금까지 작업해온 프로젝트들을 정리한
        페이지입니다. <br />
        방문해주셔서 감사합니다.👋
      </span>
    </section>
  );
};

export default Home;

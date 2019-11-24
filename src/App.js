import React from 'react';
import ProfileCard from './components/profile-card'

function App() {
  return (
    <div className="App">
      <ProfileCard 
        name="이수연"
        univ="이화여자대학교"
        major="언어병리학과"
        age={28}
        happy //참거짓//
        favoriteAnimals={["강아지", "햄스터", "사슴"]}
      ></ProfileCard>
      <ProfileCard 
        name="윤영미"
        univ="이화여자대학교"
        major="산업디자인학과"
        age={23}
        happy //참거짓//
        favoriteAnimals={["강아지", "고양이", "쿼카"]}
      ></ProfileCard>
      <ProfileCard 
        name="최수민"
        univ="서강대학교"
        major="컴퓨터공학과"
        age={25}
        happy //참거짓//
        favoriteAnimals={["사자", "토끼", "뱀"]}
      ></ProfileCard>
    </div>
  );
}

export default App;

import React from 'react';

function ProfileCard(props) {
    // const //변하지 않는 값//
    let animallist = []; //변하는 값//
    for(let i = 0 ; i < props.favoriteAnimals.length ; i++ ) {
        animallist.push(<li>{props.favoriteAnimals[i]}</li>)

    }

    return (
        <div>
            <h1>{props.name}</h1>
            <p>안녕? 나는 {props.univ}의 {props.major} 학생이야.</p>
            <p>나는 {props.age}살이고 내년이면 {props.age + 1}살이야.</p>
            <p>나는 지금 {props.happy === true ? "행복" : "불행"}해요!</p>
            <h2>좋아하는 동물</h2>
            <ul>{animallist}</ul>

        </div>
    )
}

export default ProfileCard;
import React, { Component } from 'react';

class Profiles extends Component {
    render() {
        var data = this.props.data;
        var lists = [];

        var Animals = [];
        var i= 0;
        while (i < data.animal.length) {
            Animals.push(<li key={data.animal[i]}>{data.animal[i]}</li>);
            i = i+ 1;
        }

        lists.push(
            <div key={data.name}>

                <h1>{data.name}</h1>
                <div>{`안녕하세요 저는 ${data.school}대학교의 ${data.major}과에 다니고 있습니다.`}</div>
                <div>{`올해는 ${data.age}살인데 내년엔 ${(data.age)+1}예요.`}</div>
                <div>{`지금 기분은 ${data.emotion}해요!`}</div>
                
                <h3>좋아하는 동물</h3>
                    {Animals}
                    
            </div>
        );

        return (

                <article>
                    {lists}
                </article>
        );
    }
}

export default Profiles; 
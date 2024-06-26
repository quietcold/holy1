import React, { useState } from 'react';
import {Button, Input} from "antd";

const { TextArea } = Input;
const GapFilling_Question = ({ index, precedingText, postText }) => {
    const [question, setQuestion] = useState('');

    return (
        <div className="Questionnair_question">
            <div className="question-header">
                <span className="question-info">题号: {index} (填空题)</span>
            </div>
            <h2>题目:{precedingText}___{postText}</h2>
            <TextArea showCount maxLength={100} placeholder="请输入你的答案" />
        </div>
    );
};

export default GapFilling_Question;





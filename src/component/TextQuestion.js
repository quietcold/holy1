import React, { useState } from 'react';
import {Button, Input} from "antd";
import './question.css';

const { TextArea } = Input;
const TextQuestion = ({ id, number, questionType, deleteQuestion }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    return (
        <div className="question">
            <div className="question-header">
                <span className="question-info">题号: {number} ({questionType})</span>
                <div className="question-buttons">
                    <Button onClick={() => deleteQuestion(id)} className="delete-button">删除此题</Button>
                </div>
            </div>
            <Input
                type="text"
                placeholder="在此输入您的问题"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ width: '100%', height: "50px", marginBottom: '30px' }}
            />
            <TextArea showCount maxLength={100} readOnly placeholder="用户填写行" />
        </div>
    );
};

export default TextQuestion;





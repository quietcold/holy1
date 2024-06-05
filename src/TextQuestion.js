import React, { useState } from 'react';
import './NewSurvey.css';

const TextQuestion = ({ id, number, questionType, deleteQuestion }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <div className="question">
            <div className="question-header">
                <span className="question-info">题号: {number} ({questionType})</span>
                <div className="question-buttons">
                    <button onClick={() => deleteQuestion(id)} className="delete-button">删除此题</button>
                </div>
            </div>
            <input
                type="text"
                placeholder="在此输入您的问题"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <input
                type="text"
                placeholder="用户填写行"
                value={answer}
                readOnly // 将此输入框设置为只读
                style={{ width: '100%', marginBottom: '10px' }}
            />
        </div>
    );
};

export default TextQuestion;





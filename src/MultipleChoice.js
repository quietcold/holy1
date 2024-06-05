import React, { useState } from 'react';
import './NewSurvey.css';

const MultipleChoice = ({ id, number, questionType, deleteQuestion }) => {
    const [options, setOptions] = useState(['', '']);
    const [question, setQuestion] = useState('');

    const addOption = () => {
        setOptions([...options, '']);
    };

    const deleteOption = (index) => {
        if (options.length > 2) {
            setOptions(options.filter((_, i) => i !== index));
        }
    };

    const handleOptionChange = (value, index) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    return (
        <div className="question">
            <div className="question-header">
                <span className="question-info">题号: {number} ({questionType})</span>
                <div className="question-buttons">
                    <button onClick={() => deleteQuestion(id)} className="delete-button">删除此题</button>
                    <button onClick={addOption} className="add-option-button">添加选项</button>
                </div>
            </div>
            <input
                type="text"
                placeholder="在此输入您的问题"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            {options.map((option, index) => (
                <div key={index} className="option-container">
                    <input
                        type="text"
                        placeholder="在此输入您的选项"
                        value={option}
                        onChange={(e) => handleOptionChange(e.target.value, index)}
                    />
                    <button onClick={() => deleteOption(index)}>删除</button>
                </div>
            ))}
        </div>
    );
};

export default MultipleChoice;









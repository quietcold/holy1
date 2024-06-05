import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleChoiceQuestion from './SingleChoice';
import MultipleChoiceQuestion from './MultipleChoice';
import TextQuestion from './TextQuestion';
import './NewSurvey.css';

const NewSurvey = () => {
    const [surveyName, setSurveyName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const addQuestion = (type) => {
        const questionType = type === 'SingleChoice' ? '单选题' : type === 'MultipleChoice' ? '多选题' : '填空题';
        setQuestions([...questions, { id: Date.now(), type, questionType, topic: '', options: [], answer: '' }]);
    };

    const deleteQuestion = (id) => {
        const updatedQuestions = questions.filter(q => q.id !== id).map((q, index) => ({
            ...q,
            number: index + 1
        }));
        setQuestions(updatedQuestions);
    };

    const handleCreateComplete = () => {
        setShowConfirm(true);
    };

    const handleSubmit = async () => {
        const requestData = {
            code: 200,
            data: {
                id: Date.now(),
                questionNaireName: surveyName,
                questionList: questions.map(q => ({
                    className: q.className,
                    topic: q.topic,
                    options: q.type === 'SingleChoice' || q.type === 'MultipleChoice' ? q.options : undefined,
                    answer: q.type === 'Text' ? q.answer : undefined
                }))
            },
            msg: '创建问卷'
        };

        try {
            const response = await fetch('http://127.0.0.1:4523/m1/4584133-4233190-default/api/submitSurvey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });

            if (response.ok) {
                setSuccessMessage(true);
                setTimeout(() => {
                    navigate('/survey-history');
                }, 2000);
            } else {
                console.error('问卷提交失败');
            }
        } catch (error) {
            console.error('请求失败', error);
        }
    };

    const handleConfirm = (confirmed) => {
        setShowConfirm(false);
        if (confirmed) {
            handleSubmit();
        }
    };

    const renderQuestion = (question, index) => {
        switch (question.type) {
            case 'SingleChoice':
                return <SingleChoiceQuestion key={question.id} id={question.id} number={index + 1} questionType={question.questionType} deleteQuestion={deleteQuestion} />;
            case 'MultipleChoice':
                return <MultipleChoiceQuestion key={question.id} id={question.id} number={index + 1} questionType={question.questionType} deleteQuestion={deleteQuestion} />;
            case 'Text':
                return <TextQuestion key={question.id} id={question.id} number={index + 1} questionType={question.questionType} deleteQuestion={deleteQuestion} />;
            default:
                return null;
        }
    };

    return (
        <div className="new-survey">
            <div className="sidebar">
                <h3>选择您要添加的题目：</h3>
                <button onClick={() => addQuestion('SingleChoice')}>添加单选题</button>
                <button onClick={() => addQuestion('MultipleChoice')}>添加多选题</button>
                <button onClick={() => addQuestion('Text')}>添加填空题</button>
            </div>
            <div className="content">
                <input
                    type="text"
                    placeholder="请输入问卷名字"
                    value={surveyName}
                    onChange={(e) => setSurveyName(e.target.value)}
                    className="survey-name-input"
                />
                {questions.map((question, index) => (
                    <div key={question.id} id={`question-${question.id}`} className="question">
                        {renderQuestion(question, index)}
                    </div>
                ))}
                {questions.length > 0 && (
                    <button onClick={handleCreateComplete} className="create-complete-button">创建完成</button>
                )}
                {showConfirm && (
                    <div className="confirm-dialog">
                        <p>是否确定完成创建？</p>
                        <button onClick={() => handleConfirm(true)}>确定</button>
                        <button onClick={() => handleConfirm(false)}>取消</button>
                    </div>
                )}
                {successMessage && (
                    <div className="success-message">
                        <p>创建成功</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewSurvey;














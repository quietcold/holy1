import React, { useEffect, useState } from 'react';
import './SurveyHistory.css';

const SurveyHistory = () => {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await fetch('http://127.0.0.1:4523/m1/4584133-4233190-default/api/getSurveys');
                const data = await response.json();
                if (response.ok) {
                    setSurveys(data.surveys);
                } else {
                    console.error('获取历史问卷失败');
                }
            } catch (error) {
                console.error('请求失败', error);
            }
        };

        fetchSurveys();
    }, []);

    return (
        <div className="survey-history-container">
            <div className="sidebar">
                <h3>历史问卷</h3>
                {surveys.length > 0 ? (
                    <ul>
                        {surveys.map(survey => (
                            <li key={survey.id} title={survey.questionNaireName}>
                                {survey.questionNaireName}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>暂时无问卷</p>
                )}
            </div>
            <div className="content">
                <h1>历史问卷页面</h1>
                {surveys.length > 0 ? (
                    <ul>
                        {surveys.map(survey => (
                            <li key={survey.id}>
                                <h3>{survey.questionNaireName}</h3>
                                <ul>
                                    {survey.questionList.map((question, index) => (
                                        <li key={index}>
                                            <p>{question.topic}</p>
                                            {question.options && (
                                                <ul>
                                                    {question.options.map((option, idx) => (
                                                        <li key={idx}>{option}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {question.answer && <p>答案: {question.answer}</p>}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>暂无历史问卷</p>
                )}
            </div>
        </div>
    );
};

export default SurveyHistory;


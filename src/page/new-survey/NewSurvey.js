import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {renderQuestion} from "../../component/renderQuestion";
import './NewSurvey.css';
import {Button, Flex, Input} from "antd";
import {createqn} from "../../serve/createqn";

var username = localStorage.getItem("username")

const NewSurvey = () => {
    const [surveyName, setSurveyName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const addQuestion = (type) => {
        const className = type === 'SingleChoice' ? 'SingleChoice_Question' : type === 'MultipleChoice' ?
            'MultipleChoice_Question' : 'GapFilling_Question';
        // setQuestions([...questions, {id: Date.now(), questionType: className, topic: '', options: [], answer: ''}]);
        setQuestions([...questions, {
            id: Date.now(), className: className, topic: '', options: [], answer: '',
            iSremark: false, iSrequired: true, precedingText: '', postText: ''
        }]);
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

    const handleSubmit = () => {
        createqn(username, surveyName, questions).then(
            (response) => {
                if (response.data.code >= 0) {
                    setSuccessMessage(true);
                    setTimeout(() => {
                        navigate('/survey-history');
                    }, 2000);
                } else {
                    console.error('问卷提交失败');
                }
            })

        // const requestData = {
        //     code: 200,
        //     data: {
        //         id: Date.now(),
        //         questionNaireName: surveyName,
        //         questionList: questions.map(q => ({
        //             className: q.className,
        //             topic: q.topic,
        //             options: q.type === 'SingleChoice' || q.type === 'MultipleChoice' ? q.options : undefined,
        //             answer: q.type === 'Text' ? q.answer : undefined
        //         }))
        //     },
        //     msg: '创建问卷'
        // };
        //
        // try {
        //     const response = await fetch('http://127.0.0.1:4523/m1/4584133-4233190-default/api/submitSurvey', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(requestData)
        //     });
        //
        //     if (response.ok) {
        //         setSuccessMessage(true);
        //         setTimeout(() => {
        //             navigate('/survey-history');
        //         }, 2000);
        //     } else {
        //         console.error('问卷提交失败');
        //     }
        // } catch (error) {
        //     console.error('请求失败', error);
        // }
    };

    const handleConfirm = (confirmed) => {
        setShowConfirm(false);
        if (confirmed) {
            handleSubmit();
        }
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    }, [questions]);

    return (
        <Flex className="bgGradient">
            <div className="sidebar">
                <h3>选择您要添加的题目：</h3>
                <Flex vertical gap='large'>
                    <Button onClick={() => addQuestion('SingleChoice')}
                            style={{height: '50px', width: "auto", fontSize: 'large'}}>添加单选题</Button>
                    <Button onClick={() => addQuestion('MultipleChoice')}
                            style={{height: '50px', width: "auto", fontSize: 'large'}}>添加多选题</Button>
                    <Button onClick={() => addQuestion('Text')}
                            style={{height: '50px', width: "auto", fontSize: 'large'}}>添加填空题</Button>
                </Flex>
            </div>
            <div className="content">
                <div>
                    <Input placeholder="请输入问卷名字" onChange={(e) => setSurveyName(e.target.value)}
                           className="survey-name-input"/>
                </div>
                <div className='questionlist'>
                    {questions.map((question, index) => (
                        <div key={question.id} id={`question-${question.id}`} className="question">
                            {renderQuestion(question, index, deleteQuestion)}
                        </div>
                    ))}
                    <div ref={messagesEndRef}/>
                </div>
                {questions.length > 0 && (
                    <Button type="primary" size='large' onClick={handleCreateComplete}
                            className="create-complete-button">创建完成</Button>
                )}
                {showConfirm && (
                    <div className="confirm-dialog">
                        <p>是否确定完成创建？</p>
                        <Button onClick={() => handleConfirm(true)}>确定</Button>
                        <Button onClick={() => handleConfirm(false)}>取消</Button>
                    </div>
                )}
                {successMessage && (
                    <div className="success-message">
                        <p>创建成功</p>
                    </div>
                )}
            </div>
        </Flex>
    );
};

export default NewSurvey;
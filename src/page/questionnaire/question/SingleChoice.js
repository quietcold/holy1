import React, {useState} from 'react';
import {Input, Radio, Space} from 'antd';

const SingleChoice_Question = ({index, topic, options}) => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="Questionnair_question">
            <div className="question-header">
                <span className="question-info">题号: {index} (单选题)</span>
            </div>
            <h2>题目:{topic}</h2>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    {options.map((option, index) => (<Radio value={index}>{option}</Radio>))}
                </Space>
            </Radio.Group>
        </div>
    );
};

export default SingleChoice_Question;





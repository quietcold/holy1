import React, { useState } from 'react';

import { Checkbox, Col, Row } from 'antd';

const MultipleChoice_Question = ({ index, topic, options }) => {
    const [value, setValue] = useState([]);
    // const onChange = (e) => {
    //     var valuetemp = value
    //     // js检查数组中是否包含某个元素
    //     console.log(value.indexOf(e.target.value))
    //     if(value.indexOf(e.target.value)===-1){
    //         valuetemp.push(e.target.value)
    //     }else{
    //         valuetemp.splice(value.indexOf(e.target.value),1);
    //     }
    //     setValue(valuetemp);
    // };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <div className="Questionnair_question">
            <div className="question-header">
                <span className="question-info">题号: {index} (多选题)</span>

            </div>
            <h2>题目:{topic}</h2>
            <Checkbox.Group
                style={{
                    width: '100%',
                }}
                onChange={onChange}
            >
                <Row>
                    {options.map((option, index) => (<Col span={12}>
                        <Checkbox value={index}>{option}</Checkbox>
                    </Col>))}
                </Row>
            </Checkbox.Group>
            {/*<Radio.Group onChange={onChange} value={value}>*/}
            {/*    <Space direction="vertical">*/}
            {/*        {options.map((option, index) => (<Radio value={index}>{option}</Radio>))}*/}
            {/*    </Space>*/}
            {/*</Radio.Group>*/}
        </div>
    );
};

export default MultipleChoice_Question;


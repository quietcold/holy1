import React, {useState, useRef, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import style from "./Questionnair.css";
import {Button, Divider, Flex, Input, Popconfirm} from "antd";
import {getqn} from "../../serve/getqn";
import MultipleChoiceQuestion from "../../component/MultipleChoice";
import TextQuestion from "../../component/TextQuestion";
import SingleChoice_Question from "./question/SingleChoice";
import MultipleChoice_Question from "./question/MultipleChoice";
import GapFilling_Question from "./question/TextQuestion";

// 示例数据
const qn = {
    id: 0,
    questionList: [
        {
            answer: "填空题答案",
            className: "GapFilling_Question",
            iSremark: true,
            iSrequired: true,
            postText: "后段文本",
            precedingText: "前段文本",
            remark: "this is test",
            topic: "test"
        },
        {
            chooseIndex: [
                0
            ],
            className: "MultipleChoice_Question",
            iSremark: true,
            iSrequired: true,
            options: [
                "多选题选项1","多选题选项2","多选题选项3","多选题选项4"
            ],
            remark: "this is test",
            topic: "test"
        },
        {
            chooseIndex: 0,
            className: "SingleChoice_Question",
            iSremark: true,
            iSrequired: true,
            options: [
                "单选题选项1", "单选题选项2", "单选题选项3", "单选题选项4"
            ],
            remark: "this is test",
            topic: "test"
        },
    ],
    "questionNaireName": "测试问卷"
}

const renderQuestion = (question, index) => {
    console.log(question, index)
    switch (question.className) {
        case 'SingleChoice_Question':
            return <SingleChoice_Question key={question.id} index={index + 1} topic={question.topic}
                                          options={question.options}/>;
        case 'MultipleChoice_Question':
            return <MultipleChoice_Question key={question.id} index={index + 1} topic={question.topic}
                                            options={question.options}/>;
        case 'GapFilling_Question':
            return <GapFilling_Question key={question.id} index={index + 1} postText={question.postText}
                                        precedingText={question.precedingText}/>;
        default:
            return null;
    }
};

function Questionnair() {
    const [param] = useSearchParams()
    const qnid = param.get("id")

    // const qn = getqn(qnid)

    // const [submit, setsubmit] = useState(false)
    // const [confirmsubmit, setconfirmsubmit] = useState(false)

    const confirm = () =>
        new Promise((resolve) => {
            // TODO 提交问卷
            setTimeout(() => resolve(null), 3000);
        });

    return (
        <Flex className="Questionnair_bgGradient">
            <div className="Questionnair_content">
                <h2 align="center">
                    {qn.questionNaireName}
                </h2>

                {qn.questionList.map((question, index) => (
                    <div key={question.id} id={`question-${question.id}`} className="">
                        {renderQuestion(question, index)}
                        <Divider style={{height: "2px"}}/>
                    </div>
                ))}

                <Popconfirm
                    title="是否提交"
                    onConfirm={confirm}
                    // onOpenChange={() => console.log('open change')}
                >
                    <Button type="primary" size='large' className="Questionnair_submitbutton">提交</Button>
                </Popconfirm>
            </div>
        </Flex>
    )
};

export default Questionnair;













